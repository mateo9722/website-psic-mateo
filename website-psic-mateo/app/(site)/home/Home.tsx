import { Hero, Intro, Services, Benefits, Testimonials, CTA } from "./";

export default function Home() {
    return (
        <main className="w-full flex flex-col">
            <Hero />
            <Intro />
            <Services />
            <Benefits />
            <Testimonials />
            <CTA />
        </main>
    );
}