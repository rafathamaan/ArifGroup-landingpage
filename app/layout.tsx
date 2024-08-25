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
import "../global.css";
import { Inter, Poppins } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Arif Group | Home",
    template: "%s | Arifgroup.in",
  },
  description: "We Deal In All kinds of High Quality Metal Sales and Fabrication",
  openGraph: {
    title: "Arif Group | Home",
    description: "We Deal In All kinds of High Quality Metal Sales and Fabrication",
    url: "https://www.arifgroup.in",
    siteName: "arifgroup.in",
    images: [
      {
        url: "/favicon.png",
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
    shortcut: "public/favicon.png",
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
    <html lang="en" className={`${poppins.className} ${inter.variable} ${calSans.variable}`}>
      <head>
      <link rel="icon" href="public/favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Analytics />
      </head>
      <body
        className={`bg-black font-sans ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}
      >
        {children}
      </body>
    </html>
  );
}