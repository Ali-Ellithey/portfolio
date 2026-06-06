import { Navbar } from "@/layout/Navbar.jsx";
import { Hero } from "@/sections/Hero.jsx";
import { About } from "@/sections/About.jsx";
import { Experience } from "@/sections/Experience.jsx";
import { Projects } from "@/sections/Projects.jsx";
import { Contact } from "@/sections/Contact.jsx";
import { Footer } from "@/sections/Footer.jsx";
import { WhatsAppButton } from "@/layout/WhatsAppButton.jsx";
function App() {
  return (
    <div className="bg-background min-h-screen font-sans selection:bg-highlight/30 selection:text-white overflow-x-hidden relative">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {/* 2. وضعه هنا ليكون عائماً ومستقلاً عن باقي الأقسام */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
