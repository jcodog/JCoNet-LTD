import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/LandingPage/Navbar";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-border/50 bg-background/20 backdrop-blur-2xl backdrop-saturate-150 backdrop-contrast-125 supports-[backdrop-filter]:bg-background/10 shadow-md">
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
          <Navbar />
        </div>
      </div>
    </header>
  );
}
