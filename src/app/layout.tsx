import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LazyMotion, domAnimation } from "framer-motion";
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
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '27640262192288513');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TCHCJJNP');
          `}
        </Script>
        <Script id="gtag-send-event" strategy="afterInteractive">
          {`
            function gtagSendEvent(url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion_event_submit_lead_form', {
                'event_callback': callback,
                'event_timeout': 2000,
              });
              return false;
            }
          `}
        </Script>
        <Script id="gtag-event" strategy="afterInteractive">
          {`
            gtag('event', 'conversion_event_submit_lead_form', {
              // <event_parameters>
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
         <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCHCJJNP"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
      <LazyMotion features={domAnimation}>
        {children}
      </LazyMotion>
      </body>
    </html>
  );
}
