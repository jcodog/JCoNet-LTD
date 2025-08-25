import { sendEmail } from "@/lib/email/send";
import { buildTestEmail } from "@/lib/email/testEmail";
import { j, publicProcedure } from "@/server/jstack";
import { env } from "hono/adapter";
import z from "zod";

export const emailRouter = j.router({
  test: publicProcedure
    .input(
      z.object({
        toEmail: z.string(),
        toName: z.string(),
      })
    )
    .post(async ({ c, input }) => {
      const {
        MAILCHANNELS_API_KEY,
        MC_DKIM_DOMAIN,
        MC_DKIM_PRIVATE_KEY,
        MC_DKIM_SELECTOR,
      } = env(c);

      const { subject, text, html } = buildTestEmail({
        buttonUrl: "https://jconet.co.uk",
        domain: MC_DKIM_DOMAIN,
        toName: input.toName,
        projectName: "JCoNet LTD",
        supportEmail: "customer_support@jconet.co.uk",
      });

      await sendEmail({
        vars: {
          MAILCHANNELS_API_KEY,
          MC_DKIM_DOMAIN,
          MC_DKIM_PRIVATE_KEY,
          MC_DKIM_SELECTOR,
        },
        input: {
          subject,
          to: [
            {
              email: input.toEmail,
              name: input.toName,
            },
          ],
          html,
          text,
        },
      });

      return c.json({ status: "sent" });
    }),
});
