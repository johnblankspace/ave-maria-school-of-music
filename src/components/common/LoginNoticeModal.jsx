import { useEffect, useRef } from 'react';
import { X, Lock, Sparkles, MessageCircle } from 'lucide-react';
import Button from './Button';

/**
 * Interim modal dialog explaining that Student and Admin authentication
 * will be released in later project phases (Phases 6–8).
 */
export default function LoginNoticeModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-navy/70 backdrop-blur-sm animate-in fade-in"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/10 sm:p-8"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 rounded-lg p-2 text-slate-grey hover:bg-mist-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mist-grey text-royal-navy mb-4">
            <Lock className="h-7 w-7 text-royal-navy" aria-hidden="true" />
          </div>

          <h2 id="login-modal-title" className="text-xl font-bold text-deep-navy">
            Portal Access Update
          </h2>

          <div className="mt-3 space-y-3 text-sm text-slate-grey text-left">
            <p>
              The <strong>Student Portal</strong> and <strong>Admin Dashboard</strong> are scheduled
              for release in upcoming development phases.
            </p>
            <div className="rounded-lg bg-mist-grey/70 p-3 text-xs space-y-1.5 border border-border-grey/50">
              <div className="flex items-center gap-1.5 font-semibold text-deep-navy">
                <Sparkles className="h-4 w-4 text-steel-blue" aria-hidden="true" />
                <span>Enrolled Students:</span>
              </div>
              <p>
                Once one month&apos;s tuition is received in advance, your account activation link will be
                sent directly to your registered email address by the administrator.
              </p>
            </div>
            <p className="text-xs text-slate-grey">
              For scheduling questions or immediate assistance, contact tutor Arun Antony directly
              via WhatsApp.
            </p>
          </div>

          <div className="mt-6 flex w-full flex-col gap-2.5 sm:flex-row">
            <Button
              href="https://wa.me/918301062755"
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              className="w-full flex-1 gap-2"
              onClick={onClose}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>WhatsApp Admin</span>
            </Button>
            <Button
              variant="outline"
              size="md"
              className="w-full flex-1"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

