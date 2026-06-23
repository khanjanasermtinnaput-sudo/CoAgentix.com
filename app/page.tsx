import { Hero } from "@/components/sections/Hero";
import { TechnologyShowcase } from "@/components/sections/TechnologyShowcase";
import { Architecture } from "@/components/sections/Architecture";
import { TmapDeepDive } from "@/components/sections/TmapDeepDive";
import { RaaShowcase } from "@/components/sections/RaaShowcase";
import { Benchmarks } from "@/components/sections/Benchmarks";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { Vision } from "@/components/sections/Vision";
import { FinalCta } from "@/components/sections/FinalCta";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Co.AI",
  alternateName: "CoAgentix",
  url: "https://coagentix.com",
  description:
    "Co.AI combines multiple AI systems, intelligent routing, memory, and orchestration into one powerful platform.",
  slogan: "AI That Thinks Beyond One Model",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TechnologyShowcase />
      <Architecture />
      <TmapDeepDive />
      <RaaShowcase />
      <Benchmarks />
      <ProductEcosystem />
      <Vision />
      <FinalCta />
    </>
  );
}
