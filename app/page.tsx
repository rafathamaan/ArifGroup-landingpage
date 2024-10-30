// "use client"
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import Particles from "./components/particles";

// const navigation = [
//   { name: "Arif Metal", href: "https://services.arifgroup.in/arifmetal" },
//   { name: "Arif Fabrications", href: "https://services.arifgroup.in/ariffabrications" },
//   { name: "Our Services", href: "https://services.arifgroup.in" },
//   { name: "Contact Us", href: "https://services.arifgroup.in/contact" },
//   { name: "Google Maps", href: "https://maps.app.goo.gl/groQjAfwVaWHsQWTA" },
// ];

// export default function Home() {
  

//   return (
//     <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      
//       <div className="hide-on-small-height w-screen h-px @apply animate-glow sm:block @apply animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
//       <Particles
//         className="absolute inset-0 -z-10  @apply animate-fade-in"
//       />
      
//         <h1 className=" animation-1000 tracking-wider font-bold py-3.5 px-0.5 z-10 text-5xl text-transparent text-white 
//         cursor-default text-edge-outline  @apply animate-title font-sans sm:text-7xl md:text-7xl lg:text-10xl whitespace-nowrap bg-clip-text hide-on-small-height  "
//         style={{ textShadow: "3px 4px 50px rgba(113, 120, 122, 1)",
//           position: "absolute",
//           top: "5%",
          
//         }}>
//           Arif Group
//         </h1>
        
//       <div className=" hide-on-small-height w-screen h-px @apply animate-glow  @apply animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 " />
//       <div className="animate-fade-in">
//       <img
//   alt='logo'
//   style={{ 
//     width: '36em',
//     opacity: "10%",
//     bottom:"auto",
//     position: "absolute",
//     top: "53%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
    
//   }}
  
//   src='/og2.png'
// />
// </div>
      
//       <nav className=" mb-20vh @apply animate-fade-in">
//   <ul className=" justify-center"style={{ 
//     bottom:"auto",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//   }}>
//     {navigation.map((item) => (
//       <li className='btn-neumorphic gradient-btn font-bold' key={item.href}>
//         <div className="">
//           <Link
//             href={item.href}
//             className=""
//           >
//             {item.name}
//           </Link>
//         </div>
//       </li>
//     ))}
//   </ul>
// </nav>
      
      
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Arif Metal", href: "https://services.arifgroup.in/arifmetal" },
  { name: "Arif Fabrications", href: "https://services.arifgroup.in/ariffabrications" },
  { name: "Our Services", href: "https://services.arifgroup.in" },
  { name: "Contact Us", href: "https://services.arifgroup.in/contact" },
  { name: "Google Maps", href: "https://maps.app.goo.gl/groQjAfwVaWHsQWTA" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      
      <div className="hide-on-small-height w-screen h-px animate-glow sm:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" />
      
      <h1 className="tracking-wider font-bold py-3.5 px-0.5 z-10 text-5xl text-transparent text-white cursor-default text-edge-outline animate-title font-sans sm:text-7xl md:text-7xl lg:text-10xl whitespace-nowrap bg-clip-text hide-on-small-height"
          style={{ textShadow: "3px 4px 50px rgba(113, 120, 122, 1)", position: "absolute", top: "5%" }}>
          Arif Group
      </h1>
        
      <div className="hide-on-small-height w-screen h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <div className="animate-fade-in">
        <img
          alt="logo"
          style={{
            width: '36em',
            opacity: "10%",
            position: "absolute",
            top: "53%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          src="/og2.png"
        />
      </div>
      
      <nav className="mb-20vh animate-fade-in">
        <ul className="justify-center" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          {navigation.map((item) => (
            <li className="btn-neumorphic gradient-btn font-bold" key={item.href}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="absolute bottom-4 text-sm text-zinc-400 animate-fade-in underline hover:text-green-600 ">
        <Link href="https://linkedin.com/in/rafathamaan" target="_blank" rel="noopener noreferrer">
          Developed by Rafath Amaan
        </Link>
      </footer>
    </div>
  );
}
