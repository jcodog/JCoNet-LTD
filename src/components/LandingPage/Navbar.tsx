"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
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
  );
}
