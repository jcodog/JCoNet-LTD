import type { Metadata } from "next";
import { JStackProvider } from "@/components/providers/jstack";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme";

export const metadata: Metadata = {
  title: "JCoNet LTD",
  description: "The official site for JCoNet LTD",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  creator: "JCoNet LTD",
  authors: [
    {
      name: "JCoDog",
      url: "https://github.com/jcodog",
    },
  ],
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
