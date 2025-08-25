import type { Metadata } from "next";
import { JStackProvider } from "@/components/providers/jstack";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme";

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
    <html lang="en" suppressHydrationWarning>
      <body className="min-w-full min-h-screen flex flex-col h-full w-full antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JStackProvider>{children}</JStackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
