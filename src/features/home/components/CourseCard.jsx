import { Music, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "../../../components/ui/Button";

export default function CourseCard({ course }) {
    const { badge, title, gradient, description, features } = course;

    return (
        <div className="flex flex-col justify-between rounded-2xl border border-border-grey/80 bg-cloud-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-steel-blue/40">
            <div>
                <div
                    className={`relative mb-6 h-36 w-full overflow-hidden rounded-xl bg-linear-to-r ${gradient} p-4 flex items-center justify-between text-white shadow-inner`}
                >
                    <div>
                        <span className="inline-block rounded-md bg-white/20 px-2.5 py-1 text-xs font-medium tracking-wide backdrop-blur-xs">
                            {badge}
                        </span>
                        <h3 className="mt-2 text-xl font-bold tracking-tight text-white">{title}</h3>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-ice-blue">
                        <Music className="h-7 w-7" aria-hidden="true" />
                    </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-grey">{description}</p>

                <ul className="mt-6 space-y-2.5 text-sm text-dark-slate">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-steel-blue shrink-0" aria-hidden="true" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-border-grey/60">
                <Button href="#inquiry" variant="primary" size="sm" className="w-full sm:w-auto gap-2">
                    <span>Know More</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
            </div>
        </div>
    )
}