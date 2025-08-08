import { Archivo } from "next/font/google";
import "./globals.css";
import Scroll from "@/Scroll/Scroll";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import LanguageProvider from "@/components/Homecomponents/Translation/LanguageProvider";

const inter = Archivo({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <GoogleTagManager gtmId="UA-130932563-1" />
        <GoogleTagManager gaId="UA-130932563-1" />
        <GoogleAnalytics gaId="UA-130932563-1" />
        <GoogleAnalytics gaId="G-6QJJ1FLXNN" />
        <GoogleTagManager gtmId="G-6QJJ1FLXNN" />
        <GoogleTagManager gtmId="GT-M6JHMK9" />
        <GoogleTagManager gtmId="GTM-P976H4CD" />
        <GoogleTagManager gtmId="GTM-NC9WFJNL" />

      </head>
      <body className={inter.className}>

        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Scroll />
        {/* apolloScript Insight Tag */}
        <Script
          id="672d30f6ab376102cfca15ad"
          strategy="afterInteractive"
          type="text/javascript"
          src="/js/apolloScript.js"
        />
        {/* LinkedIn Insight Tag */}

        <Script
          id="linkedin-partner-tag"
          strategy="afterInteractive"
          type="text/javascript"
          src="/js/linkedinScript.js"
        />


        {/* language change Tag */}
        <Script
          type="text/javascript"
          src="/js/languageChange.js"
        />
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

        {/* <Script id="linkedin-partner-tag">
          {`
            _linkedin_partner_id = "6823604";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script
          id="linkedin-insight-script"
          strategy="afterInteractive"
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=6823604&fmt=gif"
          />
        </noscript> */}

        {/* <script type="text/javascript" id="linkedin-partner-tag">
               _linkedin_partner_id = "6906412";
               window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
               window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        </script>
        
        <script type="text/javascript">
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
        </script>

        <noscript>
              <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=6906412&fmt=gif" />
        </noscript> */}


        {/* Google Analytics */}
        {/* <Script
          async
          src="https://web.archive.org/web/20240725041759js_/https://www.googletagmanager.com/gtag/js?id=UA-130932563-1"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-130932563-1');
          `}
        </Script> */}
      </body>

    </html>
  );
}
