import { NextApiRequest, NextApiResponse } from 'next';
import stripe from "@/lib/stripe";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { amount } = await req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: 'Payment failed' });
  }
}