import { Section } from "@/components/LandingPage/ui/Section";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const mockedTestimonials = [
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
  ];

  return (
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
          {mockedTestimonials.map((t, i) => (
            <figure key={i} className="rounded-xl border bg-card p-6 shadow-sm">
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
  );
};
