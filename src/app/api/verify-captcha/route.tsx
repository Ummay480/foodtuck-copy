import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { token } = await request.json();

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(url, { method: "POST" });
  const data = await response.json();

  return NextResponse.json({ success: data.success });
}   
