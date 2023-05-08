import { z } from "zod";
import Stripe from 'stripe';

const stripe = new Stripe(env.SECRET_STRIPE_KEY, {
    apiVersion: "2022-11-15",
})

import {
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";
import { env } from "@/env.mjs";

export const checkoutRouter = createTRPCRouter({
  createCheckout: protectedProcedure
    .mutation(async ({ctx}) => {
        return stripe.checkout.sessions.create({
          payment_method_types: ['card', 'bancontact'],
            metadata: {
              userId: ctx.session.user.id
            },
            success_url: `${env.HOST_NAME}`,
            cancel_url: `${env.HOST_NAME}`,
            line_items: [
              {price: env.PRICE_ID, quantity: 1},
            ],
            mode: 'payment',
          });
    }),
});
