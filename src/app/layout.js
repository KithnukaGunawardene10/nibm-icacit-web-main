// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "ICACIT 2027 | International Conference on Advanced Computing and Information Technology",
  description:
    "The International Conference on Advanced Computing and Information Technology 2027 (ICACIT 2027), organized by the School of Computing and Engineering, NIBM. Theme: Intelligent Computing for a Resilient Future — AI, Security and Sustainable Innovation.",
  keywords: [
    "ICACIT 2027",
    "NIBM",
    "Advanced Computing",
    "Information Technology",
    "Conference",
    "AI",
    "Cybersecurity",
    "Sustainable Innovation",
  ],
  authors: [{ name: "School of Computing and Engineering, NIBM" }],
  openGraph: {
    title:
      "ICACIT 2027 | International Conference on Advanced Computing and Information Technology",
    description:
      "Intelligent Computing for a Resilient Future: AI, Security and Sustainable Innovation. 12th February 2027, Colombo, Sri Lanka.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
