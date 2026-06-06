import { useState } from "react";
import Logo from "../assets/Alisayed1.jpg";

export const Navbar = () => {
  // حالة (State) للتحكم في فتح وإغلاق قائمة الموبايل
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border relative z-50">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* الشعار والاسم */}
        <a href="#" className="group inline-block">
          <div className="flex items-center gap-3">
            {/* حاوية اللوجو الدائرية المضيئة */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-highlight overflow-hidden transition-all duration-300 
                 shadow-[0_0_15px_#d4af37,inset_0_0_5px_#d4af37] 
                 group-hover:shadow-[0_0_25px_#d4af37,inset_0_0_8px_#d4af37] group-hover:scale-105 transform"
            >
              <img
                src={Logo}
                alt="Ali Sayed Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* اسمك بجانب اللوجو مع تأثير هوفر ناعم */}
            <span className="text-2xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-highlight">
              Ali Sayed
            </span>
          </div>
        </a>

        {/* أيقونة القائمة (Hamburger Menu) تظهر فقط في الموبايل */}
        <button
          className="md:hidden text-white hover:text-highlight focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // أيقونة (X) للإغلاق
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // أيقونة القائمة (ثلاث خطوط)
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* قائمة الروابط للشاشات الكبيرة (تختفي في الموبايل) */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#home"
              className="text-white hover:text-highlight transition-colors text-lg"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-highlight transition-colors text-lg"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-highlight transition-colors text-lg"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-highlight transition-colors text-lg"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* القائمة المنسدلة لشاشات الموبايل */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border absolute w-full left-0 top-full">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            <li>
              <a
                href="#home"
                className="block text-white hover:text-highlight transition-colors text-lg"
                onClick={() => setIsOpen(false)} // إغلاق القائمة عند الضغط
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-white hover:text-highlight transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block text-white hover:text-highlight transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-white hover:text-highlight transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
