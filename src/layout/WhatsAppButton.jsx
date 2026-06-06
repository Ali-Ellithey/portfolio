import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  // رقم الهاتف مضافاً إليه كود الدولة (مصر) بدون أصفار إضافية
  const phoneNumber = "201062410066";

  // نص رسالة ترحيبية مسبقة تظهر للعميل بمجرد فتح الشات
  const presetMessage = encodeURIComponent(
    "Hello Ali, I visited your portfolio and I'd love to discuss a project with you!",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${presetMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      // أنميشن ظهور الزر بعد ثانية واحدة من فتح الموقع ليكون مريحاً للعين
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* تأثير الهالة النابضة (Pulse / Ping Effect) خلف الزر لجذب الانتباه بنعومة */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-0 transition-opacity duration-300"></span>

      {/* أيقونة الواتساب الرسمية */}
      <FaWhatsapp className="relative z-10 filter drop-shadow-sm" />
    </motion.a>
  );
};
