import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from 'next/font/google'


export const metadata: Metadata = {
  title: "Mourya Urja Matrimonial",
  description: "Mourya Urja Matrimonial is a dedicated matchmaking platform designed to bring together individuals seeking meaningful connections for marriage. With user-friendly features, comprehensive profiles, and advanced matching algorithms, Mourya Urja Matrimonial ensures a seamless experience for users. Our platform emphasizes privacy, authenticity, and community trust, helping you find a life partner who aligns with your values, goals, and aspirations.",
};

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
  variable: '--ubuntu',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={ubuntu.className}
      >
        {children}
      </body>
    </html>
  );
}
