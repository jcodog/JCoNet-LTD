import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/LandingPage/Section";
import { DecorativeBackground } from "@/components/LandingPage/Background";
import { Header } from "@/components/LandingPage/Header";
import { ScrollArea } from "@/components/LandingPage/ScrollArea";
import { Hero } from "@/components/LandingPage/Hero";

export default async function Home() {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      <DecorativeBackground />

      {/* Header (static at top while content below scrolls) */}
      <Header />

      {/* Scrollable content area with no visible scrollbar */}
      <ScrollArea>
        {/* Hero */}
        <Hero />

        {/* Products */}
        <Section id="products" className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Featured product
                </h2>
                <p className="text-muted-foreground">
                  We build and maintain tools used by creators and their
                  communities.
                </p>
              </div>
              <Button asChild variant="link">
                <Link
                  href="https://cleoai.cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit cleoai.cloud →
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                    C
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Cleo</h3>
                    <p className="text-sm text-muted-foreground">
                      Creator‑first AI assistant that connects to your
                      community.
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Answers community questions using your sources</li>
                  <li>Discord and web chat integrations</li>
                  <li>Privacy‑aware and configurable</li>
                </ul>
                <div className="mt-4">
                  <Button asChild>
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

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Creator tooling</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Utilities and micro‑services that support your growth across
                  platforms.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg border bg-background p-3">
                    Discord roles & sync
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    Stream chat helpers
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    Moderation tooling
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    Analytics & insights
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Services */}
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
                  Buy a battle‑tested implementation outright and ship faster.
                  We’ll help you adapt it to your stack.
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

        {/* Testimonials */}
        <Section id="testimonials" className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  What clients say
                </h2>
                <p className="text-muted-foreground">
                  A few words from teams we’ve worked with.
                </p>
              </div>
              <Button asChild variant="outline">
                <a href="mailto:hello@jconet.ltd?subject=JCoNet%20Testimonial">
                  Are you a client? We’d love your testimonial
                </a>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    "JCoNet shipped a Discord integration in days that our community had been requesting for months. Professional, pragmatic, and fast.",
                  name: "Alex Rivera",
                  role: "Head of Community, Indie Studio",
                },
                {
                  quote:
                    "Their code licensing option saved us weeks. We deployed, customized lightly, and focused on our core product.",
                  name: "Jamie Chen",
                  role: "CTO, SaaS Startup",
                },
                {
                  quote:
                    "Dependable partner for creator tooling. They understand Discord and streaming platforms inside‑out.",
                  name: "Morgan Lee",
                  role: "Creator & Streamer",
                },
              ].map((t, i) => (
                <figure
                  key={i}
                  className="rounded-xl border bg-card p-6 shadow-sm"
                >
                  <blockquote className="text-sm leading-relaxed">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 text-sm">
                    <div className="inline-flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-muted-foreground">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Section>
        {/* Footer (inside scroll area) */}
        <footer className="mt-8 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-4">
            <div>
              © {new Date().getFullYear()} JCoNet LTD. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://cleoai.cloud"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Cleo
              </Link>
              <Link href="#services" className="hover:text-foreground">
                Services
              </Link>
              <Link href="#products" className="hover:text-foreground">
                Products
              </Link>
            </div>
          </div>
        </footer>
      </ScrollArea>
    </div>
  );
}
