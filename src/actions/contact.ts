"use server";
import * as z from "zod";
import { ContactSchema } from "@/schema";

export const Contact = async (data: z.infer<typeof ContactSchema>) => {
  const validatedData = ContactSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: "Invalid Field" };
  }
  const { fname, lname, phone, email, message } = validatedData.data;
  console.log(`Contact Form Submitted: ${fname} ${lname} ${phone} ${email} ${message}`);

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycby7mDTg9AYsJRHnXjmtQv34Wdln3AQRXvSjkEiGiF5VADDxlPHmsOMswywUP1CldDHChQ/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fname,
        lname,
        phone,
        email,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Success:', result);
    return { success: "We have received your information. We will contact you soon! Until then, you can try logging in :)" };
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    return { error: "Failed to submit form data." };
  }
};