// // import Link from "next/link";
// // import React from "react";
// // import Particles from "./components/particles";

// // const navigation = [
// //   { name: "Projects", href: "/projects" },
// //   { name: "Contact", href: "/contact" },
// // ];

// // export default function Home() {
// //   return (
// //     <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
// //       <nav className="my-16 animate-fade-in">
// //         <ul className="flex items-center justify-center gap-20">
// //           {navigation.map((item) => (
// //            <li key={item.href}>
// //            <div className="rounded-md bg-zinc-800/50 p-2  ">
// //              <Link
// //                href={item.href}
// //                className="text-2xl duration-500 text-zinc-500 hover:text-zinc-300"
// //              >
// //               {item.name}
// //             </Link>
// //             </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </nav>
// //       <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
// //       <Particles
// //         className="absolute inset-0 -z-10 animate-fade-in"
// //         quantity={100}
// //       />
// //       <div className="">
// //       <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
// //         Arif Group
// //       </h1>
// //       </div>

// //       <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
// //       <div className="my-16 text-center animate-fade-in">
// //         <h2 className="text-zinc-500 ">
// //         <div style={{
// //               backgroundColor: "rgba(255, 255, 255, 0.1)",
// //               borderRadius: "90px",
// //               padding: "10px",
// //               boxShadow: "0px 0px 20px rgba(255, 255, 255, 200)",
// //               backdropFilter: "blur(10px)",
// //               WebkitBackdropFilter: "blur(10px)",

// //               fontSize:"20px",
// //             }} >
// //           <Link
// //             target="_blank"
// //             href="https://Google.com"
             
// //           >
// //             Google Maps
// //           </Link>
// //           </div>
// //         </h2>
// //           </div>
          
// //       </div>  );

// // }

// import Link from "next/link";
// import React from "react";
// import Particles from "./components/particles";

// const navigation = [
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
//       <nav className="my-16 animate-fade-in">
//         <ul className="flex items-center justify-center gap-20">
//           {navigation.map((item) => (
//            <li key={item.href}>
//            <div className="rounded-md bg-zinc-800/50 p-2  ">
//              <Link
//                href={item.href}
//                className="text-2xl duration-500 text-zinc-500 hover:text-zinc-300"
//              >
//               {item.name}
//             </Link>
//             </div>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
//       <Particles
//         className="absolute inset-0 -z-10 animate-fade-in"
//         quantity={100}
//       />
//       <div className="">
//       <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
//         Arif Group
//       </h1>
//       </div>

//       <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
//       <div className=" text-center animate-fade-in">
//         <h2 className="">
//         <div className="btn btn-neumorphic">
//           <Link
//             target="_blank"
//             href="https://Google.com"
             
//           >
//             Google Maps
//           </Link>
//           </div>
//         </h2>
//           </div>
          
//       </div>  );

// }
"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";


const navigation = [
  { name: "Arif Metal", href: "https://arifmetal.arifgroup.in" },
  { name: "Arif Fabrications", href: "https://ariffabrications.arifgroup.in" },
  { name: "Our Services", href: "https://services.arifgroup.in" },
  { name: "Contact Us", href: "/contact" },
  { name: "Google Maps", href: "https://maps.app.goo.gl/groQjAfwVaWHsQWTA" },
];

export default function Home() {
  const [animateFinished, setAnimateFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateFinished(true);
    }, 2800);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="animate-fade-in">
      <img
  alt='logo'
  style={{ 
    width: '39em',
    opacity: "3%",
  }}
  className="absolute bottom-1/5 left-1/2 transform -translate-x-1/2"
  src='/og2.png'
/>

      </div>
      <nav className=" mb-20vh @apply animate-fade-in">
  <ul className=" justify-center gap-20">
    {navigation.map((item) => (
      <li className='btn-neumorphic gradient-btn' key={item.href}>
        <div className="">
          <Link
            href={item.href}
            className=""
          >
            {item.name}
          </Link>
        </div>
      </li>
    ))}
  </ul>
</nav>
      <div className=" w-screen h-px @apply animate-glow sm:block @apply animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10  @apply animate-fade-in"
      />
        <h1 className=" py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000  bg-white
        cursor-default text-edge-outline @apply animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text hide-on-small-height move-on-big-screen "style={{  textShadow: "3px 4px 50px rgba(113, 120, 122, 1)" }}>
          Arif Group
        </h1>
      <div className=" w-screen h-px @apply animate-glow sm:block @apply animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
    </div>
  );
}

