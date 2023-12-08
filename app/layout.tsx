import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dev style",
  description: "css 공유",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col items-center max-w-7xl min-h-[calc(100%-5rem)] mx-auto lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
