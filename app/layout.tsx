import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";
import Nav from '@/components/Nav';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fullstack Todo App",
  description: "Fullstack Todo App with Next.js ,Prisma ,and MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Nav />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
