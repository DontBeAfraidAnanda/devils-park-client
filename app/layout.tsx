import type { Metadata } from "next";
import "/public/styles/globals.css";

export const metadata: Metadata = {
  title: "Devils Park",
  description: "Devils Park",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
