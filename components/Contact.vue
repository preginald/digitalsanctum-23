<template>
    <!-- Call to Action -->
    <section id="contact" class="py-16 bg-white dark:bg-gray-900 dark:text-silver-light text-charcoal-dark">
        <!-- <div class="container mx-auto px-4 text-center"> -->
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="text-4xl font-bold mb-6">
                Ready to Transform Your Business?
            </h2>
            <p hidden class="text-xl mb-12">
                Get in touch with our team for a consultation or to learn more about our services.
            </p>
            <p class="text-xl mb-12">
                Thank you for considering our services. We would like to inform you that,
                due to an overwhelming demand and our commitment to providing exceptional service to our existing clients,
                we are currently unable to take on any new clients until after May 2023.
            </p>
            <p class="text-xl mb-12">
                We appreciate your understanding and apologise for any inconvenience this may cause. Please feel free to
                check back with us after May 2023 for updates on our availability, and thank you once again for your
                interest in our services.
            </p>
            <p class="text-xl mb-12">
                Warm regards,<br />
                <br />
                Peter Reginald,<br />
                Digital Sanctum
            </p>
            <form hidden action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                        email</label>
                    <input type="email" id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@yourcompany.com.au" required>
                </div>
                <div>
                    <label for="subject"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" id="subject"
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                        message</label>
                    <textarea id="message" rows="6"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" class="btn-primary">Send
                    message</button>
            </form>
        </div>
    </section>
</template>
<script>
</script>