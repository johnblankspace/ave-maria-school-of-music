import { Headphones, ArrowRight, GraduationCap, Laptop, Music, Users, MessageCircle } from 'lucide-react';
import heroImage from '../../../assets/images/hero_image.jpg'
import Button from '../../../components/common/Button';

export default function HeroSection() {
    return (
        <section
            id="hero"
            aria-labelledby="hero-heading"
            className="scroll-mt-28 lg:scroll-mt-32 relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-cloud-white to-white pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
                    {/* Left Content Column */}
                    <div className="lg:col-span-7">
                        {/* Category Pill Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-ice-blue/60 border border-soft-blue/30 px-3.5 py-1 text-xs font-semibold text-royal-navy shadow-2xs">
                            <Headphones className="h-3.5 w-3.5 text-steel-blue" aria-hidden="true" />
                            <span>Online Piano, Keyboard &amp; Guitar classes</span>
                        </div>

                        {/* Main Heading */}
                        <h1
                            id="hero-heading"
                            className="mt-3 text-3xl font-extrabold tracking-tight text-dark-slate sm:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.15]"
                        >
                            Learn Music 🎵
                            <span className="block text-royal-navy mt-1">from Ave Maria</span>
                        </h1>

                        {/* Subheading & Description */}
                        <p className="mt-2.5 text-base font-bold text-deep-navy sm:text-lg">
                            Personalized online Piano, Keyboard &amp; Guitar classes
                        </p>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-grey sm:text-base">
                            Learn at your own pace with expert guidance, structured lessons and a supportive
                            community. Discover the joy of music from the comfort of your home.
                        </p>

                        {/* Hero CTAs */}
                        <div className="mt-6 flex flex-wrap items-center gap-3.5">
                            <Button href="#inquiry" variant="primary" size="md" className="gap-2 px-5 py-2.5 text-sm sm:text-base font-semibold shadow-md rounded-xl">
                                <span>Book a Free Trial Class</span>
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Button>
                            <Button
                                href="https://wa.me/918301062755"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline"
                                size="md"
                                className="gap-2 border-2 border-border-grey bg-white hover:bg-mist-grey text-dark-slate px-4 py-2.5 text-sm sm:text-base font-semibold shadow-2xs rounded-xl"
                            >
                                <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                                <span>Chat on WhatsApp</span>
                            </Button>
                        </div>

                        {/* Bottom Hero Learning Highlights */}
                        <div className="mt-8 pt-5 border-t border-border-grey/50">
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ice-blue/60 text-royal-navy">
                                        <GraduationCap className="h-4 w-4" aria-hidden="true" />
                                    </div>
                                    <span className="text-xs font-semibold text-dark-slate leading-tight">
                                        Expert Instructors
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ice-blue/60 text-royal-navy">
                                        <Laptop className="h-4 w-4" aria-hidden="true" />
                                    </div>
                                    <span className="text-xs font-semibold text-dark-slate leading-tight">
                                        Live Online Classes
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ice-blue/60 text-royal-navy">
                                        <Music className="h-4 w-4" aria-hidden="true" />
                                    </div>
                                    <span className="text-xs font-semibold text-dark-slate leading-tight">
                                        Personalized Learning
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ice-blue/60 text-royal-navy">
                                        <Users className="h-4 w-4" aria-hidden="true" />
                                    </div>
                                    <span className="text-xs font-semibold text-dark-slate leading-tight">
                                        For All Age Groups
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Media Column */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                        <div className="relative mx-auto max-w-md lg:max-w-none w-full">
                            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white p-1.5 shadow-xl">
                                <img
                                    src={heroImage}
                                    alt="Arun Antony teaching online piano, keyboard and guitar lessons at studio keyboard"
                                    className="h-auto w-full rounded-2xl object-cover"
                                    loading="eager"
                                />
                                {/* Floating studio badge matching screenshot */}
                                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2 text-dark-slate border border-border-grey/50 shadow-md flex items-center gap-2.5">
                                    <Music className="h-4 w-4 text-royal-navy shrink-0" aria-hidden="true" />
                                    <div className="text-left leading-tight">
                                        <span className="block text-[11px] font-bold text-deep-navy">Arun Antony</span>
                                        <span className="block text-[10px] text-slate-grey">Certified Teacher</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}