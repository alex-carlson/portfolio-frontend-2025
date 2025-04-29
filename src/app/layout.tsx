import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Container from "./components/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <h1>Alex Carlson Game / Web Development</h1>
        </header>
        <Container>
          {children}
        </Container>
        <footer>
          <p>&copy; 2025 Alex Carlson. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
