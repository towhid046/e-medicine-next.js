import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/shared/Navbar/Navbar";
import AuthProvider from "./../providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Medicine",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <AuthProvider>
        <body className={inter.className}>
          <header className='sticky top-0'>
            <Navbar />
          </header>
          <main>{children}</main>
        </body>
      </AuthProvider>
    </html>
  );
}
