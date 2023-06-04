import { defineStore } from "pinia";

export const useTokenStore = defineStore("TokenStore", {
    state: () => {
        return {
            token: {
                email: "",
                created_at: "",
            }
        }
    },
    actions: {
        async createToken(data: {}) {
            const user = await $fetch("/api/token/create", {
                method: "POST",
                body: data,
            });
        },
    }
})
