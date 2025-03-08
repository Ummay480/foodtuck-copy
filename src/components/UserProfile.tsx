'use client';

import { useUser } from '@clerk/nextjs';

export default function UserProfile() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Not signed in</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Hello, {user.firstName}!</p>
      <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
    </div>
  );
}