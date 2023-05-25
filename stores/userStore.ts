import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        async getUserByEmail(email: string) {
            const { data: user } = await useFetch(
                "/api/user/" + email
            );
            this.user = user;
        },
    }
})