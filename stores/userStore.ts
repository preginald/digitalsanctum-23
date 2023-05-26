import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
    state: () => {
        return {
            user: {
                email: "",
                name: "",
                first_name: "",
                last_name: "",
            }
        }
    },
    actions: {
        async getUserByEmail(email: string) {
            const { data: user } = await useFetch(
                "/api/user/" + email
            );
            this.user = user;
            return user
        },
    }
})