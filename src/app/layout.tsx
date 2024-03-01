import type { Metadata } from "next";
import { Inter, Concert_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const concertOne = Concert_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DC Delights",
  description: "A review of places visited in Washington, D.C.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${concertOne.className}`}>{children}</body>
    </html>
  );
}
