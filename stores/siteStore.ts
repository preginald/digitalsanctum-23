import { defineStore } from "pinia";

export const useSiteStore = defineStore("SiteStore", {
    state: () => {
        return {
            theme: "dark"
        }
    },
    actions: {
        setTheme(newTheme: string) {
            this.theme = newTheme;
        },
    }
})