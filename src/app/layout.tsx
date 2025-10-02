import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexProvider";
import { manrope } from "./fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Best audio market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased h-screen overflow-y-auto`}
      >
        <ConvexClientProvider>
          <Header />
          {children}
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
