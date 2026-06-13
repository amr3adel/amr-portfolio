import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amr Adel Boghdady | Enterprise IT Project Manager",
  description:
    "Interactive portfolio for Amr Adel Boghdady, a Senior IT Project Manager focused on SAP, data, AI, cybersecurity, and regional enterprise delivery.",
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
