import { motion } from "framer-motion";
// استيراد الأيقونات الشهيرة من مكتبة react-icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaBootstrap,
  FaLaptopCode,
  FaCode,
  FaServer,
  FaTools,
} from "react-icons/fa";
import {
  SiJavascript,
  SiVite,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiFramer,
} from "react-icons/si";

export const About = () => {
  // هيكل البيانات المطور ليشمل الأيقونة الخاصة بكل قسم وكل مهارة
  const skillCategories = [
    {
      title: "Frontend Core",
      icon: <FaCode className="text-highlight text-xl" />, // أيقونة القسم الرئيسي
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E] bg-black rounded-xs" />,
        },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      ],
    },

    {
      title: "Tools & Ecosystem",
      icon: <FaTools className="text-highlight text-xl" />,
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
        {
          name: "Framer Motion",
          icon: <SiFramer className="text-[#E111FF]" />,
        },
        { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
        {
          name: "Responsive Design",
          icon: <FaLaptopCode className="text-emerald-400" />,
        },
      ],
    },
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="bg-background py-24 text-primary relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* عنوان القسم الرئيسي */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-2">
            About <span className="text-highlight">Me</span>
          </h2>
          <div className="w-20 h-1 bg-highlight mx-auto rounded-full shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>

        {/* محتوى القسم */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* النبذة الشخصية */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariant}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            <p className="text-secondary text-lg leading-relaxed">
              I am a passionate{" "}
              <span className="text-white font-medium">
                Front-End Developer
              </span>{" "}
              with a solid foundation in Computer Science and Management
              Information Systems. I specialize in crafting modern,
              high-performance web applications where pixel-perfect design meets
              clean, maintainable code.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              My core strength lies in building seamless user experiences using
              the React ecosystem, while also possessing a strategic
              understanding of backend architecture and relational databases.
              This end-to-end perspective allows me to bridge the gap between
              complex logic and fluid visual execution.
            </p>
          </motion.div>

          {/* كروت المهارات المحدثة بالأيقونات */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-surface p-6 rounded-xl border border-border/40 shadow-sm hover:border-highlight/30 transition-all duration-300"
              >
                {/* عنوان الكارت + أيقونة القسم */}
                <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-3">
                  {category.icon}
                  {category.title}
                </h4>

                {/* شبكة التاجات المحدثة */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="bg-background text-primary px-3 py-2 rounded-lg text-sm border border-border flex items-center gap-2 hover:border-highlight/60 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {/* رندر الأيقونة الملونة الخاصة بالتقنية */}
                      <span className="text-lg flex items-center">
                        {skill.icon}
                      </span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
