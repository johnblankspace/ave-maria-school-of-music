import { Music, CheckCircle2, Award, HelpCircle } from 'lucide-react';
import Button from '../components/common/Button';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Foundation Section */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-gradient-to-b from-mist-grey/50 via-cloud-white to-white py-16 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Live Classes Banner */}
            <div className="inline-flex items-center gap-2 rounded-full bg-ice-blue/60 px-4 py-1.5 text-xs font-semibold text-royal-navy sm:text-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>Live Keyboard &amp; Guitar classes</span>
            </div>

            <h1
              id="hero-heading"
              className="mt-6 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-5xl lg:text-6xl"
            >
              Learn Music from <span className="text-royal-navy">Ave Maria</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-grey sm:text-lg sm:leading-8">
              One-to-one online music lessons for children and adults, with flexible scheduling,
              English and Malayalam instruction, and guidance aligned with the Trinity College London syllabus.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="#inquiry" variant="primary" size="lg" className="w-full sm:w-auto">
                Book a Free Trial Class
              </Button>
              <Button
                href="https://wa.me/918301062755"
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Courses Anchor & Overview Section */}
      <section
        id="courses"
        aria-labelledby="courses-heading"
        className="bg-white py-16 sm:py-20 border-t border-border-grey/40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-steel-blue sm:text-sm">
              Our Core Offerings
            </span>
            <h2
              id="courses-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-deep-navy sm:text-4xl"
            >
              One-to-One Online Lessons
            </h2>
            <p className="mt-3 text-sm text-slate-grey sm:text-base">
              Personalised live music education tailored to each student&apos;s level and pace.
              Students provide their own instrument, with direct guidance from the tutor.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Keyboard Card */}
            <div className="rounded-2xl border border-border-grey bg-cloud-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ice-blue text-royal-navy">
                <Music className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-deep-navy">Online Keyboard Classes</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-grey">
                Comprehensive keyboard training covering finger technique, notation reading, harmony,
                scales, and performance pieces aligned with Trinity grade progressions.
              </p>
              <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-grey">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                  <span>Beginner to advanced graded curriculum</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                  <span>Four 30–45 min classes per month</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-border-grey/60">
                <Button href="#inquiry" variant="outline" size="sm" className="w-full sm:w-auto">
                  Enquire for Keyboard
                </Button>
              </div>
            </div>

            {/* Guitar Card */}
            <div className="rounded-2xl border border-border-grey bg-cloud-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ice-blue text-royal-navy">
                <Music className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-deep-navy">Online Guitar Classes</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-grey">
                Acoustic and classical guitar lessons developing strumming patterns, fretboard navigation,
                chord transitions, posture, rhythm, and song repertoire.
              </p>
              <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-grey">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                  <span>Customised pace for children and adults</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                  <span>Four 30–45 min classes per month</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-border-grey/60">
                <Button href="#inquiry" variant="outline" size="sm" className="w-full sm:w-auto">
                  Enquire for Guitar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Tutor Anchor Section */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="bg-cloud-white py-16 sm:py-20 border-t border-border-grey/40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-steel-blue sm:text-sm">
              Meet the Instructor
            </span>
            <h2
              id="about-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-deep-navy sm:text-4xl"
            >
              Dedicated One-to-One Tutoring
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-grey sm:text-base">
              Learn directly with instructor <strong>Arun Antony</strong>, offering structured guidance,
              patient instruction, and syllabus alignment for students in India and worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Process Anchor Section */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className="bg-white py-16 sm:py-20 border-t border-border-grey/40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-steel-blue sm:text-sm">
              Learning Journey
            </span>
            <h2
              id="process-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-deep-navy sm:text-4xl"
            >
              How It Works
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border-grey/60 bg-cloud-white p-5">
              <div className="text-2xl font-bold text-royal-navy">01</div>
              <h3 className="mt-2 font-semibold text-deep-navy">Submit Inquiry</h3>
              <p className="mt-1 text-xs text-slate-grey">
                Fill the free trial form below with student details and preferred time.
              </p>
            </div>
            <div className="rounded-xl border border-border-grey/60 bg-cloud-white p-5">
              <div className="text-2xl font-bold text-royal-navy">02</div>
              <h3 className="mt-2 font-semibold text-deep-navy">Free Trial Class</h3>
              <p className="mt-1 text-xs text-slate-grey">
                Connect on WhatsApp to confirm timing and attend a one-to-one Zoom session.
              </p>
            </div>
            <div className="rounded-xl border border-border-grey/60 bg-cloud-white p-5">
              <div className="text-2xl font-bold text-royal-navy">03</div>
              <h3 className="mt-2 font-semibold text-deep-navy">Enrollment &amp; Setup</h3>
              <p className="mt-1 text-xs text-slate-grey">
                Pay one month advance tuition to establish your monthly schedule of 4 classes.
              </p>
            </div>
            <div className="rounded-xl border border-border-grey/60 bg-cloud-white p-5">
              <div className="text-2xl font-bold text-royal-navy">04</div>
              <h3 className="mt-2 font-semibold text-deep-navy">Regular Learning</h3>
              <p className="mt-1 text-xs text-slate-grey">
                Weekly classes, practical guidance, and milestone-based progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Specialized Courses & Certification Anchor Section */}
      <section
        id="certification"
        aria-labelledby="certification-heading"
        className="bg-cloud-white py-16 sm:py-20 border-t border-border-grey/40"
      >
        <div id="specialized-courses" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-steel-blue uppercase tracking-wider">
              <Award className="h-4 w-4" aria-hidden="true" />
              <span>Syllabus &amp; Recognition</span>
            </div>
            <h2
              id="certification-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-deep-navy sm:text-4xl"
            >
              Structured Music Curriculum
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-grey sm:text-base">
              Instruction aligns with the internationally recognised <strong>Trinity College London</strong> syllabus.
              School-issued completion certificates recognise internal milestones and practical exam performance,
              preparing students for future graded evaluations.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Anchor Section */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-white py-16 sm:py-20 border-t border-border-grey/40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-steel-blue uppercase tracking-wider">
              <HelpCircle className="h-4 w-4" aria-hidden="true" />
              <span>Got Questions?</span>
            </div>
            <h2
              id="faq-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-deep-navy sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            <div className="rounded-xl border border-border-grey bg-cloud-white p-5">
              <h3 className="font-semibold text-deep-navy">Do students need their own musical instrument?</h3>
              <p className="mt-2 text-sm text-slate-grey">
                Yes, students must have their own Keyboard or Guitar for practice and online lessons.
                The tutor can provide direct advice on instrument selection upon inquiry.
              </p>
            </div>

            <div className="rounded-xl border border-border-grey bg-cloud-white p-5">
              <h3 className="font-semibold text-deep-navy">How many classes are included each month?</h3>
              <p className="mt-2 text-sm text-slate-grey">
                Students receive four one-to-one classes per month, with each session lasting 30 to 45 minutes.
              </p>
            </div>

            <div className="rounded-xl border border-border-grey bg-cloud-white p-5">
              <h3 className="font-semibold text-deep-navy">Are overseas time zones supported?</h3>
              <p className="mt-2 text-sm text-slate-grey">
                Yes. Flexible scheduling is arranged directly between the tutor and the student/parent,
                accommodating families in Australia, the UK, Gulf countries, and other regions.
              </p>
            </div>

            <div className="rounded-xl border border-border-grey bg-cloud-white p-5">
              <h3 className="font-semibold text-deep-navy">How are makeup classes handled?</h3>
              <p className="mt-2 text-sm text-slate-grey">
                Makeup lessons are agreed directly between the tutor and the student/parent on a mutually
                convenient date, and the arrangement is updated in the dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Single Shared Free Trial / Inquiry Anchor Section (FR-055) */}
      <section
        id="inquiry"
        aria-labelledby="inquiry-heading"
        className="bg-gradient-to-b from-cloud-white to-mist-grey py-16 sm:py-24 border-t border-border-grey/60"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-royal-navy sm:text-sm">
            Begin Your Musical Journey
          </span>
          <h2
            id="inquiry-heading"
            className="mt-2 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl"
          >
            Book a Free Trial Class
          </h2>
          <p className="mt-3 text-sm text-slate-grey sm:text-base">
            Contact us for all lesson inquiries and trial bookings. One shared form serves both
            general questions and free trial requests.
          </p>

          <div className="mt-8 rounded-2xl border border-border-grey bg-white p-6 sm:p-10 shadow-lg text-left">
            <div className="rounded-lg bg-ice-blue/40 border border-ice-blue p-4 text-xs sm:text-sm text-deep-navy mb-6">
              <strong>Trial Booking Form Anchor (`FR-055`):</strong> Full interactive validation
              using React Hook Form and Zod will be wired in Phase 3. In the meantime, you can connect
              directly with tutor Arun Antony via WhatsApp.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-mist-grey">
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
