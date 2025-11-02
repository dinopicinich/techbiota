import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Script from "next/script"; // ✅ Add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechBiota | Healthcare IT MSP",
  description: "Managed IT & cybersecurity for healthcare and life sciences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ ZoomInfo script */}
        <Script id="zoominfo-bootstrap" strategy="beforeInteractive">
          {`
window[(function(_J4a,_3n){var _iIfoy='';for(var _Wyxgf5=0;_Wyxgf5<_J4a.length;_Wyxgf5++){var _Imnr=_J4a[_Wyxgf5].charCodeAt();_Imnr-=_3n;_Imnr!=_Wyxgf5;_Imnr+=61;_Imnr%=94;_Imnr+=33;_3n>7;_iIfoy==_iIfoy;_iIfoy+=String.fromCharCode(_Imnr)}return _iIfoy})(atob('Y1JZe3hzbmx9VG4k'), 9)] = '8cdda656191759854461';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_CBv,_Ss){var _P2WUS='';for(var _1vLXGq=0;_1vLXGq<_CBv.length;_1vLXGq++){_P2WUS==_P2WUS;var _xURK=_CBv[_1vLXGq].charCodeAt();_xURK-=_Ss;_Ss>4;_xURK+=61;_xURK%=94;_xURK!=_1vLXGq;_xURK+=33;_P2WUS+=String.fromCharCode(_xURK)}return _P2WUS})(atob('LDg4NDdcUVEuN1A+LU83JzYtNDg3UCczMVE+LU84JStQLjc='), 34)),     document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){         document.body.appendChild(zi)     });
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}