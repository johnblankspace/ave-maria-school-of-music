import { ArrowRight } from "lucide-react";
import Button from "../../../components/ui/Button";
import CourseCard from "./CourseCard";

export default function CourseSection() {
    const mainCourses = [
        {
            id: 'keyboard',
            badge: 'Keyboards & Piano',
            title: 'Online Keyboard Classes',
            gradient: 'from-deep-navy via-royal-navy to-steel-blue',
            description:
                'Comprehensive one-to-one keyboard training covering finger technique, notation reading, harmony, scales, and performance pieces aligned with Trinity College London grade progressions.',
            features: [
                'Trinity College London syllabus alignment',
                'One-to-one online live classes',
                'For children and adults of all skill levels',
                'Flexible time slots for overseas students',
                'English and Malayalam instruction',
            ],
        },
        {
            id: 'guitar',
            badge: 'Acoustic & Classical',
            title: 'Online Guitar Classes',
            gradient: 'from-royal-navy via-steel-blue to-soft-blue',
            description:
                'Acoustic and classical guitar instruction developing proper posture, fingerpicking, strumming rhythms, fretboard navigation, chord transitions, and graded song repertoire.',
            features: [
                'Trinity College London syllabus alignment',
                'One-to-one online live classes',
                'For children and adults of all skill levels',
                'Flexible time slots for overseas students',
                'English and Malayalam instruction',
            ],
        },
    ];

    return (
        <section id="courses" aria-labelledby="courses-heading" className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-steel-blue">
                            CHOOSE YOUR INSTRUMENT
                        </span>
                        <h2
                            id="courses-heading"
                            className="mt-1 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl"
                        >
                            Our Courses
                        </h2>
                    </div>
                    <a
                        href="#specialized-courses"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-navy hover:text-steel-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue rounded-md px-1"
                    >
                        <span>View All Courses</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>

                {/* Core Offerings Grid using Reusable CourseCard */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {mainCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                {/* Secondary Cards */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div
                        id="specialized-courses"
                        className="rounded-2xl border border-border-grey/70 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between"
                    >
                        <div>
                            <span className="inline-block rounded-full bg-ice-blue/70 px-3 py-1 text-xs font-semibold text-royal-navy">
                                AVAILABLE ON INQUIRY
                            </span>
                            <h3 className="mt-3 text-lg font-bold text-deep-navy">Specialized Courses</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-grey">
                                Malayalam Holy Mass songs, church hymns, devotionals, and customized repertoire
                                arrangements available upon inquiry to enrich your worship and playing style.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-border-grey/50">
                            <Button
                                href="#inquiry"
                                variant="ghost"
                                size="sm"
                                className="gap-1.5 px-0 text-royal-navy font-semibold hover:bg-transparent hover:text-steel-blue"
                            >
                                <span>Notify Me</span>
                                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </Button>
                        </div>
                    </div>

                    <div
                        id="certification"
                        className="rounded-2xl border border-border-grey/70 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between"
                    >
                        <div>
                            <span className="inline-block rounded-full bg-mist-grey px-3 py-1 text-xs font-semibold text-slate-grey">
                                INTERNAL RECOGNITION
                            </span>
                            <h3 className="mt-3 text-lg font-bold text-deep-navy">Certifications</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-grey">
                                Digital completion certificates issued by the school after completing each book and
                                grade level, reflecting curriculum milestones and preparation for future graded exams.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-border-grey/50">
                            <Button
                                href="#process"
                                variant="ghost"
                                size="sm"
                                className="gap-1.5 px-0 text-royal-navy font-semibold hover:bg-transparent hover:text-steel-blue"
                            >
                                <span>Learn More</span>
                                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}