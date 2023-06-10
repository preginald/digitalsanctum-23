import { useUserStore } from "~/stores/userStore"

export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore()
    const router = useRouter()
    var token

    if (to.name === 'token-id') {
        const id = to.params.id
        token = await userStore.getTokenById(id)
        const tokenCookie = useCookie("token")
        tokenCookie.value = id
    }

    if (token && token.status === "active") {
        router.push(token.referrer);
    } else {
        console.log("Token not found or not active");
        // You can perform any necessary actions or return an appropriate value
        // For example, you can show an error message to the user or redirect to a default page
    }
})
