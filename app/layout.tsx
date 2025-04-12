import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "프로톡 - 전문가 상담 플랫폼",
  description: "다양한 분야의 전문가들과 쉽게 상담할 수 있는 프로톡입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col items-center`}
      >
        <div className="max-w-[490px] w-full flex flex-col min-h-screen bg-white relative">
          <Header />
          <main className="flex-1 pt-[20px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
