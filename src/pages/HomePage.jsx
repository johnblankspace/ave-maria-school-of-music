import { useState } from 'react';
import {
  Headphones,
  ArrowRight,
  GraduationCap,
  Laptop,
  Music,
  User,
  Users,
  CheckCircle2,
  Award,
  Trophy,
  Globe,
  Plus,
  Minus,
  MessageCircle,
  Calendar,
  BookOpen,
} from 'lucide-react';

import HeroSection from '../features/home/components/HeroSection';
import StatsSection from '../features/home/components/StatsSection';
import CourseSection from '../features/home/components/CourseSection';
import ProcessSection from '../features/home/components/ProcessSection';
import FaqSection from '../features/home/components/FaqSection';
import CtaBanner from '../features/home/components/CtaBanner';
import InquirySection from '../features/home/components/InquirySection';

import aboutTutorImage from '../assets/images/about_tutor_image.webp';
import Button from '../components/common/Button';
import AboutSection from '../features/home/components/AboutSection';

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
