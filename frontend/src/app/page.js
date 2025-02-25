import HeroSection from "./components/HeroSection";
import TransformSection from "./components/TransformSection";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementSection";
import SuccessStories from "./components/SuccessStoriesSection";
import FeaturesSection from "./components/FeatureSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TransformSection />
      <AboutSection />
      <AchievementsSection />
      <SuccessStories />
      <FeaturesSection/>
      <ContactSection/>
    </main>
  );
}
