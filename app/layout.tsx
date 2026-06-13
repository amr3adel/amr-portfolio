import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amr Adel Boghdady | Senior IT Project Manager",
  description:
    "Professional interactive CV portfolio for Amr Adel Boghdady, Senior IT Project Manager across SAP Analytics Cloud, cybersecurity, data analytics, AI, and enterprise delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
