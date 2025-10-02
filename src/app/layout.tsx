import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexProvider";
import { manrope } from "./fonts";

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
      <body className={`${manrope.className} antialiased `}>
        <ConvexClientProvider> {children}</ConvexClientProvider>
      </body>
    </html>
  );
}
