import { MessageCircle } from 'lucide-react';

/**
 * Floating WhatsApp contact button
 * Contact Number: +91 83010 62755
 */
export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/918301062755';

  return (
    <aside aria-label="Direct messaging contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ave Maria School of Music on WhatsApp at +91 83010 62755"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#20ba59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 min-h-[48px] min-w-[48px]"
      >
        <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}

