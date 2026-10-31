import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';
import LoginNoticeModal from '../common/LoginNoticeModal';

export default function Layout({ children }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-cloud-white font-sans text-dark-slate antialiased">
      {/* Skip to Main Content Link (Accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-royal-navy focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-ice-blue"
      >
        Skip to main content
      </a>

      {/* Main Header */}
      <Header onOpenLoginModal={() => setIsLoginModalOpen(true)} />

      {/* Page Content Container */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {children}
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Interim Login Notice Modal */}
      <LoginNoticeModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}

