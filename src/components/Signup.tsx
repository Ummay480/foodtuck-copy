"use client"
async function handleSignUp(userId: string) {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ userId }),
      headers: { "Content-Type": "application/json" },
    });
  
    const data = await res.json();
    alert(data.message || data.error);
  }
  
  async function handleVerify(userId: string, code: string) {
    const res = await fetch("/api/auth/verify", {
      method: "POST",
      body: JSON.stringify({ userId, code }),
      headers: { "Content-Type": "application/json" },
    });
  
    const data = await res.json();
    alert(data.message || data.error);
  }
  