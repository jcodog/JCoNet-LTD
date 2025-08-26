import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/LandingPage/Navbar";

export function Header() {
  return (
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
          <Navbar />
        </div>
      </div>
    </header>
  );
}
