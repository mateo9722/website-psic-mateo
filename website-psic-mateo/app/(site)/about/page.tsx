import AboutHero from "./components/AboutHero";
import AboutIntro from "./components/AboutIntro";
import AboutCollage from "./components/AboutCollage";
import AboutTimeline from "./components/AboutTimeline";
import TherapyStyle from "./components/TherapyStyle";
import SupportCards from "./components/SupportCards";
import CTASection from "./components/CTASection";

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutIntro />
            <AboutCollage />
            <AboutTimeline />
            <TherapyStyle />
            <SupportCards />
            <CTASection />
        </>
    );
}