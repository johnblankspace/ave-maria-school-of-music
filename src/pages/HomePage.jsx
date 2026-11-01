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
import heroImage from '../assets/images/hero_image.jpg';
import aboutTutorImage from '../assets/images/about_tutor_image.png';
import Button from '../components/common/Button';

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
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="scroll-mt-28 lg:scroll-mt-32 relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-cloud-white to-white pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Category Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-ice-blue/60 border border-soft-blue/30 px-3.5 py-1 text-xs font-semibold text-royal-navy shadow-2xs">
                <Headphones className="h-3.5 w-3.5 text-steel-blue" aria-hidden="true" />
                <span>Online Piano, Keyboard &amp; Guitar classes</span>
              </div>

              {/* Main Heading */}
              <h1
                id="hero-heading"
                className="mt-3 text-3xl font-extrabold tracking-tight text-dark-slate sm:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.15]"
              >
                Learn Music 🎵
                <span className="block text-royal-navy mt-1">from Ave Maria</span>
              </h1>

              {/* Subheading & Description */}
              <p className="mt-2.5 text-base font-bold text-deep-navy sm:text-lg">
                Personalized online Piano, Keyboard &amp; Guitar classes
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-grey sm:text-base">
                Learn at your own pace with expert guidance, structured lessons and a supportive
                community. Discover the joy of music from the comfort of your home.
              </p>

              {/* Hero CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <Button href="#inquiry" variant="primary" size="md" className="gap-2 px-5 py-2.5 text-sm sm:text-base font-semibold shadow-md rounded-xl">
                  <span>Book a Free Trial Class</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  href="https://wa.me/918301062755"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  className="gap-2 border-2 border-border-grey bg-white hover:bg-mist-grey text-dark-slate px-4 py-2.5 text-sm sm:text-base font-semibold shadow-2xs rounded-xl"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </div>

              {/* Bottom Hero Learning Highlights */}
              <div className="mt-8 pt-5 border-t border-border-grey/50">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ice-blue/60 text-royal-navy">
                      <GraduationCap className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-dark-slate leading-tight">
                      Expert Instructors
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ice-blue/60 text-royal-navy">
                      <Laptop className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-dark-slate leading-tight">
                      Live Online Classes
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ice-blue/60 text-royal-navy">
                      <Music className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-dark-slate leading-tight">
                      Personalized Learning
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ice-blue/60 text-royal-navy">
                      <Users className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-dark-slate leading-tight">
                      For All Age Groups
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative mx-auto max-w-md lg:max-w-none w-full">
                <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white p-1.5 shadow-xl">
                  <img
                    src={heroImage}
                    alt="Arun Antony teaching online piano, keyboard and guitar lessons at studio keyboard"
                    className="h-auto w-full rounded-2xl object-cover"
                    loading="eager"
                  />
                  {/* Floating studio badge matching screenshot */}
                  <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2 text-dark-slate border border-border-grey/50 shadow-md flex items-center gap-2.5">
                    <Music className="h-4 w-4 text-royal-navy shrink-0" aria-hidden="true" />
                    <div className="text-left leading-tight">
                      <span className="block text-[11px] font-bold text-deep-navy">Trinity College London</span>
                      <span className="block text-[10px] text-slate-grey">Certified Teacher</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: BLUE GRADIENT STATISTICS BAR
          ========================================================================= */}
      <section
        aria-label="School Statistics and Key Highlights"
        className="w-full bg-gradient-to-r from-deep-navy via-[#072B66] to-steel-blue py-6 sm:py-8 text-white shadow-inner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
            {/* 1. 15+ Years of Experience */}
            <div className="flex items-center justify-center gap-3.5 px-3 py-2 text-left">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-inner backdrop-blur-xs">
                <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  15+
                </span>
                <span className="block text-xs sm:text-sm font-medium text-white/90">
                  Years of Experience
                </span>
              </div>
            </div>

            {/* 2. 5+ Countries */}
            <div className="flex items-center justify-center gap-3.5 px-3 py-2 text-left">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-inner backdrop-blur-xs">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  5+
                </span>
                <span className="block text-xs sm:text-sm font-medium text-white/90">
                  Countries
                </span>
              </div>
            </div>

            {/* 3. 100+ Students */}
            <div className="flex items-center justify-center gap-3.5 px-3 py-2 text-left">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-inner backdrop-blur-xs">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  100+
                </span>
                <span className="block text-xs sm:text-sm font-medium text-white/90">
                  Students
                </span>
                <span className="block text-[11px] text-white/70">
                  (Online &amp; Offline)
                </span>
              </div>
            </div>

            {/* 4. Certificates Issued */}
            <div className="flex items-center justify-center gap-3.5 px-3 py-2 text-left">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-inner backdrop-blur-xs">
                <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold text-white leading-snug">
                  Certificates Issued
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: COURSES SECTION
          ========================================================================= */}
      <section
        id="courses"
        aria-labelledby="courses-heading"
        className="bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-steel-blue">
                CHOOSE YOUR INSTRUMENT
              </span>
              <h2
                id="courses-heading"
                className="mt-1 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl"
              >
                Our Courses
              </h2>
            </div>
            <a
              href="#specialized-courses"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-navy hover:text-steel-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue rounded-md px-1"
            >
              <span>View All Courses</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Core Offerings Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card 1: Online Keyboard Classes */}
            <div className="flex flex-col justify-between rounded-2xl border border-border-grey/80 bg-cloud-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-steel-blue/40">
              <div>
                {/* Visual Keyboard Banner */}
                <div className="relative mb-6 h-36 w-full overflow-hidden rounded-xl bg-gradient-to-r from-deep-navy via-royal-navy to-steel-blue p-4 flex items-center justify-between text-white shadow-inner">
                  <div>
                    <span className="inline-block rounded-md bg-white/20 px-2.5 py-1 text-xs font-medium tracking-wide backdrop-blur-xs">
                      Keyboards &amp; Piano
                    </span>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                      Online Keyboard Classes
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-ice-blue">
                    <Music className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-grey">
                  Comprehensive one-to-one keyboard training covering finger technique, notation reading,
                  harmony, scales, and performance pieces aligned with Trinity College London grade progressions.
                </p>

                {/* Features Checklist */}
                <ul className="mt-6 space-y-2.5 text-sm text-dark-slate">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                    <span>Trinity College London syllabus alignment</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                    <span>One-to-one online live classes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                    <span>For children and adults of all skill levels</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                    <span>Flexible time slots for overseas students</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                    <span>English and Malayalam instruction</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-border-grey/60">
                <Button href="#inquiry" variant="primary" size="sm" className="w-full sm:w-auto gap-2">
                  <span>Know More</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Card 2: Online Guitar Classes */}
            <div className="flex flex-col justify-between rounded-2xl border border-border-grey/80 bg-cloud-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-steel-blue/40">
              <div>
                {/* Visual Guitar Banner */}
                <div className="relative mb-6 h-36 w-full overflow-hidden rounded-xl bg-gradient-to-r from-royal-navy via-steel-blue to-soft-blue p-4 flex items-center justify-between text-white shadow-inner">
                  <div>
                    <span className="inline-block rounded-md bg-white/20 px-2.5 py-1 text-xs font-medium tracking-wide backdrop-blur-xs">
                      Acoustic &amp; Classical
                    </span>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                      Online Guitar Classes
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-ice-blue">
                    <Music className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-grey">
                  Acoustic and classical guitar instruction developing proper posture, fingerpicking,
                  strumming rhythms, fretboard navigation, chord transitions, and graded song repertoire.
                </p>

                {/* Features Checklist */}
                <ul className="mt-6 space-y-2.5 text-sm text-dark-slate">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                    <span>Trinity College London syllabus alignment</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                    <span>One-to-one online live classes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                    <span>For children and adults of all skill levels</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                    <span>Flexible time slots for overseas students</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                    <span>English and Malayalam instruction</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-border-grey/60">
                <Button href="#inquiry" variant="primary" size="sm" className="w-full sm:w-auto gap-2">
                  <span>Know More</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary Cards: Specialized Courses & Certifications */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Specialized Courses Card */}
            <div
              id="specialized-courses"
              className="rounded-2xl border border-border-grey/70 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="inline-block rounded-full bg-ice-blue/70 px-3 py-1 text-xs font-semibold text-royal-navy">
                  AVAILABLE ON INQUIRY
                </span>
                <h3 className="mt-3 text-lg font-bold text-deep-navy">Specialized Courses</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-grey">
                  Malayalam Holy Mass songs, church hymns, devotionals, and customized repertoire
                  arrangements available upon inquiry to enrich your worship and playing style.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-grey/50">
                <Button href="#inquiry" variant="ghost" size="sm" className="gap-1.5 px-0 text-royal-navy font-semibold hover:bg-transparent hover:text-steel-blue">
                  <span>Notify Me</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Certifications Card */}
            <div
              id="certification"
              className="rounded-2xl border border-border-grey/70 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="inline-block rounded-full bg-mist-grey px-3 py-1 text-xs font-semibold text-slate-grey">
                  INTERNAL RECOGNITION
                </span>
                <h3 className="mt-3 text-lg font-bold text-deep-navy">Certifications</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-grey">
                  Digital completion certificates issued by the school after completing each book and grade level,
                  reflecting curriculum milestones and preparation for future graded exams.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-grey/50">
                <Button href="#process" variant="ghost" size="sm" className="gap-1.5 px-0 text-royal-navy font-semibold hover:bg-transparent hover:text-steel-blue">
                  <span>Learn More</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ABOUT THE TUTOR
          ========================================================================= */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="bg-cloud-white py-16 sm:py-20 lg:py-24 border-t border-border-grey/60"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Tutor Image Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="overflow-hidden rounded-3xl border border-border-grey/70 bg-white p-2.5 shadow-xl">
                  <img
                    src={aboutTutorImage}
                    alt="Arun Antony - Music Instructor at Ave Maria School of Music"
                    className="h-auto w-full rounded-2xl object-cover"
                    loading="eager"
                  />
                  {/* Verified Badge */}
                  <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-deep-navy px-4 py-3 text-white shadow-xs">
                    <Award className="h-5 w-5 text-amber-300 shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">
                      Trinity College London Certificate Holder
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tutor Details Column */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-steel-blue">
                ABOUT THE TUTOR
              </span>
              <h2
                id="about-heading"
                className="mt-1 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl"
              >
                Meet Arun Antony
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-grey sm:text-lg">
                With over 15 years of teaching experience, Arun Antony is a Trinity College London
                certificate holder, specialising in Piano, Keyboard, and Guitar. He teaches students of
                all ages with a friendly, patient, and encouraging approach, focusing on strong
                fundamentals, practical playing, and confidence.
              </p>

              <div className="mt-6">
                <Button href="#inquiry" variant="primary" size="md" className="gap-2">
                  <span>Know More About Arun</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>

              {/* Tutor Quote Card */}
              <div className="mt-8 rounded-2xl border border-border-grey/70 bg-white p-6 shadow-xs relative">
                <span className="text-4xl text-soft-blue leading-none select-none font-serif block -mb-2" aria-hidden="true">
                  “
                </span>
                <p className="text-sm sm:text-base italic text-dark-slate">
                  Music is not just a skill. It&apos;s a way to express, worship and bring joy to life.
                </p>
                <span className="block mt-3 text-xs sm:text-sm font-semibold text-royal-navy">
                  — Arun Antony
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR PROCESS
          ========================================================================= */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className="bg-white py-16 sm:py-20 lg:py-24 border-t border-border-grey/60"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-steel-blue">
              SIMPLE STEPS TO START YOUR MUSIC JOURNEY
            </span>
            <h2
              id="process-heading"
              className="mt-1 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl"
            >
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="relative rounded-2xl border border-border-grey/70 bg-cloud-white p-6 shadow-xs flex flex-col justify-between transition-all hover:shadow-md hover:border-steel-blue/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal-navy text-sm font-bold text-white shadow-xs">
                        {step.num}
                      </span>
                      <IconComp className="h-5 w-5 text-steel-blue" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-grey">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-cloud-white py-16 sm:py-20 lg:py-24 border-t border-border-grey/60"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Heading and Contact CTA */}
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-steel-blue">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2
                id="faq-heading"
                className="mt-1 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl"
              >
                Got Questions?
                <span className="block text-royal-navy">We&apos;ve Got Answers.</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-grey sm:text-base">
                Find answers to common questions about our one-to-one online classes, timings, instruments, and scheduling.
              </p>

              <div className="mt-6">
                <Button
                  href="https://wa.me/918301062755"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="gap-2 border-border-grey bg-white text-dark-slate hover:bg-mist-grey"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                  <span>Ask a Question on WhatsApp</span>
                </Button>
              </div>
            </div>

            {/* Right Column: Interactive Accordion */}
            <div className="lg:col-span-7">
              <div className="space-y-3.5">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={faq.q}
                      className="rounded-xl border border-border-grey/70 bg-white shadow-xs transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${idx}`}
                        className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-deep-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue rounded-xl cursor-pointer"
                      >
                        <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mist-grey text-royal-navy">
                          {isOpen ? (
                            <Minus className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            <Plus className="h-4 w-4" aria-hidden="true" />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          id={`faq-answer-${idx}`}
                          role="region"
                          className="px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-grey border-t border-border-grey/40 animate-in fade-in duration-200"
                        >
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FINAL CALL TO ACTION BANNER
          ========================================================================= */}
      <section
        aria-labelledby="cta-banner-heading"
        className="bg-white py-12 sm:py-16 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-deep-navy via-royal-navy to-deep-navy px-6 py-12 sm:px-12 sm:py-16 text-center text-white shadow-2xl">
            {/* Background Decorative Rings */}
            <div
              className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-steel-blue/20 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-ice-blue/15 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-3xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ice-blue">
                READY TO START?
              </span>
              <h2
                id="cta-banner-heading"
                className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
              >
                Book Your Free Trial Class Today
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-mist-grey/90 sm:text-base">
                Experience personalized music classes with a Trinity certified teacher.
                Take the first step in your musical journey!
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="#inquiry"
                  variant="primary"
                  size="md"
                  className="bg-white text-royal-navy hover:bg-mist-grey active:bg-ice-blue font-bold shadow-lg"
                >
                  Book a Free Trial Class
                </Button>
                <Button
                  href="https://wa.me/918301062755"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4 mr-1.5" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
