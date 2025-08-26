import { Section } from "@/components/LandingPage/ui/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Products = () => {
  return (
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
            <Link href="https://cleoai.cloud" target="_blank" rel="noreferrer">
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
                  Creator‑first AI discord bot that connects to your community.
                </p>
              </div>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Moderates your community</li>
              <li>
                Discord integration with a suite of commands key to your staff
              </li>
              <li>
                Fun commands and an AI agent for you and your users to enjoy
              </li>
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
  );
};
