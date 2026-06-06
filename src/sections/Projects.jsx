import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCar,
  FaChartPie,
  FaGlobe,
  FaShoppingCart,
  FaTasks,
  FaCoffee,
  FaFilm,
} from "react-icons/fa";

export const Projects = () => {
  // بيانات المشاريع - يمكنك تعديل الصور والروابط لاحقاً بسهولة
  const projectsData = [
    {
      title: "Al-Wahaj Car Rental Platform",
      description:
        "A premium, multi-lingual (Arabic/English) car rental web application designed for a luxury fleet. Features advanced filtering by vehicle segment, elegant dark UI, and seamless animations.",
      tags: [
        "JavaScript ES6",
        "React.js",
        "Bootstrap",
        "Framer Motion",
        "Vite",
        "UI/UX Design",
      ],
      icon: <FaCar className="text-3xl text-highlight" />,
      github: "#",
      live: "https://ali-ellithey.github.io/wajeh-Alealamia/",
    },
    {
      title: "Sales Analytics",
      description:
        "A high-performance data visualization dashboard tailored for consumer electronics sales tracking. Integrates interactive charts, filtering systems, and complex metric management.",
      tags: ["React.js", "CSS", "Bootstrap", "JavaScript ES6"],
      icon: <FaChartPie className="text-3xl text-[#61DAFB]" />,
      github: "https://github.com/Prime-Code0/luxurystore",
      live: "https://prime-code0.github.io/luxurystore/",
    },
    {
      title: "Modern E-Commerce Platform",
      description:
        "A fully-featured, high-performance e-commerce storefront featuring dynamic product filtering, a real-time responsive shopping cart system, optimized image rendering, and a seamless, checkout-ready user experience.",
      tags: ["JavaScript ES6", "CSS", "State Management", "E-Commerce UI"],
      // تم تغيير الأيقونة إلى عربة تسوق لتتناسب تماماً مع الفكرة
      icon: <FaShoppingCart className="text-3xl text-emerald-400" />,
      github: "https://github.com/Ali-Ellithey/Ecommerce",
      live: "https://ali-ellithey.github.io/Ecommerce/",
    },
    {
      title: "MovieIN - Cinematic Discovery Platform",
      description:
        "A dynamic movie exploration application leveraging asynchronous API fetching to display real-time cinematic data. Features interactive search functionality, category filtering, and an optimized media card grid layout.",
      tags: [
        "React.js",
        "REST API Fetching",
        "Tailwind CSS",
        "Asynchronous JS",
      ],
      icon: <FaFilm className="text-3xl text-red-500" />,
      github: "https://github.com/Ali-Ellithey/MovieIN",
      live: "https://ali-ellithey.github.io/MovieIN/",
    },
    {
      title: "Smart Productivity Task Manager",
      description:
        "A seamless To-Do application built with robust state architecture. Integrates active status filtering (All, Active, Completed) and LocalStorage persistence to retain user tasks across browser sessions.",
      tags: ["React.js", "State Management", "LocalStorage", "Tailwind CSS"],
      icon: <FaTasks className="text-3xl text-sky-400" />,
      github: "https://github.com/Ali-Ellithey/my-to-do-list",
      live: "https://ali-ellithey.github.io/my-to-do-list/", // رابط الـ GitHub Pages المتوقع للمشروع
    },
    {
      title: "Delicious Coffee - Interactive Digital Menu",
      description:
        "A high-end responsive digital restaurant menu designed for premium coffee shops. Focuses on clean visual grid alignments, custom category tab switching, and modern item component rendering.",
      tags: ["React.js", "Tailwind CSS", "UI/UX Layouts", "Responsive Design"],
      icon: <FaCoffee className="text-3xl text-[#b87333]" />, // لون نحاسي دافئ يناسب ثيم الكافيه
      github: "https://github.com/Ali-Ellithey/Menu-Delicious-Coffee",
      live: "https://ali-ellithey.github.io/Menu-Delicious-Coffee/",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="bg-background py-24 text-primary relative"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-serif mb-2"
          >
            My Recent <span className="text-highlight">Works</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-highlight mx-auto rounded-full shadow-[0_0_10px_#d4af37]"
          ></motion.div>
        </div>

        {/* شبكة عرض المشاريع (Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }} // يرتفع الكارت لأعلى قليلاً عند الهوفر
              className="bg-surface rounded-xl border border-border/40 overflow-hidden flex flex-col h-full group hover:border-highlight/40 hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)] transition-all duration-300"
            >
              {/* واجهة الكارت البصرية (يمكنك استبدالها بـ <img /> لاحقاً) */}
              <div className="h-48 bg-gradient-to-br from-foreground to-background flex items-center justify-center border-b border-border/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>

              {/* تفاصيل المشروع */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-highlight transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* التاجات والتقنيات المستخدمة */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-xs bg-background/60 text-secondary border border-border/60 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* أزرار المعاينة والكود */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm text-secondary hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="text-lg" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm text-highlight hover:underline transition-all duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt className="text-base" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
