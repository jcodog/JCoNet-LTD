import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-8 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} JCoNet LTD. All rights reserved.</div>
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
  );
};
