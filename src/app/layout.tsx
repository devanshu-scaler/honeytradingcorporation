import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Honey Trading Corporation | Precision Cutting Tools",
  description:
    "Honey Trading Corporation supplies precision cutting tools with fast fulfillment, tooling recommendations, and application support for CNC machining.",
  openGraph: {
    title: "Honey Trading Corporation | Precision Cutting Tools",
    description:
      "Supply, recommendations, and application support for precision cutting tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
