import { useEffect, useState } from "react";
import { GridScan } from "./effects/GridScan";

const Intro = ({ onFinish }) => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🔥 Detect screen size properly
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 Fade animation timing
  useEffect(() => {
    const fadeIn = setTimeout(() => setVisible(true), 500);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onFinish();
      }, 1000);
    }, 4500);

    return () => {
      clearTimeout(fadeIn);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">

      {/* 🔥 Tunnel Background */}
      <div className="absolute inset-0 w-full h-full">
        <GridScan
          sensitivity={0}
          enableWebcam={false}
          enableGyro={false}
          scanOnClick={false}
          lineThickness={1}
          linesColor="#ff0000"
          scanColor="#ff0000"
          gridScale={isMobile ? 0.13 : 0.08}   // ✅ better tunnel visibility on mobile
          scanOpacity={0.85}
          enablePost={false}
          noiseIntensity={0.01}
          scanGlow={1.0}
          scanSoftness={3}
          scanDuration={4.0}
          scanDelay={0.0}
          scanDirection="forward"
        />
      </div>

      {/* 🔴 Center Text */}
      <div className="absolute inset-0 flex items-center justify-center z-20">

        <h1
          className={`
            text-2xl sm:text-3xl md:text-5xl lg:text-7xl
            font-bold
            tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.4em]
            text-red-600
            drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]
            text-center
            px-6
            transition-all duration-1000 ease-in-out
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          CELISTA 2K26
        </h1>

      </div>

    </div>
  );
};

export default Intro;
