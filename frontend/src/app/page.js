import HeroSection from "./components/HeroSection";
import TransformSection from "./components/TransformSection";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementSection";
import FeaturesSection from "./components/FeatureSection";
import ContactSection from "./components/ContactSection";
import AboutPhysics from "./components/AboutPhysicsSection";
import FacultySection from "./components/FacultySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TransformSection />
      <AboutPhysics/>
      <AboutSection />
      {/* <FacultySection/> */}
      <AchievementsSection />
      <FeaturesSection/>
      <ContactSection/>
    </main>
  );
}
