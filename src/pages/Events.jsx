import { useNavigate } from "react-router-dom";
import Galaxy from "../components/effects/Galaxy";
import anakinBlue from "../assets/anakin-blue.jpg";
import anakinRed from "../assets/anakin-red.jpg";

export default function Events() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">

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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 🔥 Top Heading */}
<div className="relative z-30 text-center pt-24 md:pt-28 select-none">
  <h1 className="
    text-2xl sm:text-3xl md:text-5xl
    font-bold tracking-[0.6em]
    text-white
    opacity-90
    drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]
    animate-pulse
  ">
    CHOOSE YOUR SIDE
  </h1>

  <div className="mt-5 flex justify-center items-center gap-2">
    <div className="h-[2px] w-20 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
    <div className="h-[2px] w-20 bg-red-500 shadow-[0_0_15px_rgba(255,0,0,0.9)]" />
  </div>
</div>



      {/* ⚔️ Split Layout */}
      <div className="relative z-20 flex flex-col md:flex-row min-h-screen">

        {/* 🔵 TECHNICAL */}
        <div
          onClick={() => navigate("/technical")}
          className="
            group relative flex-1
            flex items-center justify-center
            cursor-pointer
            overflow-hidden
          "
        >
          <img
            src={anakinBlue}
            alt="Technical Events"
            className="absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-40 group-hover:opacity-60 transition duration-500"

          />

          <div className="relative z-10 text-center">
            <h1 className="
              text-3xl sm:text-4xl md:text-6xl
              font-bold tracking-[0.3em]
              text-blue-400
              drop-shadow-[0_0_30px_rgba(59,130,246,0.9)]
              group-hover:scale-110
              transition duration-500
            ">
              TECHNICAL Events
            </h1>

            <div className="
              mt-4 h-[3px] w-24 md:w-32
              bg-blue-400 mx-auto
              shadow-[0_0_25px_rgba(59,130,246,0.9)]
              group-hover:w-48
              transition-all duration-500
            " />
          </div>
        </div>

        {/* 🔴 NON TECHNICAL */}
        <div
          onClick={() => navigate("/non-technical")}
          className="
            group relative flex-1
            flex items-center justify-center
            cursor-pointer
            overflow-hidden
          "
        >
          <img
            src={anakinRed}
            alt="Non Technical Events"
            className="
  absolute inset-0 w-full h-full 
  object-cover 
  object-[center_20%] 
  opacity-40 
  group-hover:opacity-60 
  transition duration-500
"

          />

          <div className="relative z-10 text-center">
            <h1 className="
              text-3xl sm:text-4xl md:text-6xl
              font-bold tracking-[0.3em]
              text-red-500
              drop-shadow-[0_0_30px_rgba(255,0,0,0.9)]
              group-hover:scale-110
              transition duration-500
            ">
              NON TECHNICAL Events

            </h1>

            <div className="
              mt-4 h-[3px] w-24 md:w-32
              bg-red-500 mx-auto
              shadow-[0_0_25px_rgba(255,0,0,0.9)]
              group-hover:w-48
              transition-all duration-500
            " />
          </div>
        </div>

      </div>
    </div>
  );
}
