import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DecorativeBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* subtle vignette */}
      <div className="absolute inset-0 [mask-image:radial-gradient(75%_75%_at_50%_50%,#000_60%,transparent_100%)] bg-gradient-to-b from-accent/40 via-transparent to-transparent dark:from-primary/20" />

      {/* gradient blobs */}
      <div className="absolute -top-24 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40 dark:opacity-30 bg-gradient-to-br from-primary/25 via-[var(--chart-2)]/20 to-transparent dark:from-[var(--chart-1)]/25 dark:via-[var(--chart-4)]/20" />
      <div className="absolute -bottom-24 -left-20 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-35 dark:opacity-25 bg-gradient-to-tr from-secondary/60 via-accent/40 to-transparent dark:from-[var(--chart-5)]/25 dark:via-[var(--chart-3)]/20" />

      {/* soft ring */}
      <div className="absolute left-1/2 top-[22%] -translate-x-1/2 size-[68rem] rounded-full bg-[conic-gradient(var(--ring)_0deg,transparent_120deg,transparent_240deg,var(--ring)_360deg)] opacity-[0.07] [mask-image:radial-gradient(closest-side,#000_55%,transparent_75%)]" />

      {/* texture */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay" />
    </div>
  );
};

const Section = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    id={id}
    className={cn("w-full px-4 sm:px-6 lg:px-8 scroll-mt-24", className)}
  >
    {children}
  </section>
);

export default async function Home() {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      <DecorativeBackground />

      {/* Header (static at top while content below scrolls) */}
      <header className="z-10 w-full bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://cdn.jconet.co.uk/logos/main.png"
                alt="JCoNet LTD logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
                priority
              />
              <span className="font-semibold tracking-tight">JCoNet LTD</span>
            </Link>
            <nav className="flex items-center gap-2 sm:gap-4">
              <Link
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="#products"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#testimonials"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Testimonials
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Scrollable content area with no visible scrollbar */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <main className="min-h-full">
          {/* Hero */}
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
                    and a suite of tools that support creators where they
                    work—Discord servers, stream chats, and beyond. We also
                    deliver bespoke software solutions: hire us to build your
                    tool or purchase production-ready code outright.
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
                  Work with us to build something new—or purchase code you can
                  run today.
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
        </main>
      </div>
    </div>
  );
}
