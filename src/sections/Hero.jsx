import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import MyProfilePic from "../assets/Alisayed1.jpg";

export const Hero = () => {
  return (
    // تم تعديل min-h إلى ليتناسب مع البادينج ويمنع المساحات الفارغة المبالغ فيها
    <section className="bg-background text-white min-h-[75vh] flex items-center overflow-hidden relative">
      {/* 💡 هنا السر: أضفنا max-w-6xl ليكون متطابقاً تماماً مع سكشن المشاريع بالملي */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-12 max-w-6xl">
        {/* قسم الصورة (جهة اليمين) */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="w-full md:w-2/5 flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-90 lg:h-90 aspect-square rounded-2xl overflow-hidden border-b-4 border-highlight"
            style={{ boxShadow: "0 20px 30px -10px #d4af37" }}
          >
            <img
              src={MyProfilePic}
              alt="Ali Sayed"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>

        {/* قسم النصوص المتحركة (جهة اليسار) */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            Hi, I'm <span className="text-highlight">Ali Sayed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-secondary mb-3 font-semibold"
          >
            Front End Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-base md:text-lg text-zinc-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            I transform creative ideas and designs into interactive, fast, and
            fully responsive user interfaces using the latest web technologies.
          </motion.p>

          {/* أزرار التفاعل */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-block bg-highlight text-background font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300"
              style={{ boxShadow: "0 4px 15px rgba(212, 175, 55, 0.4)" }}
            >
              View My Work
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                backgroundColor: "rgba(212, 175, 55, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1tXr54ZsN4md-opCKql37iaYCvyWZ66mm/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-highlight text-highlight font-bold px-7 py-2.5 rounded-full transition-all duration-300 cursor-pointer text-sm"
            >
              <FaDownload className="text-xs" />
              Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
