import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { Suspense } from 'react';
import UTMCapture from './components/UTMCapture';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowAI - AI Automation for Service Businesses",
  description: "Stop losing hours on repetitive tasks. FlowAI builds custom AI systems that handle follow-ups, scheduling, and responses automatically.",
  keywords: "AI automation, business automation, service businesses, CRM automation, lead management",
  openGraph: {
    title: "FlowAI - AI Automation for Service Businesses",
    description: "Stop losing hours on repetitive tasks. FlowAI builds custom AI systems.",
    url: "https://flowai.com",
    siteName: "FlowAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowAI - AI Automation for Service Businesses",
    description: "Stop losing hours on repetitive tasks. FlowAI builds custom AI systems.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={null}><UTMCapture /></Suspense>
        {children}
        <GoogleAnalytics gaId="G-DDNF4P74E5" />
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vjlr7k8vst");
            `,
          }}
        />
      </body>
    </html>
  );
}