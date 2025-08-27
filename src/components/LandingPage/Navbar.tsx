"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <nav className="flex items-center gap-2 sm:gap-3">
      <div className="flex items-center gap-1 rounded-full border border-border/50 bg-background/20 px-1.5 py-1 shadow-sm backdrop-blur-xl backdrop-saturate-150 backdrop-contrast-125">
        <Link
          href="#services"
          className="rounded-full px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Services
        </Link>
        <Link
          href="#products"
          className="rounded-full px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Products
        </Link>
        <Link
          href="#testimonials"
          className="rounded-full px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Testimonials
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
