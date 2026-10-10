import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KNF 2026 — Festival Programs",
  description: "KNF 2026 program and ticket booking experience",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
