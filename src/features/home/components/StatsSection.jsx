import { User, Globe, Users, Trophy } from 'lucide-react';

export default function StatsSection() {
    return (
        <section
            aria-label="School Statistics and Key Highlights"
            className="w-full bg-gradient-to-r from-deep-navy via-[#072B66] to-steel-blue py-6 sm:py-8 text-white shadow-inner"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">

                    {/* 1. Personalised Classes */}
                    <div className="flex items-center justify-center gap-3.5 px-3 py-2 text-left">
                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-inner backdrop-blur-xs">
                            <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                        </div>
                        <div>
                            <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                                1:1
                            </span>
                            <span className="block text-xs sm:text-sm font-medium text-white/90">
                                Personalised Classes
                            </span>
                        </div>
                    </div>

                    {/* 2. 5+ Countries */}
                    <div className="flex items-center justify-center gap-3.5 px-3 py-2 text-left">
                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-inner backdrop-blur-xs">
                            <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                        </div>
                        <div>
                            <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                                5+
                            </span>
                            <span className="block text-xs sm:text-sm font-medium text-white/90">
                                Countries
                            </span>
                        </div>
                    </div>

                    {/* 3. 15+ Years of Experience */}
                    <div className="flex items-center justify-center gap-3.5 px-3 py-2 text-left">
                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-inner backdrop-blur-xs">
                            <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                        </div>
                        <div>
                            <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                                15+
                            </span>
                            <span className="block text-xs sm:text-sm font-medium text-white/90">
                                Years of Experience
                            </span>
                        </div>
                    </div>

                    {/* 4. 100+ Students */}
                    <div className="flex items-center justify-center gap-3.5 px-3 py-2 text-left">
                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-inner backdrop-blur-xs">
                            <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                        </div>
                        <div>
                            <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                                100+
                            </span>
                            <span className="block text-xs sm:text-sm font-medium text-white/90">
                                Students
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}