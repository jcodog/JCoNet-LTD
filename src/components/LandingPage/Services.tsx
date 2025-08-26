import { Section } from "@/components/LandingPage/ui/Section";
import { Button } from "@/components/ui/button";

export const Services = () => {
  return (
    <Section id="services" className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Services
          </h2>
          <p className="text-muted-foreground">
            Work with us to build something new—or purchase code you can run
            today.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Custom development</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              End‑to‑end product design and engineering, from idea to
              launch—Discord bots, web apps, APIs, and more.
            </p>
            <div className="mt-4">
              <Button asChild>
                {/* TODO: Replace with your preferred intake link */}
                <a href="mailto:hello@jconet.ltd?subject=Custom%20development%20inquiry">
                  Request a quote
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Code licensing</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Buy a battle‑tested implementation outright and ship faster. We’ll
              help you adapt it to your stack.
            </p>
            <div className="mt-4">
              <Button asChild variant="secondary">
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
