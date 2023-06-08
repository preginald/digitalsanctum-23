import { defineStore } from "pinia";

interface User {
    _id: {
        $oid: string;
    };
    email: string;
    createdAt: {
        $date: string;
    };
    updatedAt: {
        $date: string;
    };
    __v: number;
    name: string;
    first_name: string;
    last_name: string;
    phone: string;
    business_name: string;
}

interface Token {
    _id: {
        $oid: string;
    };
    email: string;
    token: string;
    referrer: string;
    createdAt: {
        $date: string;
    };
    updatedAt: {
        $date: string;
    };
    __v: number;
}

export const useUserStore = defineStore("UserStore", {
    state: () => {
        return {
            user: {
                email: "",
                name: "",
                first_name: "",
                last_name: "",
                phone: "",
                business_name: "",
                business_size: "",
                employee_count: "",
                business_industry: "",
                research: {
                    ai_use: null,
                    ai_tech: [],
                    opportunities: [],
                    budget: "",
                    implementation_timeline: ""
                }
            },
            session: false,
            form: {
                email: { valid: false, mode: "read" },
                names: { valid: false, mode: "read" }
            }
        }
    },
    actions: {
        setUser(user: any) {
            this.user.email = user.email;
            this.user.first_name = user.first_name;
            this.user.last_name = user.last_name;
            this.user.phone = user.phone;
            this.user.business_name = user.business_name;
            this.user.business_size = user.business_size;
            this.user.employee_count = user.employee_count;
            this.user.business_industry = user.business_industry;
            this.user.research = user.research;
        },
        async createUser(data: {}): Promise<void> {
            await $fetch("/api/user/create", {
                method: "POST",
                body: data,
            });
        },

        async getUserByEmail(email: string): Promise<any> {
            const { data: userResponse } = await useFetch("/api/user/" + email);
            if (userResponse.value?.email === undefined) {
                await this.createUser({ email });
            } else {
                const user = userResponse.value as User;
                this.setUser(user)
                this.validateEmail()
                this.validateNames()
            }
            return this.user;
        },


        async getUserByEmailAndSaveToken(referrer: string): Promise<any> {
            const email = this.user.email;
            await this.getUserByEmail(this.user.email);

            const { data: tokenResponse } = await useFetch("/api/token/create", {
                method: "POST",
                body: { email, referrer },
            });

            if (tokenResponse.value === null) {
                // Handle error case
                throw new Error("Failed to create token");
            }


            const createdAt = (tokenResponse.value as Token).createdAt;
            const token = (tokenResponse.value as Token).token;
            const active = this.isWithinTwoMinutes(createdAt)
            await this.sendEmail(token)

            return active
        },

        async saveUserResearchByEmail(): Promise<void> {
            const { data: user } = await useFetch("/api/user/" + this.user.email);

            if (!user.value || user.value.email === undefined) {
                throw new Error("User not found"); // Handle the case when user is not found
            }

            user.value.business_size = this.user.business_size;
            user.value.business_industry = this.user.business_industry;
            user.value.employee_count = this.user.employee_count;
            user.value.employee_count = this.user.employee_count;
            user.value.research = this.user.research;

            const { data: updatedUser } = await useFetch("/api/user/update/" + user.value.email, {
                method: "PUT",
                body: user.value,
            })

            console.log("User research saved!")

            return updatedUser

        },

        async saveUserInfoByEmail(): Promise<void> {
            const { data: user } = await useFetch("/api/user/" + this.user.email);

            if (!user.value || user.value.email === undefined) {
                throw new Error("User not found"); // Handle the case when user is not found
            }

            user.value.first_name = this.user.first_name;
            user.value.last_name = this.user.last_name;
            user.value.phone = this.user.phone;
            user.value.business_name = this.user.business_name;

            const { data: updatedUser } = await useFetch("/api/user/update/" + user.value.email, {
                method: "PUT",
                body: user.value,
            })

            this.form.names.mode = "read"

            return updatedUser

        },

        async saveResearchByEmail(): Promise<void> {
            const { data: user } = await useFetch("/api/user/" + this.user.email);

            if (!user.value || user.value.email === undefined) {
                throw new Error("User not found"); // Handle the case when user is not found
            }

            user.value.business_size = this.user.business_size;
            user.value.business_industry = this.user.business_industry;
            user.value.employee_count = this.user.employee_count;
            user.value.employee_count = this.user.employee_count;
            user.value.research = this.user.research;
            user.value.phone = this.user.phone;
            user.value.business_name = this.user.business_name;

            const { data: updatedUser } = await useFetch("/api/user/update/" + user.value.email, {
                method: "PUT",
                body: user.value,
            })

            return updatedUser

        },

        async getTokenById(id: string): Promise<{ status: string; referrer: string }> {
            const { data: tokenResponse } = await useFetch("/api/token/" + id);

            if (!tokenResponse.value) {
                console.log("Token not found");
                return { status: "invalid", referrer: "" };
            }

            const tokenValue = tokenResponse as { value: Token };

            if (this.isWithinTwoMinutes(tokenValue.value.createdAt)) {
                this.user.email = tokenValue.value.email;
                this.getUserByEmail(this.user.email);
                this.session = true
                return { status: "active", referrer: tokenValue.value.referrer };
            } else {
                this.session = false
                return { status: "expired", referrer: tokenValue.value.referrer };
            }
        },
        isWithinTwoMinutes(createdAt: string): boolean {
            const createdAtDate = new Date(createdAt);
            const now = new Date();
            const twoMinutesAgo = new Date(now.getTime() - 2000 * 60000); // 2 minutes in milliseconds

            return createdAtDate >= twoMinutesAgo && createdAtDate <= now;
        },
        validateNames() {
            if (this.user.first_name && this.user.last_name && this.user.phone && this.user.business_name) {
                this.form.names.valid = true
                this.form.names.mode = "read"
            } else {
                this.form.names.valid = false
                this.form.names.mode = "edit"
            }
        },
        validateEmail() {
            const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            if (regex.test(this.user.email)) {
                this.form.email.valid = true
                this.form.email.mode = "read"
            } else {
                return false
            }
        },
        async sendEmail(token: string) {
            const greeting = this.user.first_name === undefined ? "Hi," : `Hi ${this.user.first_name}`
            const config = useRuntimeConfig()
            const X_API_KEY = config.X_API_KEY
            const { data: response } = fetch(
                'https://dispatch.digitalsanctum.com.au/send_email',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-KEY': 'boomshakalaka'
                    },
                    body: JSON.stringify({
                        to: this.user.email,
                        subject: 'Your one time token to Digital Sanctum',
                        body: `${greeting}\n\nPlease click the following link to complete the email verification to access Digital Sanctum online services. The token and link is valid for 5 minutes.\n\nhttps://www.digitalsanctum.com.au/token/${token}\n\nThis OTP will be used to verify the device you are logging in from. For account safety, do not share your OTP with others.`
                    })
                }
            )
        }
    }
})