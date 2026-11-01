import logoBlue from '../../assets/logo/logo-blue.png';
import { MessageCircle, MapPin, ExternalLink } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

// Inline SVG for YouTube
function YoutubeIcon({ className = 'h-5 w-5', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// Inline SVG for Facebook
function FacebookIcon({ className = 'h-5 w-5', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer({ onOpenLoginModal }) {
  return (
    <footer className="border-t border-border-grey/70 bg-white text-dark-slate">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Introduction */}
          <div className="space-y-4">
            <a href="/" className="inline-block" aria-label="Ave Maria School of Music - Home">
              <img
                src={logoBlue}
                alt="Ave Maria School of Music"
                className="h-14 w-14 shrink-0 aspect-square object-contain translate-y-[13%]"
              />
            </a>
            <p className="text-sm leading-relaxed text-slate-grey">
              Online Keyboard &amp; Guitar classes for children and adults. Trinity College London
              syllabus with personalized guidance, flexible timings, and a supportive learning environment.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/918301062755"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Ave Maria School of Music on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-mist-grey text-royal-navy transition-colors hover:bg-ice-blue hover:text-royal-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@avemariaschoolofmusic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ave Maria School of Music on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-mist-grey text-royal-navy transition-colors hover:bg-ice-blue hover:text-royal-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1E1CTZ18Rc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ave Maria School of Music on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-mist-grey text-royal-navy transition-colors hover:bg-ice-blue hover:text-royal-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-royal-navy">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-grey">
              <li>
                <a
                  href="#hero"
                  className="transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-steel-blue"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-steel-blue"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-steel-blue"
                >
                  About Tutor
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-steel-blue"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#specialized-courses"
                  className="transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-steel-blue"
                >
                  Specialized Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Portal Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-royal-navy">
              Support
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-grey">
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-steel-blue"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#inquiry"
                  className="transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-steel-blue"
                >
                  Contact &amp; Trial Booking
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLoginModal}
                  className="text-left transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-steel-blue cursor-pointer"
                >
                  Student / Admin Login
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/918301062755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-steel-blue"
                >
                  <span>Direct Help on WhatsApp</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-royal-navy">
              Contact Us
            </h3>
            <div className="mt-4 space-y-3.5 text-sm text-slate-grey">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="h-5 w-5 text-steel-blue shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs font-medium text-slate-grey">Chat on WhatsApp</span>
                  <a
                    href="https://wa.me/918301062755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-deep-navy hover:text-royal-navy hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-steel-blue"
                  >
                    +91 83010 62755
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-steel-blue shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs font-medium text-slate-grey">Class Format</span>
                  <span className="font-medium text-deep-navy">Online Classes (Global Time Zones via Zoom)</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center rounded-lg bg-royal-navy px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-steel-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue min-h-[44px]"
                >
                  Book a Free Trial Class
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 border-t border-border-grey/70 pt-8 text-xs leading-relaxed text-slate-grey">
          <p className="mb-3 max-w-4xl">
            <strong>Syllabus Alignment Notice:</strong> Lessons are structured following guidance
            from the Trinity College London syllabus to support systematic musical development.
            School-issued digital certificates represent completion of internal school learning
            milestones and do not imply official Trinity College London accreditation or
            endorsement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>© {CURRENT_YEAR} Ave Maria School of Music. All rights reserved.</p>
            <p className="text-slate-grey/80">Personalized one-to-one online music education</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
