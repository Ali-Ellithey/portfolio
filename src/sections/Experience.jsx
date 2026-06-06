import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";

export const Experience = () => {
  // بيانات الخط الزمني المهني والتعليمي
  const timelineData = [
    {
      role: "Freelance Front-End Developer",
      company: "Self-Employed / Platforms (Upwork & Khamsat)",
      duration: "2024 - Present",
      description:
        "Developing bespoke, highly responsive web applications using the React ecosystem and Tailwind CSS. Successfully delivered multi-lingual platforms (such as Al-Wahaj Car Rental) focusing on smooth UI animations and globalized user experiences.",
      icon: <FaCode className="text-highlight" />,
    },
    {
      role: "Senior Operations & Customer Solutions Agent",
      company: "Mobility & Transit Systems Sector",
      duration: "2022 - Present",
      description:
        "Managing technical customer workflows and data operations. Utilizing analytical skills to optimize daily operational performance, integrating technical problem-solving with advanced communication strategies.",
      icon: <FaBriefcase className="text-[#61DAFB]" />,
    },
    {
      role: "Sales Specialist & Tech Representative",
      company: "Samsung Electronics",
      duration: "Previous Experience",
      description:
        "Managed data logs, analyzed sales performance using advanced pivot tables, and provided high-end consumer tech solutions, bridging the gap between product capability and customer requirements.",
      icon: <FaBriefcase className="text-emerald-400" />,
    },
    {
      role: "Bachelor’s Degree in CS & MIS",
      company: "Management Information Systems Faculty",
      duration: "Class of 2017",
      description:
        "Academic foundation combining core Computer Science disciplines, database architecture design, relational database systems (MySQL), and information management systems logic.",
      icon: <FaGraduationCap className="text-secondary" />,
    },
  ];

  return (
    <section
      id="experience"
      className="bg-background py-24 text-primary relative"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* عنوان القسم الرئيسي */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-serif mb-2"
          >
            My <span className="text-highlight">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-highlight mx-auto rounded-full shadow-[0_0_10px_#d4af37]"
          ></motion.div>
        </div>

        {/* هيكل الخط الزمني (Timeline Wrapper) */}
        <div className="relative border-l-2 border-border/60 ml-4 md:ml-32 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* النقطة المضيئة على الخط الزمني محتوية على الأيقونة */}
              <div className="absolute -left-[21px] top-1 bg-surface border-2 border-border/80 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm group-hover:border-highlight/60 group-hover:shadow-[0_0_15px_#d4af37] transition-all duration-300">
                {item.icon}
              </div>

              {/* كارت عرض التفاصيل */}
              <div className="bg-surface p-6 rounded-xl border border-border/40 hover:border-highlight/20 hover:shadow-[0_4px_20px_rgba(13,27,42,0.4)] transition-all duration-300">
                {/* الجزء العلوي: المدة الزمنية والمسمى */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors duration-300">
                      {item.role}
                    </h3>
                    <p className="text-highlight/90 text-sm font-medium mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  {/* المدى الزمني كـ Tag أنيق */}
                  <span className="inline-block bg-background/80 text-secondary text-xs px-3 py-1 rounded-full border border-border/60 self-start md:self-center whitespace-nowrap">
                    {item.duration}
                  </span>
                </div>

                {/* الوصف المهني */}
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
