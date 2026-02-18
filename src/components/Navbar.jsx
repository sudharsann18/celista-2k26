import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "EVENTS", path: "/events" },
    { name: "LOCATION", path: "/location" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="
  absolute top-4 w-full z-40 
  flex items-center justify-between
  px-6 md:justify-end md:px-12
  text-white
">


      {/* Desktop Navbar */}
      <ul className="
        hidden md:flex 
        gap-6 lg:gap-10 
        text-xs md:text-sm 
        tracking-[0.15em] md:tracking-[0.3em] 
        font-semibold
      ">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `
                transition-all duration-300
                ${
                  isActive
                    ? "text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]"
                    : "text-gray-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]"
                }
              `
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden absolute right-6">
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-300 hover:text-red-500 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          absolute top-16 right-6
          w-52
          bg-black/90 backdrop-blur-md
          border border-red-500/30
          rounded-lg shadow-lg
          p-5 space-y-5
          md:hidden
          transition-all duration-300
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `
              block text-sm tracking-[0.2em]
              transition-all duration-300
              ${
                isActive
                  ? "text-red-500"
                  : "text-gray-300 hover:text-red-500"
              }
            `
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
