import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LazyMotion, domAnimation } from "framer-motion";
import Head from "next/head";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
   title: "Fractionate - Your Trusted Partner in Real Estate Solutions",
   description: "Your Key to generational Wealth! Discover your dream property with Fractionate. Specializing in buying, selling, and renting real estate, we offer expert guidance and personalized solutions to meet all your property needs.",
   metadataBase: new URL("https://fractionate.in/"),
   applicationName: "Fractionate", 
   authors: [
     {
       name: "Sourabh",
       url: "https://www.linkedin.com/in/sourabh-sharma-8987451a2/",
     },
   ],
   generator: "Fractionate",
   referrer: "origin",
   creator: "Sourabh",
   publisher: "Fractionate",
   robots: {
     index: true,
     follow: true,
   },
   alternates: { canonical: "/" },
   twitter:{
      card : 'summary_large_image'
   },
   openGraph:{
      type : 'website',
      title : "Fractionate - Your Trusted Partner in Real Estate Solutions",
      siteName : "Fractionate",
      description : "Fractionate - Your Key to generational Wealth! Discover your dream property with Fractionate. Specializing in buying, selling, and renting real estate, we offer expert guidance and personalized solutions to meet all your property needs.",
   },  
   other:{
      ["bingbot"]: "noarchive",
      'application/ld+json': JSON.stringify({
         "@context": "https://schema.org",
         "@type": "Organization",
         "name": "Fractionate",
         "url": "https://fractionate.in/",
         "logo": "https://fractionate.in/favicon.ico"
       }),
   },
   
 };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3LWD24BCL"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z3LWD24BCL');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      <LazyMotion features={domAnimation}>
        {children}
      </LazyMotion>
      </body>
    </html>
  );
}
