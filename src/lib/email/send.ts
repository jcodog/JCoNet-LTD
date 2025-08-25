interface SendEmailProps {
  vars: {
    MAILCHANNELS_API_KEY: string;
    MC_DKIM_PRIVATE_KEY: string;
    MC_DKIM_SELECTOR: string;
    MC_DKIM_DOMAIN: string;
    MAIL_FROM_EMAIL?: string; // optional override
    MAIL_FROM_NAME?: string; // optional override
    MAIL_REPLY_TO_EMAIL?: string; // optional override
    MAIL_REPLY_TO_NAME?: string; // optional override
  };
  input: {
    to: {
      email: string;
      name: string;
    }[];
    subject: string;
    html?: string;
    text?: string;
  };
}

export const sendEmail = async ({
  vars,
  input: { to, subject, html, text },
}: SendEmailProps) => {
  const fromEmail = vars.MAIL_FROM_EMAIL ?? `hello@${vars.MC_DKIM_DOMAIN}`;
  const fromName = vars.MAIL_FROM_NAME ?? "JCoNet LTD";

  const replyToEmail =
    vars.MAIL_REPLY_TO_EMAIL ?? `customer_support@${vars.MC_DKIM_DOMAIN}`;
  const replyToName = vars.MAIL_REPLY_TO_NAME ?? "JCoNet LTD Customer Support";

  const body = {
    personalizations: [
      {
        to,
        reply_to: { email: replyToEmail, name: replyToName },
        dkim_domain: vars.MC_DKIM_DOMAIN,
        dkim_selector: vars.MC_DKIM_SELECTOR,
        dkim_private_key: vars.MC_DKIM_PRIVATE_KEY,
      },
    ],
    from: { email: fromEmail, name: fromName },
    subject,
    content: [
      ...(text ? [{ type: "text/plain", value: text }] : []),
      ...(html ? [{ type: "text/html", value: html }] : []),
    ],
  };

  const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": vars.MAILCHANNELS_API_KEY,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`${res.status} | ${await res.text()}`);
};
