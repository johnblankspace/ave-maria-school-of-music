import logoWhite from '../../assets/logo/logo-white.png';
import { MessageCircle, MapPin, Music } from 'lucide-react';

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

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-mist-grey border-t border-royal-navy">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Introduction */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoWhite}
                alt="Ave Maria School of Music"
                className="h-10 w-auto object-contain sm:h-12"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">Ave Maria</span>
                <span className="-mt-1 text-xs font-medium uppercase tracking-wider text-soft-blue">
                  School of Music
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-mist-grey/80">
              One-to-one online Keyboard and Guitar lessons for children and adults. Personalized
              instruction with flexible scheduling for students in India and worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/918301062755"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Ave Maria School of Music on WhatsApp"
                className="rounded-lg bg-royal-navy p-2.5 text-white transition-colors hover:bg-steel-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@avemariaschoolofmusic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ave Maria School of Music on YouTube"
                className="rounded-lg bg-royal-navy p-2.5 text-white transition-colors hover:bg-steel-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1E1CTZ18Rc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ave Maria School of Music on Facebook"
                className="rounded-lg bg-royal-navy p-2.5 text-white transition-colors hover:bg-steel-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-ice-blue uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#hero"
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ice-blue"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ice-blue"
                >
                  Keyboard & Guitar Courses
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ice-blue"
                >
                  About Tutor & Performance
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ice-blue"
                >
                  Our Teaching Process
                </a>
              </li>
              <li>
                <a
                  href="#certification"
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ice-blue"
                >
                  Syllabus & Certification
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ice-blue"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Courses & Learning Format */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-ice-blue uppercase">
              Online Learning
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Music className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                <span>One-to-One Keyboard Classes</span>
              </li>
              <li className="flex items-center gap-2">
                <Music className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                <span>One-to-One Guitar Classes</span>
              </li>
              <li className="flex items-center gap-2">
                <Music className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                <span>4 Classes / Student / Month</span>
              </li>
              <li className="flex items-center gap-2">
                <Music className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                <span>30–45 Minutes Per Session</span>
              </li>
              <li className="flex items-center gap-2">
                <Music className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                <span>English & Malayalam Guidance</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-ice-blue uppercase">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="h-5 w-5 text-steel-blue shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-soft-blue">WhatsApp Support</span>
                  <a
                    href="https://wa.me/918301062755"
                    className="font-medium text-white hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ice-blue"
                  >
                    +91 83010 62755
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-steel-blue shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-soft-blue">Class Format</span>
                  <span className="text-white">Online via Zoom worldwide</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center rounded-lg bg-steel-blue px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-soft-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue min-h-[44px]"
                >
                  Book Free Trial Class
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 border-t border-royal-navy pt-8 text-xs leading-relaxed text-mist-grey/60">
          <p className="mb-3">
            <strong>Syllabus Alignment Notice:</strong> Lessons are structured following guidance
            from the Trinity College London syllabus to support structured musical development.
            School-issued digital certificates represent completion of internal school learning
            milestones and do not constitute official Trinity College London accreditation or
            diploma certification.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {CURRENT_YEAR} Ave Maria School of Music. All rights reserved.</p>
            <p className="text-mist-grey/40">Domain: avemariaschoolofmusic.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
