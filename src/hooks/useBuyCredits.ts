import { env } from '@/env.mjs';
import { api } from '@/utils/api';
import { loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51N4rJPFUv8dayyRFHuQmXFQVFlAfeK0FRkNgtIV6tNzTWvwgkCI5zhEMfrzNpPqvti1VMH2eZxZTqhHWAh0wh9LV00x7so7Qoc");

export const useBuyCredits = () => {
    const checkout = api.checkout.createCheckout.useMutation()

    return {
        buyCredits: async () => {
            const response = await checkout.mutateAsync()
            const stripe = await stripePromise
            await stripe?.redirectToCheckout({
                sessionId: response.id
            })

        }
    }
}