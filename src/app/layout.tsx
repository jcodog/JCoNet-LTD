import type { Metadata } from "next";
import { JStackProvider } from "@/components/providers/jstack";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://jconet.co.uk"),
  title: {
    default: "JCoNet LTD",
    template: "%s | JCoNet LTD",
  },
  description:
    "JCoNet LTD builds Cleo and bespoke solutions for creators, communities, and companies globally.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
  ],
  manifest: "/site.webmanifest",
  creator: "JCoNet LTD",
  category: "technology",
  authors: [
    {
      name: "JCoDog",
      url: "https://github.com/jcodog",
    },
    {
      name: "JCoNet LTD",
      url: "https://jconet.co.uk",
    },
  ],
  keywords: [
    "JCoNet LTD",
    "JCoNet",
    "JCoNet Limited",
    "Cleo AI",
    "JCoNet AI",
    "JCoNet Careers",
    "JCoNet Socials",
    "JCoNet Development",
    "Creator tools",
    "Community software",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://jconet.co.uk",
    siteName: "JCoNet LTD",
    title: "JCoNet LTD",
    description:
      "JCoNet LTD builds Cleo and bespoke solutions for creators, communities, and companies globally.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "JCoNet LTD brand mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@JCoNet",
    creator: "@JCoNet",
    title: "JCoNet LTD",
    description:
      "JCoNet LTD builds Cleo and bespoke solutions for creators, communities, and companies globally.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
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
