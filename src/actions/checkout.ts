'use server';

import { createCheckoutSession } from '@/lib/stripe';
import { redirect } from 'next/navigation';

export async function handleCheckout(items: any[]) {
  try {
    // Create a Stripe checkout session
    const session = await createCheckoutSession(items);

    // Check if session.url is not null before redirecting
    if (session.url) {
      redirect(session.url);
    } else {
      // Handle the case where session.url is null
      throw new Error('Failed to create a checkout session.');
    }
  } catch (error) {
    // Log the error or handle it in a way that makes sense for your application
    console.error(error);
    // Redirect to an error page or show a message to the user
    redirect('/checkout-error');
  }
}