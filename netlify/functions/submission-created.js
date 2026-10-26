import { renderHtml, renderText, subjectFor } from "../emails/contactEmail.js";

const RESEND_URL = "https://api.resend.com/emails";

/**
 * Runs after every Netlify Forms submission (the event name makes Netlify call it)
 * and emails the branded notification through Resend.
 */
export const handler = async (event) => {
  const { payload } = JSON.parse(event.body);
  if (payload.form_name !== "contact") return { statusCode: 200, body: "Ignored" };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; no notification sent");
    return { statusCode: 500, body: "Email is not configured" };
  }

  const data = payload.data || {};
  const to = process.env.NOTIFY_TO || "alfatradeshpk@gmail.com";
  const from = process.env.NOTIFY_FROM || "Alfa Trade Website <onboarding@resend.dev>";

  const response = await fetch(RESEND_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((address) => address.trim()),
      reply_to: data.email,
      subject: subjectFor(data),
      html: renderHtml(data, payload.created_at),
      text: renderText(data),
    }),
  });

  if (!response.ok) {
    console.error("Resend rejected the email", response.status, await response.text());
    return { statusCode: 502, body: "Email failed" };
  }
  return { statusCode: 200, body: "Sent" };
};
