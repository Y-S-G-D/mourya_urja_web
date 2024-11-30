import type { Metadata } from "next";
import "./globals.css";
import { Lora,Playfair_Display } from 'next/font/google'
import { websiteName } from "@/shared/constant";


export const metadata: Metadata = {
  title: `${websiteName}`,
  description: "Maurya Urja Matrimony is a dedicated matchmaking platform designed to bring together individuals seeking meaningful connections for marriage. With user-friendly features, comprehensive profiles, and advanced matching algorithms, Mourya Urja Matrimonial ensures a seamless experience for users. Our platform emphasizes privacy, authenticity, and community trust, helping you find a life partner who aligns with your values, goals, and aspirations.",
};

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${playfair.variable} ${lora.variable} ${lora.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
