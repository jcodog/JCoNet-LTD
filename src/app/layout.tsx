import type { Metadata } from "next";
import { JStackProvider } from "@/components/providers/jstack";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "JStack App",
  description: "Created using JStack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <JStackProvider>{children}</JStackProvider>
      </body>
    </html>
  );
}
