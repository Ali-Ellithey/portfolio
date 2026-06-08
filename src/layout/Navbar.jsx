import { useState } from "react";
import Logo from "../assets/Alisayed1.jpg";

export const Navbar = () => {
  // حالة (State) للتحكم في فتح وإغلاق قائمة الموبايل الجانبية
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border relative z-50">
      {/* 💡 أضفنا هنا max-w-6xl للتطابق، واستبدلنا space-x بـ gap-8 لضمان دقة الهوامش */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center max-w-6xl">
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

            {/* اسمك بجانب اللوجو */}
            <span className="text-2xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-highlight">
              Ali Sayed
            </span>
          </div>
        </a>

        {/* أيقونة القائمة (Hamburger Menu) تظهر فقط في الموبايل */}
        <button
          className="md:hidden text-white hover:text-highlight focus:outline-none transition-colors z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
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

        {/* قائمة الروابط للشاشات الكبيرة - تم تحويلها لـ gap-8 بدلاً من space-x */}
        <ul className="hidden md:flex items-center gap-8">
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

      {/* خلفية معتمة (Overlay) */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* القائمة الجانبية (Sidebar) لشاشات الموبايل */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-surface border-l border-border z-40 shadow-2xl transition-transform duration-300 ease-in-out flex items-center justify-center ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-8 text-center w-full px-6">
          <li>
            <a
              href="#home"
              className="block text-white hover:text-highlight transition-colors text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-white hover:text-highlight transition-colors text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-white hover:text-highlight transition-colors text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-white hover:text-highlight transition-colors text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
