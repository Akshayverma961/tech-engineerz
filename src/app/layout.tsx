
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  ),

  title: {
    default: "Tech Engineerz | Web Development, AI & Automation",
    template: "%s | Tech Engineerz",
  },
  description:
    "Tech Engineerz builds high-performance websites, AI agents, and business automation solutions to help businesses grow.",
  applicationName: "Tech Engineerz",

 
openGraph: {
  title: "Tech Engineerz | Digital & AI Studio",
  description:
    "Discover modern websites, AI solutions, and workflow automation built to move businesses forward.",
  siteName: "Tech Engineerz",
  type: "website",
  locale: "en_IN",
  images: [
    {
      url: "/images/tech%20engineerz%20logo.png",
      width: 1254,
      height: 1254,
      alt: "Tech Engineerz — Websites, AI Solutions and Automation",
    },
  ],
},
  
twitter: {
  card: "summary_large_image",
  title: "Tech Engineerz | Digital & AI Studio",
  description:
    "Modern websites, AI agents, and business automation solutions.",
  images: ["/images/tech%20engineerz%20logo.png"],
},


  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}
