import {
    Benefits,
    Hero,
    ServicesTimeline,
    Testimonials,
} from "@/app/(site)/home/index";
import Intro from "@/app/(site)/home/Intro";
import CTAClient from "@/app/(site)/home/CTAClient";

export default function Home() {
    return (
        <main className="w-full flex flex-col">
            <Hero />
            <Intro />
            <ServicesTimeline />
            <Benefits />
            <Testimonials />
            <CTAClient />
        </main>
    );
}