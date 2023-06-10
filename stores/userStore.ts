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
            this.user.phone = user.phone === undefined ? "" : user.phone
            this.user.business_name = user.business_name;
            this.user.business_size = user.business_size;
            this.user.employee_count = user.employee_count;
            this.user.business_industry = user.business_industry;
            if (user.research === undefined) {
                this.setUserResearch()
            } else {
                this.user.research = user.research;
            }
        },

        setUserResearch() {
            this.user.research = {
                ai_use: null,
                ai_tech: [],
                opportunities: [],
                budget: "",
                implementation_timeline: ""
            }
        },

        async createUser(data: {}): Promise<void> {
            await $fetch("/api/user/create", {
                method: "POST",
                body: data,
            });
        },

        async getUserByEmail(email: string): Promise<any> {
            const userResponse = await $fetch("/api/user/" + email);
            if (userResponse.email === undefined) {
                await this.createUser({ email });
            } else {
                const user = userResponse as User;
                this.setUser(user)
                this.validateEmail()
                this.validateNames()
            }
            return this.user;
        },


        async getUserByEmailAndSaveToken(referrer: string): Promise<any> {
            const email = this.user.email;
            await this.getUserByEmail(this.user.email);

            const { data: tokenResponse } = await $fetch("/api/token/create", {
                method: "POST",
                body: { email, referrer },
            });

            if (tokenResponse === null) {
                // Handle error case
                throw new Error("Failed to create token");
            }


            const createdAt = (tokenResponse as Token).createdAt;
            const token = (tokenResponse as Token).token;
            const active = this.isWithinTwoMinutes(createdAt)
            const response = await this.sendEmail(token)

            return { active, response }
        },

        async saveUserResearchByEmail(): Promise<void> {
            const { data: user } = await $fetch("/api/user/" + this.user.email);

            if (!user || user.email === undefined) {
                throw new Error("User not found"); // Handle the case when user is not found
            }

            user.business_size = this.user.business_size;
            user.business_industry = this.user.business_industry;
            user.employee_count = this.user.employee_count;
            user.employee_count = this.user.employee_count;
            user.research = this.user.research;

            const { data: updatedUser } = await $fetch("/api/user/update/" + user.email, {
                method: "PUT",
                body: user,
            })

            console.log("User research saved!")

            return updatedUser

        },

        async saveUserInfoByEmail(): Promise<void> {
            const { data: user } = await $fetch("/api/user/" + this.user.email);

            if (!user || user.email === undefined) {
                throw new Error("User not found"); // Handle the case when user is not found
            }

            user.first_name = this.user.first_name;
            user.last_name = this.user.last_name;
            user.phone = this.user.phone;
            user.business_name = this.user.business_name;

            const { data: updatedUser } = await $fetch("/api/user/update/" + user.value.email, {
                method: "PUT",
                body: user,
            })

            this.form.names.mode = "read"

            return updatedUser

        },

        async saveResearchByEmail(): Promise<void> {
            const { data: user } = await $fetch("/api/user/" + this.user.email);

            if (!user || user.email === undefined) {
                throw new Error("User not found"); // Handle the case when user is not found
            }

            user.business_size = this.user.business_size;
            user.business_industry = this.user.business_industry;
            user.employee_count = this.user.employee_count;
            user.employee_count = this.user.employee_count;
            user.research = this.user.research;
            user.phone = this.user.phone;
            user.business_name = this.user.business_name;

            const { data: updatedUser } = await $fetch("/api/user/update/" + user.value.email, {
                method: "PUT",
                body: user,
            })

            return updatedUser

        },

        async getTokenById(id: string): Promise<{ status: string; referrer: string }> {
            const tokenResponse: Token = await $fetch("/api/token/" + id);

            if (!tokenResponse) {
                console.log("Token not found");
                return { status: "invalid", referrer: "" };
            }

            if (this.isWithinTwoMinutes(tokenResponse.createdAt)) {
                this.user.email = tokenResponse.email;
                this.getUserByEmail(this.user.email);
                this.session = true
                return { status: "active", referrer: tokenResponse.referrer };
            } else {
                this.session = false
                return { status: "expired", referrer: tokenResponse.referrer };
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
            const smtp_address = 'https://dispatch.digitalsanctum.com.au/send_email'
            const greeting = this.user.first_name === undefined ? "Hi," : `Hi ${this.user.first_name}`
            const config = useRuntimeConfig()
            const X_API_KEY = config.X_API_KEY
            const response = fetch(
                smtp_address,
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
            return response
        }
    }
})