import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MicroBlog",
  description: "MicroBlog is a web app created as test task by Milosska",
  applicationName: "MicroBlog",
  keywords: ["Next.js", "React", "TypeScript", "blog"],
  authors: [{ name: "Milosska", url: "https://github.com/Milosska" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon_package/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon_package/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon_package/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon_package/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/favicon_package/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
