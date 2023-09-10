import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { montserrat, libre, source_code } from "@/lib";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "World-Class Tutorials for Elevating Your Software Engineering Skills",
  description:
    " Discover the art of building modern, high-performance web applications with our expert tutorials. Stay ahead in the tech world with fresh content every two weeks!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Academy Omen" />
      </head>
      <body
        className={`${montserrat.variable} ${libre.variable} ${source_code.variable}`}
      >
        <Navbar />
        <main style={{ paddingTop: "7rem" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
