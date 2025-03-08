'use server';

import { createCheckoutSession } from '@/lib/stripe';
import { redirect } from 'next/navigation';

export async function handleCheckout(items: any[]) {
  // Create a Stripe checkout session
  const session = await createCheckoutSession(items);

  // Check if session.url is not null before redirecting
  if (session.url) {
    redirect(session.url); // Redirect to the Stripe checkout page
  } else {
    // Handle the case where session.url is null
    throw new Error('Failed to create a checkout session. Please try again.');
    // Alternatively, you can redirect to an error page:
    // redirect('/checkout-error');
  }
}