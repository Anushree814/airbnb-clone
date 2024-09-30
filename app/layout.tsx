import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Airbnb clone",
  description:
    "A  simple Airbnb clone built with Next.js, Typescript, TailwindCSS",
  keywords: ["Airbnb", "Airbnb clone", "Next.js project"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="container py-10">{children}</main>
      </body>
    </html>
  );
}
