import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import CourseSection from '../components/CourseSection';
import ProcessSection from '../components/ProcessSection';
import FaqSection from '../components/FaqSection';
import CtaBanner from '../components/CtaBanner';
import InquirySection from '../components/InquirySection';
import AboutSection from '../components/AboutSection';

export default function HomePage() {

  return (
    <div className="w-full">

      <HeroSection />

      <StatsSection />

      <CourseSection />

      <AboutSection />

      <ProcessSection />

      <FaqSection />

      <CtaBanner />

      <InquirySection />
    </div>
  );
}
