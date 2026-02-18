import { useNavigate } from "react-router-dom";
import Galaxy from "../components/effects/Galaxy";
import ElectricBorder from "../components/ui/ElectricBorder";

export default function NonTechnical() {
  const navigate = useNavigate();

  const events = [
    { name: "Cricket Conquest", path: "/non-technical/cricket-conquest" },
    { name: "Heist Horizon", path: "/non-technical/heist-horizon" },
    { name: "Rhythm Riot", path: "/non-technical/rhythm-riot" },
    { name: "Stranger Things: The Upside Down Rescue", path: "/non-technical/stranger-things" },
    { name: "Min To Win It 3.0", path: "/non-technical/min-to-win-it" },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">

      <div className="absolute inset-0 z-0">
        <Galaxy />
      </div>

      {/* 🔴 Red Overlay */}
      <div className="absolute inset-0 bg-red-900/40 z-10" />

      <div className="relative z-20 px-6 sm:px-10 lg:px-20 py-24">

        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.3em] text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,1)]">
            NON-TECHNICAL EVENTS
          </h1>
          <div className="mt-6 h-[3px] w-40 mx-auto bg-red-500 shadow-[0_0_25px_rgba(239,68,68,1)]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 max-w-7xl mx-auto">

          {events.map((event, index) => (
            <ElectricBorder
              key={index}
              color="#ef4444"
              borderRadius={24}
              className="rounded-2xl cursor-pointer"
            >
              <div
                onClick={() => navigate(event.path)}
                className="bg-black/70 backdrop-blur-xl rounded-2xl p-12 min-h-[360px] flex flex-col items-center justify-center hover:scale-105 transition duration-500"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-red-400 text-center">
                  {event.name}
                </h2>
              </div>
            </ElectricBorder>
          ))}

        </div>
      </div>
    </div>
  );
}
