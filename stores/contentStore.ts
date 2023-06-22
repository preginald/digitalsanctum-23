import { defineStore } from "pinia";

export const useContentStore = defineStore("ContentStore", {
    state: () => {
        return {
            content: {},
            contents: [],
            related: []
        }
    },
    actions: {
        async createContent(data: {}): Promise<void> {
            await $fetch("/api/content/create", {
                method: "POST",
                body: data,
            });
        },
        async getContentBySlug(slug: string, tag: string) {
            // console.log("slug:", slug, "tag", tag)
            this.content = await $fetch(slug)
            if (this.content._id) {
                this.related = await $fetch('/api/content/related/' + this.content._id + '/' + tag)
            }
        },
        async getContents() {
            this.contents = await $fetch('/api/content')
        },
        async updateContent() {
            if (this.content._id) {
                await $fetch(`/api/content/update/${this.content._id}`, {
                    method: "PUT",
                    body: this.content,
                });
            }
        }
    }
})