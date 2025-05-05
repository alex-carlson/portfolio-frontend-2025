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
  title: "Alex Carlson",
  description: "Portfolio of work by Alex Carlson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
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
