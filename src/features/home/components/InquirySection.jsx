// src/features/home/components/InquirySection.jsx
import Button from '../../../components/common/Button';

export default function InquirySection() {
    return (
        <section
            id="inquiry"
            aria-labelledby="inquiry-heading"
            className="bg-linear-to-b from-cloud-white to-mist-grey/60 py-16 sm:py-20 border-t border-border-grey/60"
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
                        using React Hook Form and Zod is scheduled for a later phase. In the meantime, you can connect
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
    );
}