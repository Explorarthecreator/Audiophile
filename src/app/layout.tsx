import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexProvider";

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
      <body className={`antialiased bg-white`}>
        <ConvexClientProvider> {children}</ConvexClientProvider>
      </body>
    </html>
  );
}
