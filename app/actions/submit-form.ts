"use server";

import { Resend } from "resend";

export async function submitAppointmentForm(formData: any) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
  const TARGET_EMAIL = process.env.TARGET_EMAIL || "psk.nisanurazer@gmail.com";

  const resend = new Resend(RESEND_API_KEY);

  // 1. Resend Submission (Primary)
  let resendSuccess = false;
  if (RESEND_API_KEY) {
    try {
      const { data, error } = await resend.emails.send({
        from: "NA Psikolojik Danışmanlık <onboarding@resend.dev>",
        to: [TARGET_EMAIL],
        subject: `Yeni Randevu Talebi: ${formData.name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
            <h2 style="color: #c79b55; border-bottom: 2px solid #c79b55; padding-bottom: 10px;">Yeni Randevu Talebi</h2>
            <div style="margin-top: 20px; space-y: 10px;">
              <p><strong>Ad Soyad:</strong> ${formData.name}</p>
              <p><strong>E-posta:</strong> ${formData.email}</p>
              <p><strong>Telefon:</strong> ${formData.phone}</p>
              <p><strong>Hizmet Branşı:</strong> ${formData.service}</p>
              <p><strong>Tercih Edilen Zaman:</strong> ${formData.dateTimeRange}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
              Bu e-posta nisa-psk web sitesi üzerinden gönderilmiştir.
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend API Error:", error);
      } else {
        resendSuccess = true;
      }
    } catch (e) {
      console.error("Resend sync failed:", e);
    }
  }

  if (resendSuccess) {
    return { success: true };
  } else {
    return { 
      success: false, 
      error: "Sistem şu anda talebinizi alamadı. Lütfen direkt telefon veya mail ile ulaşın." 
    };
  }
}


