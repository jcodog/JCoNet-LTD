import { Section } from "@/components/LandingPage/ui/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Offerings = () => {
  return (
    <Section id="offerings" className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Products & Services
            </h2>
            <p className="text-muted-foreground">
              A quick look at JCoNet LTD’s main product and core services.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link href="#products">All products</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="#services">All services</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Cleo - flagship product */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                C
              </div>
              <div>
                <h3 className="text-base font-semibold">Cleo</h3>
                <p className="text-xs text-muted-foreground">
                  Creator‑first AI Discord bot
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Moderate, automate, and delight your community with AI‑powered
              tools and privacy‑aware controls.
            </p>
            <div className="mt-4">
              <Button asChild size="sm">
                <Link
                  href="https://cleoai.cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more
                </Link>
              </Button>
            </div>
          </div>

          {/* Creator tooling - product suite */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">Creator tooling</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Micro‑services that support your growth across platforms.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc pl-5">
              <li>Discord roles & sync</li>
              <li>Stream chat helpers</li>
              <li>Moderation tooling</li>
              <li>Analytics & insights</li>
            </ul>
          </div>

          {/* Custom development - service */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">Custom development</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              End‑to‑end product design and engineering: Discord bots, web apps,
              APIs, and more.
            </p>
            <div className="mt-4">
              <Button asChild size="sm">
                <a href="mailto:hello@jconet.ltd?subject=Custom%20development%20inquiry">
                  Request a quote
                </a>
              </Button>
            </div>
          </div>

          {/* Code licensing - service */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">Code licensing</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              License a battle‑tested implementation to ship faster; we’ll help
              you adapt it to your stack.
            </p>
            <div className="mt-4">
              <Button asChild size="sm" variant="secondary">
                <a href="mailto:hello@jconet.ltd?subject=Code%20licensing%20inquiry">
                  See catalog
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
