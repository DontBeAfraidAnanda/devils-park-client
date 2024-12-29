import '/public/styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devils Park',
  description: 'Devils Park',
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
