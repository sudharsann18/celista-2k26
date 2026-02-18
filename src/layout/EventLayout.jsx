import Galaxy from "../components/effects/Galaxy";
import ElectricBorder from "../components/ui/ElectricBorder";

export default function EventLayout({
  title,
  description,
  teamSize,
  venue,
  date,
  prize,
  rules,
  formLink,
  color = "blue", // default Jedi
}) {

  // 🎨 Theme Configuration
  const theme =
    color === "red"
      ? {
          overlay: "bg-red-900/40",
          primaryText: "text-red-500",
          primaryGlow: "drop-shadow-[0_0_25px_rgba(239,68,68,1)]",
          borderColor: "#ef4444",
          accentShadow: "shadow-[0_0_25px_rgba(239,68,68,1)]",
          buttonBg: "bg-red-600",
          buttonGlow:
            "shadow-[0_0_25px_rgba(239,68,68,0.9)] hover:shadow-[0_0_45px_rgba(239,68,68,1)]",
        }
      : {
          overlay: "bg-blue-900/40",
          primaryText: "text-blue-400",
          primaryGlow:
            "drop-shadow-[0_0_25px_rgba(59,130,246,1)]",
          borderColor: "#3b82f6",
          accentShadow:
            "shadow-[0_0_25px_rgba(59,130,246,1)]",
          buttonBg: "bg-blue-500",
          buttonGlow:
            "shadow-[0_0_25px_rgba(59,130,246,0.9)] hover:shadow-[0_0_45px_rgba(59,130,246,1)]",
        };

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

      {/* 🌑 Themed Overlay */}
      <div className={`absolute inset-0 ${theme.overlay} z-10`} />

      <div className="relative z-20 px-6 sm:px-10 lg:px-20 py-24 max-w-6xl mx-auto">

        {/* 🧠 Title */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.25em] ${theme.primaryText} ${theme.primaryGlow}`}
          >
            {title}
          </h1>

          <div
            className={`mt-6 h-[3px] w-40 mx-auto ${theme.primaryText.replace(
              "text",
              "bg"
            )} ${theme.accentShadow}`}
          />
        </div>

        {/* 🧾 Main Info Card */}
        <ElectricBorder
          color={theme.borderColor}
          speed={1}
          chaos={0.12}
          borderRadius={24}
          className="rounded-2xl"
        >
          <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-10 space-y-6">

            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6 text-gray-300">

              <div>
                <span className={`${theme.primaryText} font-semibold`}>
                  Team Size:
                </span>
                <p>{teamSize}</p>
              </div>

              <div>
                <span className={`${theme.primaryText} font-semibold`}>
                  Venue:
                </span>
                <p>{venue}</p>
              </div>

              <div>
                <span className={`${theme.primaryText} font-semibold`}>
                  Date:
                </span>
                <p>{date}</p>
              </div>

              <div>
                <span className={`${theme.primaryText} font-semibold`}>
                  Prize:
                </span>
                <p>{prize}</p>
              </div>

            </div>
          </div>
        </ElectricBorder>

        {/* 📜 Rules */}
        <div className="mt-16">
          <ElectricBorder
            color={theme.borderColor}
            speed={1}
            chaos={0.12}
            borderRadius={24}
            className="rounded-2xl"
          >
            <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-10">

              <h2
                className={`text-2xl font-semibold ${theme.primaryText} mb-6`}
              >
                Rules & Guidelines
              </h2>

              <ul className="space-y-3 text-gray-300">
                {rules?.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={theme.primaryText}>⚡</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>

            </div>
          </ElectricBorder>
        </div>

        {/* 🚀 Register Button */}
        <div className="text-center mt-16">
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-10 py-4 ${theme.buttonBg} text-white font-semibold rounded-full ${theme.buttonGlow} hover:scale-110 transition duration-500`}
          >
            Register Now
          </a>
        </div>

      </div>
    </div>
  );
}
