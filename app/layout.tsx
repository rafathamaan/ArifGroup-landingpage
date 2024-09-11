// import "../global.css";
// import { Inter } from "@next/font/google";
// import LocalFont from "@next/font/local";
// import { Metadata } from "next";
// import { Analytics } from "./components/analytics";

// export const metadata: Metadata = {
//   name:"viewport", content:"width=device-width, initial-scale=1.0",
//   title: {
//     default: "Arif Group",
//     template: "%s | Arifgroup.in",
//   },
//   description: "We Deal In All kinds of High Quality Metal Sales and Fabrication",
//   openGraph: {
//     title: "Arif Group",
//   description: "We Deal In All kinds of High Quality Metal Sales and Fabrication",
//     url: "https://www.arifgroup.in",
//     siteName: "arifgroup.in",
//     images: [
//       {
//         url: "public/og.png",
//         width: 1920,
//         height: 1080,
//       },
//     ],
//     locale: "en-US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },

//   icons: {
//     shortcut: "/favicon.png",
//   },
// };
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const calSans = LocalFont({
//   src: "../public/fonts/CalSans-SemiBold.ttf",
//   variable: "--font-calsans",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
//       <head>
//         <Analytics />
//       </head>
//       <body
//         className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
//           }`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

// import "../global.css";
// import { Inter, Poppins, Montserrat } from "@next/font/google";
// import LocalFont from "@next/font/local";
// import { Metadata } from "next";
// // import { Analytics } from "./components/analytics";
// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';


// export const metadata: Metadata = {
//   title: {
//     default: "Arif Group | Home",
//     template: "%s | Arifgroup.in",
//   },
//   description: "We Deal In All kinds of High Quality Metal Sales and Fabrication",
//   openGraph: {
//     title: "Arif Group | Home",
//     description: "We Deal In All kinds of High Quality Metal Sales and Fabrication",
//     url: "https://www.arifgroup.in",
//     siteName: "arifgroup.in",
//     images: [
//       {
//         url: "/favicon.png",
//         width: 1920,
//         height: 1080,
//       },
//     ],
//     locale: "en-US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   icons: {
//     shortcut: "/favicon.png",
//   },
// };

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600"],
//   style: "normal",
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600","700","800","900"],
//   style: "normal",
// });


// const calSans = LocalFont({
//   src: "../public/fonts/CalSans-SemiBold.ttf",
//   variable: "--font-calsans",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${montserrat.className} ${poppins.className}  ${calSans.variable} sans-serif `}>
//       <head>
        
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="icon" href="/favicon.png" />
//       </head>
//       <body
//         className={`bg-black font-sans ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}
//       >
//         {children}
//         <Analytics />
//         <SpeedInsights/>
//       </body>
//     </html>
//   );
// }


import "../global.css";
import { Inter, Poppins, Montserrat } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: {
    default: "Arif Group | Home",
    template: "%s | ArifGroup.in",
  },
  description: "Arif Group specializes in High-Quality Metal Sales, Fabrication, Shed-Works, Stainless-Steel Furniture and Interior-Exterior offering expert consultancy and contracting services. We are a leading company in contracting, known for our excellence in various projects with More than 39 Years of Experience. Based in Suryapet (508213)",
  openGraph: {
    title: "Arif Group | Home",
    description: "Arif Group specializes in High-Quality Metal Sales, Fabrication, Shed-Works, Stainless-Steel Furniture and Interior-Exterior offering expert consultancy and contracting services. We are a leading company in contracting, known for our excellence in various projects with More than 39 Years of Experience. Based in Suryapet (508213)",
    url: "https://www.ArifGroup.in",
    siteName: "Arif Group",
    images: [
      {
        url: "/og3.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  style: "normal",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600","700","800","900"],
  style: "normal",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} ${poppins.className} ${calSans.variable} sans-serif`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`bg-black font-sans ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}
      >
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}