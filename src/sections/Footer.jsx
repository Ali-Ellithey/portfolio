import { FaGithub, FaLinkedin, FaChevronUp } from "react-icons/fa";

export const Footer = () => {
  // دالة برمجية للصعود إلى أعلى الصفحة بنعومة عند الضغط على السهم
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background text-primary py-8 border-t border-border/20">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* نصوص الحقوق والاسم */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()}{" "}
            <span className="text-highlight font-semibold">Ali Sayed</span>. All
            rights reserved.
          </p>
        </div>

        {/* الأيقونات وزر الصعود السريع */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          {/* الروابط المختصرة */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Ali-Ellithey"
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-white transition-colors duration-200"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-al-laithi-0241021b2/"
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-[#0A66C2] transition-colors duration-200"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>

          {/* خط فاصل صغير خفيف وعمودي */}
          <span className="w-[1px] h-5 bg-border/60 hidden md:inline"></span>

          {/* زر السهم المضيء التفاعلي للعودة للأعلى */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-surface border border-border/80 flex items-center justify-center text-secondary hover:text-highlight hover:border-highlight shadow-sm hover:shadow-[0_0_10px_#d4af37/30] transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <FaChevronUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};
