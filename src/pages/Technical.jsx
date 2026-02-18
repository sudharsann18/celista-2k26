import { useNavigate } from "react-router-dom";
import Galaxy from "../components/effects/Galaxy";
import ElectricBorder from "../components/ui/ElectricBorder";

export default function Technical() {
  const navigate = useNavigate();

  const events = [
    {
      name: "Borderland Decrypt",
      path: "/technical/borderland-decrypt",
      logo: "/logos/borderland.png",
    },
    {
      name: "Comic Nexus",
      path: "/technical/comic-nexus",
      logo: "/logos/comic.png",
    },
    {
      name: "HACSPRINT",
      path: "/technical/hacsprint",
      logo: "/logos/hacsprint.png",
    },
    {
      name: "Think & Link",
      path: "/technical/think-link",
      logo: "/logos/think.png",
    },
    {
      name: "DRIFT_X",
      path: "/technical/drift-x",
      logo: "/logos/drift.png",
    },
  ];

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

      {/* 🔵 Blue Overlay */}
      <div className="absolute inset-0 bg-blue-950/50 z-10" />

      <div className="relative z-20 px-6 sm:px-12 lg:px-20 py-28">

        {/* 🔵 Title */}
        <div className="text-center mb-24">
          <h1 className="
            text-4xl sm:text-5xl md:text-6xl
            font-bold tracking-[0.35em]
            text-blue-400
            drop-shadow-[0_0_35px_rgba(59,130,246,1)]
          ">
            TECHNICAL EVENTS
          </h1>

          <div className="
            mt-8 h-[4px] w-48 mx-auto
            bg-blue-400
            shadow-[0_0_30px_rgba(59,130,246,1)]
          " />
        </div>

        {/* 🔵 BIG GRID (2 per row max) */}
        <div className="
          grid grid-cols-1 
          md:grid-cols-2 
          gap-20
          max-w-6xl 
          mx-auto
        ">

          {events.map((event, index) => (
            <ElectricBorder
              key={index}
              color="#3b82f6"
              speed={1}
              chaos={0.12}
              borderRadius={28}
              thickness={2}
              className="rounded-3xl cursor-pointer"
            >
              <div
                onClick={() => navigate(event.path)}
                className="
                  bg-black/75 backdrop-blur-2xl
                  rounded-3xl
                  p-14
                  min-h-[420px]
                  flex flex-col items-center justify-between
                  transition duration-500
                  hover:scale-[1.04]
                  hover:bg-black/85
                "
              >
                {/* Event Name */}
                <h2 className="
                  text-3xl md:text-4xl
                  font-semibold
                  text-blue-300
                  text-center
                  tracking-wide
                ">
                  {event.name}
                </h2>

                {/* BIG Logo Area */}
                <div className="flex items-center justify-center my-10">
                  <div className="
                    w-44 h-44
                    bg-blue-500/10
                    rounded-2xl
                    flex items-center justify-center
                    border border-blue-400/30
                  ">
                    {/* Later replace with actual image */}
                    <span className="text-blue-300 text-lg tracking-widest">
                      LOGO
                    </span>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="
                  h-[3px] w-36
                  bg-blue-400
                  shadow-[0_0_25px_rgba(59,130,246,1)]
                " />
              </div>
            </ElectricBorder>
          ))}

        </div>

      </div>
    </div>
  );
}
