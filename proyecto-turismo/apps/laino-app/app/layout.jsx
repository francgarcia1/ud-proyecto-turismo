"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "./context/AppContext";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppWrapper>
        <body className={inter.className}>{children}</body>
      </AppWrapper>
    </html>
  );
}
