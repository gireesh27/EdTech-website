import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JS MASTERY",
  description: "JS MASTERY DESC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screnn bg-black-100">{children}</body>
    </html>
  );
}
