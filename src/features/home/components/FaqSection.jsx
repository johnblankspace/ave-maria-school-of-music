// src/features/home/components/FaqSection.jsx
import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import Button from '../../../components/common/Button';

export default function FaqSection() {
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

    return (
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
                                                    <Minus className="h-4 w-4 transition-transform duration-200" aria-hidden="true" />
                                                ) : (
                                                    <Plus className="h-4 w-4 transition-transform duration-200" aria-hidden="true" />
                                                )}
                                            </span>
                                        </button>

                                        {/* Smooth sliding & fading wrapper container */}
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen
                                                ? 'grid-rows-[1fr] opacity-100'
                                                : 'grid-rows-[0fr] opacity-0'
                                                }`}
                                        >
                                            <div
                                                id={`faq-answer-${idx}`}
                                                role="region"
                                                className="px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-grey border-t border-border-grey/40 overflow-hidden"
                                            >
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}