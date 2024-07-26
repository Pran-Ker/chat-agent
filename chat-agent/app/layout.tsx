import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MyRuntimeProvider } from "@/app/MyRuntimeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MyRuntimeProvider>
      <html lang="en" className="h-full">
        <body className={`${inter.className} h-full`}>{children}</body>
      </html>
    </MyRuntimeProvider>
  );
}
