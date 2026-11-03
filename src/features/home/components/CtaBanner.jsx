// src/features/home/components/CtaBanner.jsx
import { MessageCircle } from 'lucide-react';
import Button from '../../../components/common/Button';

export default function CtaBanner() {
    return (
        <section aria-labelledby="cta-banner-heading" className="bg-white py-12 sm:py-16 overflow-hidden">
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
                            Experience personalized music classes with a Trinity certified teacher. Take the first
                            step in your musical journey!
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Button
                                href="#inquiry"
                                variant="primary"
                                size="md"
                                className="bg-steel-blue text-white font-bold shadow-lg hover:bg-soft-blue active:bg-royal-navy transition-colors duration-200"
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
    );
}