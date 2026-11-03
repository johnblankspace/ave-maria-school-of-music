import { Award, ArrowRight } from "lucide-react";
import aboutTutorImage from '../../../assets/images/about_tutor_image.webp';
import Button from "../../../components/common/Button";

export default function AboutSection() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="bg-cloud-white py-16 sm:py-20 lg:py-24 border-t border-border-grey/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
                    {/* Tutor Image Column */}
                    <div className="lg:col-span-5">
                        <div className="relative mx-auto max-w-sm lg:max-w-none">
                            <div className="overflow-hidden rounded-3xl border border-border-grey/70 bg-white p-2.5 shadow-xl">
                                <img
                                    src={aboutTutorImage}
                                    alt="Arun Antony - Music Instructor at Ave Maria School of Music"
                                    className="h-auto w-full rounded-2xl object-cover"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tutor Details Column */}
                    <div className="lg:col-span-7">
                        <span className="text-xs font-semibold uppercase tracking-wider text-steel-blue">
                            ABOUT THE TUTOR
                        </span>
                        <h2
                            id="about-heading"
                            className="mt-1 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl"
                        >
                            Meet Arun Antony
                        </h2>

                        <p className="mt-4 text-base leading-relaxed text-slate-grey sm:text-lg">
                            With over 15 years of teaching experience, Arun Antony specializes in Piano, Keyboard,
                            and Guitar. He teaches students of all ages with a friendly, patient, and encouraging
                            approach, focusing on strong fundamentals, practical playing, and confidence.
                        </p>

                        <div className="mt-6">
                            <Button href="#inquiry" variant="primary" size="md" className="gap-2">
                                <span>Know More About Arun</span>
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Button>
                        </div>

                        {/* Tutor Quote Card */}
                        <div className="mt-8 rounded-2xl border border-border-grey/70 bg-white p-6 shadow-xs relative">
                            <span className="text-4xl text-soft-blue leading-none select-none font-serif block -mb-2" aria-hidden="true">
                                “
                            </span>
                            <p className="text-sm sm:text-base italic text-dark-slate">
                                Music is not just a skill. It&apos;s a way to express, worship and bring joy to life.
                            </p>
                            <span className="block mt-3 text-xs sm:text-sm font-semibold text-royal-navy">
                                — Arun Antony
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}