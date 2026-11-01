import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, LogIn, Music } from 'lucide-react';
import logoBlue from '../../assets/logo/logo-blue-cropped.png';
import Button from '../common/Button';

export default function Header({ onOpenLoginModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCoursesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setCoursesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#inquiry' },
  ];

  const courseItems = [
    { name: 'Online Keyboard Classes', href: '#courses', desc: 'Comprehensive one-to-one keyboard lessons' },
    { name: 'Online Guitar Classes', href: '#courses', desc: 'Acoustic & classical guitar instruction' },
    { name: 'Specialized Courses', href: '#specialized-courses', desc: 'Theory, ear training & advanced repertoire' },
    { name: 'Certification', href: '#certification', desc: 'Trinity College London syllabus alignment' },
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border-grey/60 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-5 md:px-4 lg:px-8 sm:py-2.5">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            closeMenus();
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (window.location.hash) {
                window.history.pushState(null, '', '/');
              }
            }
          }}
          className="flex shrink-0 items-center rounded-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue"
          aria-label="Ave Maria School of Music - Home"
        >
          <img
            src={logoBlue}
            alt="Ave Maria School of Music"
            className="block h-12 w-auto max-w-[180px] shrink-0 object-contain sm:h-14 sm:max-w-[210px] lg:h-16 lg:max-w-[240px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Main navigation">
          <a
            href="#hero"
            onClick={(e) => {
              closeMenus();
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (window.location.hash) {
                  window.history.pushState(null, '', '/');
                }
              }
            }}
            className="whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium text-dark-slate transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue lg:px-3 lg:text-sm"
          >
            Home
          </a>

          {/* Courses Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown') {
                  setCoursesDropdownOpen(true);
                }
              }}
              aria-expanded={coursesDropdownOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium text-dark-slate transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue cursor-pointer lg:px-3 lg:text-sm"
            >
              <span>Courses</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180 text-royal-navy' : 'text-slate-grey'
                  }`}
                aria-hidden="true"
              />
            </button>

            {coursesDropdownOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-72 rounded-xl border border-border-grey bg-white p-2 shadow-xl ring-1 ring-black/5"
              >
                {courseItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setCoursesDropdownOpen(false)}
                    className="flex flex-col rounded-lg px-3 py-2 text-sm transition-colors hover:bg-mist-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue"
                  >
                    <span className="font-semibold text-deep-navy">{item.name}</span>
                    <span className="text-xs text-slate-grey">{item.desc}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#about"
            className="whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium text-dark-slate transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue lg:px-3 lg:text-sm"
          >
            About
          </a>

          <a
            href="#process"
            className="whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium text-dark-slate transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue lg:px-3 lg:text-sm"
          >
            Our Process
          </a>

          <a
            href="#inquiry"
            className="whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium text-dark-slate transition-colors hover:text-royal-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue lg:px-3 lg:text-sm"
          >
            Contact
          </a>
        </nav>

        {/* Action Controls & Primary CTA */}
        <div className="hidden items-center gap-1.5 md:flex lg:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenLoginModal}
            className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-xs font-medium text-royal-navy transition-colors hover:bg-mist-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue cursor-pointer lg:gap-1.5 lg:px-3 lg:text-sm"
            aria-label="Student and admin login information"
          >
            <LogIn className="h-4 w-4" aria-hidden="true" />
            <span>Login</span>
          </button>

          <Button href="#inquiry" variant="primary" size="sm" className="whitespace-nowrap text-xs px-2.5 py-1.5 lg:px-3.5 lg:text-sm">
            Book a Free Trial Class
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex items-center justify-center rounded-lg p-2 text-dark-slate hover:bg-mist-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue min-h-[44px] min-w-[44px]"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={mobileNavRef}
          className="border-b border-border-grey bg-white px-4 pt-3 pb-6 md:hidden shadow-lg animate-in fade-in"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  closeMenus();
                  if (link.name === 'Home' && window.location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (window.location.hash) {
                      window.history.pushState(null, '', '/');
                    }
                  }
                }}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-dark-slate hover:bg-mist-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Courses Section */}
            <div className="pt-2 pb-1 border-t border-border-grey/50">
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-grey">
                Courses
              </span>
              <div className="mt-1 space-y-1 pl-2">
                {courseItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenus}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-grey hover:bg-mist-grey hover:text-deep-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue min-h-[44px]"
                  >
                    <Music className="h-4 w-4 text-steel-blue" aria-hidden="true" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="mt-4 pt-4 border-t border-border-grey flex flex-col gap-2.5">
              <Button
                href="#inquiry"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={closeMenus}
              >
                Book a Free Trial Class
              </Button>

              <button
                type="button"
                onClick={() => {
                  closeMenus();
                  onOpenLoginModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-border-grey py-2.5 text-sm font-medium text-royal-navy hover:bg-mist-grey min-h-[44px] cursor-pointer"
              >
                <LogIn className="h-4 w-4" aria-hidden="true" />
                <span>Student / Admin Portal Login</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

