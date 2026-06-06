import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export const Contact = () => {
  // دالة التعامل مع إرسال الفورم (يمكنك ربطها بـ Formspree أو EmailJS لاحقاً)
  const handleSubmit = (e) => {
    e.preventDefault();
    // كود معالجة البيانات هنا
  };

  return (
    <section id="contact" className="bg-background py-24 text-primary relative">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-serif mb-2"
          >
            Get In <span className="text-highlight">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-highlight mx-auto rounded-full shadow-[0_0_10px_#d4af37]"
          ></motion.div>
        </div>

        {/* شبكة توزيع المحتوى (عمودين في الشاشات الكبيرة) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* العمود الأول (4 أعمدة): معلومات التواصل السريع */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's build something great together!
            </h3>
            <p className="text-secondary leading-relaxed text-base">
              Whether you have a question, a project idea, or just want to say
              hello, feel free to drop a message. I'll get back to you as soon
              as possible.
            </p>

            {/* بطاقات التواصل المباشر */}
            <div className="space-y-4 pt-4">
              {/* البريد الإلكتروني */}
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border/40 hover:border-highlight/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-highlight text-lg border border-border group-hover:shadow-[0_0_10px_#d4af37/40] transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-xs text-secondary font-medium">
                    Email Me
                  </h4>
                  <p className="text-sm text-white font-semibold group-hover:text-highlight transition-colors">
                    alisayed1519@gmail.com
                  </p>
                </div>
              </a>

              {/* الشبكات الاجتماعية */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/Ali-Ellithey"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-surface border border-border/60 flex items-center justify-center text-xl text-secondary hover:text-white hover:border-highlight transition-all duration-300 shadow-sm"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-al-laithi-0241021b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-surface border border-border/60 flex items-center justify-center text-xl text-secondary hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 shadow-sm"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* العمود الثاني (7 أعمدة): نموذج الإدخال (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 bg-surface p-8 rounded-2xl border border-border/40 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* حقل الاسم */}
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ali Sayed"
                  className="w-full bg-background border border-border/80 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/40 transition-all duration-300"
                />
              </div>

              {/* حقل الإيميل */}
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ali@example.com"
                  className="w-full bg-background border border-border/80 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/40 transition-all duration-300"
                />
              </div>

              {/* حقل الرسالة */}
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  required
                  placeholder="Hi Ali, I'd love to collaborate on a new project..."
                  className="w-full bg-background border border-border/80 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/40 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* زر الإرسال تفاعلي ومتحرك */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-highlight text-background font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-90 shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer text-sm"
              >
                Send Message
                <FaPaperPlane className="text-xs transform rotate-45 -translate-y-0.5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
