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

import aboutTutorImage from '../assets/images/about_tutor_image.webp';
import Button from '../components/common/Button';
import AboutSection from '../features/home/components/AboutSection';

export default function HomePage() {
  // Accordion state for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  const faqs = [
    {
      q: 'Are the classes one-to-one?',
      a: 'Yes, all keyboard and guitar lessons are conducted as individual one-to-one sessions between the tutor and the student, ensuring tailored instruction at your own pace.',
    },
    {
      q: 'Which platform is used for classes?',
      a: 'Classes are conducted live over Zoom. Secure class links become accessible prior to the scheduled start time, enabling seamless international learning.',
    },
    {
      q: 'Do students need their own instruments?',
      a: 'Yes, students must have their own Keyboard or Guitar at home for lessons and regular practice. The tutor can provide direct advice on instrument selection upon inquiry.',
    },
    {
      q: 'Are flexible timings available for overseas students?',
      a: 'Yes. Lesson timings are arranged directly between the tutor and the student/parent to accommodate different time zones, including Australia, the UK, the Gulf, and North America.',
    },
    {
      q: 'What happens if a class is missed?',
      a: 'Makeup lessons are agreed directly between the tutor and the student/parent on a mutually convenient date, and updated accordingly in the schedule.',
    },
  ];

  const processSteps = [
    {
      num: '1',
      title: 'Attend a Free Trial Class',
      desc: 'Experience our teaching style, meet the instructor, and discuss your musical goals.',
      icon: Calendar,
    },
    {
      num: '2',
      title: 'Enrol in a Course',
      desc: 'Choose your instrument (Keyboard or Guitar) and establish convenient weekly time slots.',
      icon: BookOpen,
    },
    {
      num: '3',
      title: 'Get Trained',
      desc: 'Learn step by step with personalized 1-on-1 guidance aligned with the Trinity syllabus.',
      icon: GraduationCap,
    },
    {
      num: '4',
      title: 'Receive Certifications',
      desc: 'Earn school completion certificates as you master books and milestone performance levels.',
      icon: Award,
    },
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 2: HERO SECTION
          ========================================================================= */}
      <HeroSection />

      {/* =========================================================================
          SECTION 3: BLUE GRADIENT STATISTICS BAR
          ========================================================================= */}

      <StatsSection />

      {/* =========================================================================
          SECTION 4: COURSES SECTION
          ========================================================================= */}
      <CourseSection />

      {/* =========================================================================
          SECTION 5: ABOUT THE TUTOR
          ========================================================================= */}

      <AboutSection />

      {/* =========================================================================
          SECTION 6: OUR PROCESS
          ========================================================================= */}

      <ProcessSection />

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <FaqSection />

      {/* =========================================================================
          SECTION 10: FINAL CALL TO ACTION BANNER
          ========================================================================= */}
      <CtaBanner />

      {/* =========================================================================
          SECTION 11: SINGLE SHARED FREE TRIAL / INQUIRY ANCHOR (FR-055)
          ========================================================================= */}
      <section
        id="inquiry"
        aria-labelledby="inquiry-heading"
        className="bg-gradient-to-b from-cloud-white to-mist-grey/60 py-16 sm:py-20 border-t border-border-grey/60"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-royal-navy">
            BEGIN YOUR MUSICAL JOURNEY
          </span>
          <h2
            id="inquiry-heading"
            className="mt-1 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl"
          >
            Book a Free Trial Class
          </h2>
          <p className="mt-3 text-sm text-slate-grey sm:text-base">
            Contact us for all lesson inquiries and trial bookings. One shared form serves both
            general questions and free trial requests.
          </p>

          <div className="mt-8 rounded-2xl border border-border-grey bg-white p-6 sm:p-10 shadow-lg text-left">
            <div className="rounded-xl bg-ice-blue/40 border border-ice-blue/80 p-4 text-xs sm:text-sm text-deep-navy mb-6">
              <strong>Trial Booking Form Anchor (`FR-055`):</strong> Full interactive inquiry validation
              using React Hook Form and Zod is scheduled for Phase 3. In the meantime, you can connect
              directly with tutor Arun Antony via WhatsApp to arrange your free trial session.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-mist-grey/70 border border-border-grey/50">
              <div>
                <span className="block font-semibold text-deep-navy">Prefer to chat on WhatsApp?</span>
                <span className="text-xs text-slate-grey">Direct tutor contact: +91 83010 62755</span>
              </div>
              <Button
                href="https://wa.me/918301062755"
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="sm"
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
