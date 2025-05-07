import type { Metadata } from "next";
import "../styles/globals.css";
import { Work_Sans } from 'next/font/google';
import Container from "./components/Container";

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans', // optional CSS variable
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Alex Carlson | Game/Web Developer",
  description: "Portfolio of work by Alex Carlson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${workSans.variable} antialiased`}
      >
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
