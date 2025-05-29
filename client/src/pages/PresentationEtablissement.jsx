import { fade, RevealOnScroll, zoomIn } from "@/animations";
import DirectorQuote from "@/features/presentationEtablissement/components/DirectorQuote";
import StatisticCard from "@/features/presentationEtablissement/components/StatisticCard";
import SwitchedSections from "@/features/presentationEtablissement/components/SwitchedSections";
import Container from "@/layouts/Container";

function PresentationEtablissement() {
  return (
    <Container className="mb-18 space-y-14">
      {/* statistics */}
      <RevealOnScroll>
        <StatisticCard />
      </RevealOnScroll>
      {/* quote of director */}
      <RevealOnScroll variant={zoomIn}>
        <DirectorQuote />
      </RevealOnScroll>
      <RevealOnScroll variant={fade}>
        {/* switched sections */}
        <SwitchedSections />
      </RevealOnScroll>
    </Container>
  );
}

export default PresentationEtablissement;
