// src/features/home/components/ProcessSection.jsx
import { Calendar, BookOpen, GraduationCap, Award } from 'lucide-react';

export default function ProcessSection() {
    const processSteps = [
        {
            num: '1',
            title: 'Attend a Free Trial Class',
            desc: 'Experience our teaching style, meet the instructor, and discuss your musical goals.',
            icon: Calendar,
        },
        {
            num: '2',
            title: 'Enrol in a Course',
            desc: 'Choose your instrument (Keyboard or Guitar) and establish convenient weekly time slots.',
            icon: BookOpen,
        },
        {
            num: '3',
            title: 'Get Trained',
            desc: 'Learn step by step with personalized 1-on-1 guidance aligned with the Trinity syllabus.',
            icon: GraduationCap,
        },
        {
            num: '4',
            title: 'Receive Certifications',
            desc: 'Earn school completion certificates as you master books and milestone performance levels.',
            icon: Award,
        },
    ];

    return (
        <section
            id="process"
            aria-labelledby="process-heading"
            className="bg-white py-16 sm:py-20 lg:py-24 border-t border-border-grey/60"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-semibold uppercase tracking-wider text-steel-blue">
                        SIMPLE STEPS TO START YOUR MUSIC JOURNEY
                    </span>
                    <h2
                        id="process-heading"
                        className="mt-1 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl"
                    >
                        Our Process
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((step) => {
                        const IconComp = step.icon;
                        return (
                            <div
                                key={step.num}
                                className="relative rounded-2xl border border-border-grey/70 bg-cloud-white p-6 shadow-xs flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-lg hover:border-steel-blue/60"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal-navy text-sm font-bold text-white shadow-xs">
                                            {step.num}
                                        </span>
                                        <IconComp className="h-5 w-5 text-steel-blue" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-lg font-bold text-deep-navy">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-grey">{step.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}