import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Layout } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Ivy Flooring | Nashville Hardwood Specialists",
  description: "Premium hardwood flooring installation and refinishing in Middle Tennessee. Precise estimates and expert accountability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Layout>
            {children}
          </Layout>
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}