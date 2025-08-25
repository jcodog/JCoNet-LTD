// email/test-email.ts
type BuildTestEmailOpts = {
  projectName?: string; // e.g. "JCoNet LTD"
  domain?: string; // e.g. "jconet.co.uk"
  toName?: string; // optional recipient name
  buttonUrl?: string; // where the CTA points (defaults to your site)
  supportEmail?: string; // e.g. "support@jconet.co.uk"
};

export function buildTestEmail(opts: BuildTestEmailOpts = {}) {
  const project = opts.projectName ?? "JCoNet LTD";
  const domain = opts.domain ?? "example.com";
  const toName = opts.toName ?? "there";
  const url = opts.buttonUrl ?? `https://${domain}`;
  const support = opts.supportEmail ?? `support@${domain}`;
  const sentAt = new Date()
    .toISOString()
    .replace("T", " ")
    .replace("Z", " UTC");
  const testId = Math.random().toString(36).slice(2, 10).toUpperCase();

  const subject = `[${project}] Test email OK — ${testId}`;

  const text = [
    `Hi ${toName},`,
    ``,
    `This is a test email from ${project}.`,
    `If you can read this, your MailChannels config (SPF/DKIM/DMARC) is likely working.`,
    ``,
    `Test details:`,
    `• Project: ${project}`,
    `• Domain: ${domain}`,
    `• Sent at: ${sentAt}`,
    `• Test ID: ${testId}`,
    ``,
    `Open ${url} to confirm links render correctly.`,
    ``,
    `If this wasn’t expected, contact us at ${support}.`,
    ``,
    `— ${project}`,
  ].join("\n");

  const preheader = `Test email from ${project} — ${testId}`;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${subject}</title>
  <style>
    /* Basic, broadly supported styles */
    body { margin:0; padding:0; background:#0b0d10; color:#e6edf3; }
    a { color:#33fede; text-decoration:none; }
    .container { width:100%; background:#0b0d10; padding:24px 0; }
    .card { max-width:600px; margin:0 auto; background:#12161c; border:1px solid #242a31; border-radius:12px; padding:24px; font:16px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial; }
    .btn { display:inline-block; padding:12px 16px; border-radius:8px; background:#33fede; color:#001314; font-weight:700; }
    .muted { color:#8b949e; font-size:13px; }
    .h1 { margin:0 0 8px; font-size:22px; }
    .sp { display:none; visibility:hidden; opacity:0; color:transparent; height:0; width:0; overflow:hidden; }
    @media (prefers-color-scheme: light) {
      body { background:#f6f8fa; color:#0b0d10; }
      .container { background:#f6f8fa; }
      .card { background:#ffffff; border-color:#e6e8eb; }
    }
  </style>
</head>
<body>
  <div class="sp">${preheader}</div>
  <div class="container">
    <div class="card">
      <p class="muted" style="margin:0 0 4px;">${project}</p>
      <h1 class="h1">Email delivery test successful</h1>
      <p>Hi ${toName},</p>
      <p>This is a test email from <strong>${project}</strong>. If you can see this HTML version, your client supports HTML rendering.</p>
      <p><strong>Test details</strong><br/>
         Project: ${project}<br/>
         Domain: ${domain}<br/>
         Sent at: ${sentAt}<br/>
         Test ID: <code>${testId}</code></p>
      <p><a class="btn" href="${url}" target="_blank" rel="noopener noreferrer">Open ${project}</a></p>
      <p class="muted">If this wasn’t expected, please contact <a href="mailto:${support}">${support}</a>.</p>
    </div>
    <div style="max-width:600px;margin:12px auto 0;padding:0 12px;">
      <p class="muted" style="text-align:center;">You’re receiving this because someone triggered a test from ${project}. No action is required.</p>
    </div>
  </div>
</body>
</html>`;

  return { subject, text, html };
}
