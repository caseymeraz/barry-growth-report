import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growth Report: The Barry Law Firm | Juris Digital",
  description:
    "Data-driven digital marketing growth report for The Barry Law Firm (mylemonrights.com) - prepared by Juris Digital.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
