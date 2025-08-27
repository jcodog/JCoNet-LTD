import { Section } from "@/components/LandingPage/ui/Section";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <Section className="pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 py-12 sm:py-16 md:grid-cols-2">
          {/* Left column */}
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

          {/* Right column (Hero card) */}
          <div className="relative">
            <div className="relative mx-auto max-w-md rounded-2xl border bg-card p-6 shadow-sm md:max-w-none">
              <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                    ⚙️
                  </span>
                  Creator & Community Products and Services
                </div>
                <Button size="sm" variant="ghost" type="button">
                  See all
                </Button>
              </div>

              <ul className="space-y-2 text-sm">
                {/* Item 1 */}
                <li>
                  <button
                    type="button"
                    className="group relative w-full cursor-pointer overflow-hidden rounded-full px-3 py-2 pl-8 pr-12 text-left outline-none ring-2 ring-transparent ring-offset-4 ring-offset-background transition-all duration-150 ease-out focus-visible:ring-ring focus-visible:delay-300"
                  >
                    <span
                      aria-hidden
                      className="absolute left-3 top-1/2 z-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ease-out group-hover:left-0 group-hover:h-full group-hover:w-full group-hover:rounded-full group-hover:bg-primary/30 group-focus-visible:left-0 group-focus-visible:h-full group-focus-visible:w-full group-focus-visible:rounded-full group-focus-visible:bg-primary/30"
                    />
                    <span className="relative z-10">
                      Discord moderation and bot setup
                    </span>
                    <ChevronRight
                      aria-hidden
                      className="absolute right-8 top-1/2 z-10 h-4 w-4 -translate-y-1/2 translate-x-0 text-muted-foreground opacity-0 transition-opacity duration-150 ease-out delay-0 group-hover:opacity-100 group-hover:delay-300 group-focus-visible:opacity-100 group-focus-visible:delay-300"
                    />
                  </button>
                </li>

                {/* Item 2 */}
                <li>
                  <button
                    type="button"
                    className="group relative w-full cursor-pointer overflow-hidden rounded-full px-3 py-2 pl-8 pr-12 text-left outline-none ring-2 ring-transparent ring-offset-4 ring-offset-background transition-all duration-150 ease-out focus-visible:ring-ring focus-visible:delay-300"
                  >
                    <span
                      aria-hidden
                      className="absolute left-3 top-1/2 z-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-chart-2 transition-all duration-300 ease-out group-hover:left-0 group-hover:h-full group-hover:w-full group-hover:rounded-full group-hover:bg-chart-2/30 group-focus-visible:left-0 group-focus-visible:h-full group-focus-visible:w-full group-focus-visible:rounded-full group-focus-visible:bg-chart-2/30"
                    />
                    <span className="relative z-10">
                      Stream chat moderation and bot setup
                    </span>
                    <ChevronRight
                      aria-hidden
                      className="absolute right-8 top-1/2 z-10 h-4 w-4 -translate-y-1/2 translate-x-0 text-muted-foreground opacity-0 transition-opacity duration-150 ease-out delay-0 group-hover:opacity-100 group-hover:delay-300 group-focus-visible:opacity-100 group-focus-visible:delay-300"
                    />
                  </button>
                </li>

                {/* Item 3 */}
                <li>
                  <button
                    type="button"
                    className="group relative w-full cursor-pointer overflow-hidden rounded-full px-3 py-2 pl-8 pr-12 text-left outline-none ring-2 ring-transparent ring-offset-4 ring-offset-background transition-all duration-150 ease-out focus-visible:ring-ring focus-visible:delay-300"
                  >
                    <span
                      aria-hidden
                      className="absolute left-3 top-1/2 z-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-chart-4 transition-all duration-300 ease-out group-hover:left-0 group-hover:h-full group-hover:w-full group-hover:rounded-full group-hover:bg-chart-4/30 group-focus-visible:left-0 group-focus-visible:h-full group-focus-visible:w-full group-focus-visible:rounded-full group-focus-visible:bg-chart-4/30"
                    />
                    <span className="relative z-10">
                      Code snippet marketplace
                    </span>
                    <ChevronRight
                      aria-hidden
                      className="absolute right-8 top-1/2 z-10 h-4 w-4 -translate-y-1/2 translate-x-0 text-muted-foreground opacity-0 transition-opacity duration-150 ease-out delay-0 group-hover:opacity-100 group-hover:delay-300 group-focus-visible:opacity-100 group-focus-visible:delay-300"
                    />
                  </button>
                </li>

                {/* Item 4 */}
                <li>
                  <button
                    type="button"
                    className="group relative w-full cursor-pointer overflow-hidden rounded-full px-3 py-2 pl-8 pr-12 text-left outline-none ring-2 ring-transparent ring-offset-4 ring-offset-background transition-all duration-150 ease-out focus-visible:ring-ring focus-visible:delay-300"
                  >
                    <span
                      aria-hidden
                      className="absolute left-3 top-1/2 z-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-chart-3 transition-all duration-300 ease-out group-hover:left-0 group-hover:h-full group-hover:w-full group-hover:rounded-full group-hover:bg-chart-3/30 group-focus-visible:left-0 group-focus-visible:h-full group-focus-visible:w-full group-focus-visible:rounded-full group-focus-visible:bg-chart-3/30"
                    />
                    <span className="relative z-10">
                      Freelance project work
                    </span>
                    <ChevronRight
                      aria-hidden
                      className="absolute right-8 top-1/2 z-10 h-4 w-4 -translate-y-1/2 translate-x-0 text-muted-foreground opacity-0 transition-opacity duration-150 ease-out delay-0 group-hover:opacity-100 group-hover:delay-300 group-focus-visible:opacity-100 group-focus-visible:delay-300"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
