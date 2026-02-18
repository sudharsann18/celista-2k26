import { useEffect, useState } from "react";
import Galaxy from "../components/effects/Galaxy";
import logo from "../assets/logo.jpg";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});

  const eventDate = new Date("March 15, 2026 09:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">

      {/* 🌌 Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1.4}
          glowIntensity={0.35}
          saturation={0}
          hueShift={0}
          twinkleIntensity={0.4}
          rotationSpeed={0.04}
          repulsionStrength={2}
          starSpeed={0.5}
          speed={1}
          transparent={false}
        />
      </div>

      {/* 🔥 Cinematic Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* 🔴 HEADER SECTION (Timer Zone) */}
<div className="
  absolute top-20 left-1/2 -translate-x-1/2
  md:top-24 md:left-10 md:translate-x-0
  z-30
  w-[95%] md:w-auto
">

  <div className="
    flex flex-wrap justify-center md:justify-start
    gap-3 md:gap-6
  ">

    {["days", "hours", "minutes", "seconds"].map((unit) => (
      <div
        key={unit}
        className="
          flex flex-col items-center
          bg-black/60 backdrop-blur-xl
          px-4 py-3 md:px-6 md:py-4
          rounded-xl
          border border-red-500/40
          shadow-[0_0_25px_rgba(255,0,0,0.4)]
          min-w-[75px] md:min-w-[100px]
        "
      >
        <span className="text-lg md:text-3xl font-bold text-red-500">
          {String(timeLeft[unit] ?? "00").padStart(2, "0")}
        </span>
        <span className="text-[10px] md:text-xs tracking-widest text-gray-400 uppercase mt-1">
          {unit}
        </span>
      </div>
    ))}

  </div>
</div>


      {/* 🚀 CENTER CONTENT */}
      <div className="
        relative z-20 
        flex flex-col 
        items-center 
        justify-center 
        h-full 
        text-center
      ">

        {/* 🔥 Logo */}
        <img
          src={logo}
          alt="Celesta Logo"
          className="
            w-60 sm:w-80 md:w-[420px] lg:w-[500px]
            -mt-10 md:-mt-6
            drop-shadow-[0_0_40px_rgba(255,0,0,0.9)]
            transition duration-500 hover:scale-105
          "
        />

        {/* 🔴 Title */}
        <h1
          className="
            mt-8 md:mt-12
            text-3xl sm:text-4xl md:text-6xl lg:text-7xl
            font-bold tracking-widest 
            text-red-600
            drop-shadow-[0_0_30px_rgba(255,0,0,1)]
            glow-text
          "
        >
          CELISTA 2K26
        </h1>

      </div>
    </div>
  );
}
