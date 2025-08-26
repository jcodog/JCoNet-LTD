import { Section } from "@/components/LandingPage/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <Section className="pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 py-12 sm:py-16 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground w-max bg-background/50">
              <span className="size-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              Building for creators and communities
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Software that empowers creators, communities, and companies
            </h1>
            <p className="max-w-prose text-base sm:text-lg text-muted-foreground">
              JCoNet LTD is the team behind{" "}
              <Link
                href="https://cleoai.cloud"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Cleo
              </Link>{" "}
              and a suite of tools that support creators where they work—Discord
              servers, stream chats, and beyond. We also deliver bespoke
              software solutions: hire us to build your tool or purchase
              production-ready code outright.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link
                  href="https://cleoai.cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore Cleo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                {/* TODO: Replace mailto with your real contact address */}
                <a href="mailto:hello@jconet.ltd?subject=Project%20inquiry%20from%20website">
                  Hire us
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Hero card */}
            <div className="relative mx-auto max-w-md rounded-2xl border bg-card p-6 shadow-sm md:max-w-none">
              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                  ⚙️
                </span>
                Creator & Community Tech
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-primary" />
                  Discord automations, role syncing, and deep integrations
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-chart-2" />
                  Stream chat tooling for engagement and moderation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-chart-4" />
                  Full‑stack product development and codebase hand‑offs
                </li>
              </ul>
              <div className="mt-6 flex gap-2">
                <Button asChild size="sm" variant="secondary">
                  <Link href="#services">Our services</Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link href="#products">See products</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
