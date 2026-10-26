const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const LABEL = "font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#8a8a93;";
const VALUE = "font-size:16px;font-weight:600;color:#0d0d0f;";

const splitDepartment = (department = "") => {
  const [name, ...rest] = department.split(" — ");
  return { name: name.trim(), detail: rest.join(" — ").trim() };
};

const formatDate = (iso) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Belgrade",
  }).format(iso ? new Date(iso) : new Date());

const field = (label, content, padding) => `
              <td width="50%" valign="top" style="padding:${padding};">
                <p style="margin:0 0 5px;${LABEL}">${label}</p>
                ${content}
              </td>`;

export const subjectFor = ({ name, department }) => {
  const dept = splitDepartment(department).name;
  return `New inquiry from ${name || "the website"}${dept ? ` · ${dept}` : ""}`;
};

export const renderText = ({ name, company, email, phone, department, message }) =>
  [
    `New inquiry from ${name}`,
    "",
    "Message:",
    message,
    "",
    `Name: ${name}`,
    `Company: ${company || "-"}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Department: ${department || "-"}`,
  ].join("\n");

export const renderHtml = ({ name, company, email, phone, department, message }, createdAt) => {
  const dept = splitDepartment(department);
  const n = escapeHtml(name);
  const firstName = escapeHtml((name || "").trim().split(/\s+/)[0] || "customer");
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const telHref = escapeHtml((phone || "").replace(/[^\d+]/g, ""));
  const replySubject = encodeURIComponent("Re: Your inquiry to Alfa Trade");

  const emailLink = `<p style="margin:0;font-size:16px;font-weight:600;"><a href="mailto:${safeEmail}" style="color:#e10600;text-decoration:none;">${safeEmail}</a></p>`;
  const phoneLink = phone
    ? `<p style="margin:0;font-size:16px;font-weight:600;"><a href="tel:${telHref}" style="color:#0d0d0f;text-decoration:none;">${safePhone}</a></p>`
    : `<p style="margin:0;${VALUE}color:#8a8a93;">Not provided</p>`;
  const callButton = phone
    ? `<td style="width:12px;"></td>
            <td style="border:1px solid #cfcfd4;border-radius:999px;">
              <a href="tel:${telHref}" style="display:inline-block;padding:13px 24px;font-size:15px;font-weight:700;color:#0d0d0f;text-decoration:none;">Call</a>
            </td>`
    : "";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>New inquiry from ${n}</title>
</head>
<body style="margin:0;padding:0;background:#f6f6f7;font-family:'DM Sans',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;">${n}${company ? ` (${escapeHtml(company)})` : ""} sent a message${dept.name ? ` to ${escapeHtml(dept.name)}` : ""}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f7;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(13,13,15,0.08);">
        <tr><td style="background:#0d0d0f;padding:26px 36px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="font-size:18px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#ffffff;">Alfa <span style="color:#ea3b35;">Trade</span></td>
            <td align="right" style="font-size:12px;color:#a1a1aa;">alfa-trade.netlify.app</td>
          </tr></table>
        </td></tr>
        <tr><td style="background:#e10600;height:5px;line-height:5px;font-size:0;">&nbsp;</td></tr>

        <tr><td style="padding:36px 36px 8px;">
          <h1 style="margin:0 0 6px;font-size:26px;line-height:1.2;font-weight:800;color:#0d0d0f;letter-spacing:-0.01em;">New inquiry from ${n}</h1>
          <p style="margin:0;font-size:14px;color:#63626b;">Received through the website contact form.</p>
        </td></tr>

        <tr><td style="padding:24px 36px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f7;border-radius:14px;">
            <tr><td style="padding:28px 28px 40px;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#63626b;">Message</p>
              <p style="margin:0;font-size:18px;line-height:1.6;color:#0d0d0f;white-space:pre-wrap;">${escapeHtml(message)}</p>
            </td></tr>
          </table>
        </td></tr>

        <tr><td style="padding:28px 36px 4px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>${field("Name", `<p style="margin:0;${VALUE}">${n}</p>`, "0 12px 22px 0")}${field("Company", `<p style="margin:0;${VALUE}">${company ? escapeHtml(company) : `<span style="color:#8a8a93;">Not provided</span>`}</p>`, "0 0 22px 12px")}
            </tr>
            <tr>${field("Email", emailLink, "0 12px 22px 0")}${field("Phone", phoneLink, "0 0 22px 12px")}
            </tr>
            <tr>
              <td colspan="2" valign="top" style="padding:20px 0 6px;border-top:1px solid #e2e2e5;">
                <p style="margin:0 0 5px;${LABEL}">Department</p>
                <p style="margin:0;${VALUE}">${escapeHtml(dept.name) || "General"}${dept.detail ? ` <span style="font-weight:400;color:#63626b;">· ${escapeHtml(dept.detail)}</span>` : ""}</p>
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td style="padding:24px 36px 36px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="background:#e10600;border-radius:999px;">
              <a href="mailto:${safeEmail}?subject=${replySubject}" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">Reply to ${firstName}</a>
            </td>
            ${callButton}
          </tr></table>
        </td></tr>

        <tr><td style="background:#f6f6f7;padding:20px 36px;border-top:1px solid #e2e2e5;">
          <p style="margin:0;font-size:12px;line-height:1.6;color:#8a8a93;">Sent automatically by the Alfa Trade website contact form on ${formatDate(createdAt)}. Replying to this email goes to the customer.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
`;
};
