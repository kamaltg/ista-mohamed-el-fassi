import NosPrincipesEthiques from "@/features/presentationEtablissement/components/sections/NosPrincipesEthiques";
import NosValeur from "@/features/presentationEtablissement/components/sections/NosValeur";
import NotreMission from "@/features/presentationEtablissement/components/sections/NotreMission";
import NotreVision from "@/features/presentationEtablissement/components/sections/NotreVision";
import OffreFormation from "@/features/presentationEtablissement/components/sections/OffreFormation";
import SwitchedSectionHeading from "@/features/presentationEtablissement/components/SwitchedSectionHeading";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

const sections = [
  { name: "Notre Mission", content: <NotreMission /> },
  { name: "Notre Vision", content: <NotreVision /> },
  { name: "Nos Valeurs", content: <NosValeur /> },
  { name: "Nos Principes Éthiques", content: <NosPrincipesEthiques /> },
  { name: "Offre de Formation", content: <OffreFormation /> },
];

function SwitchedSections() {
  const isNarrow = useMediaQuery("(width <= 48rem)");
  const [selectedSection, setSelectedSection] = useState(0);

  let navigationButtons;

  if (isNarrow) {
    // navigation buttons for narrow screens
    navigationButtons = (
      <div className="border-gray relative mx-auto h-fit w-fit">
        <div className="bg-gray absolute top-1/2 right-0 left-0 z-1 h-1 w-full"></div>
        <ol className="border-gray flex gap-8 text-xl font-medium">
          {sections.map((section, index) => (
            <li
              key={`section-${index}`}
              className="text-gray group flex items-center justify-start gap-2">
              <button
                onClick={() => setSelectedSection(index)}
                className={`z-2 flex size-12 cursor-pointer items-center justify-center rounded-full p-2 transition-all duration-300 ${
                  selectedSection === index
                    ? "bg-blue text-white"
                    : "border-gray border-1 bg-white group-hover:text-black hover:bg-gray-100"
                }`}>
                <span aria-hidden={true}>{index + 1}</span>
                <span className="hidden">{section.name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  } else {
    // navigation buttons for large screens
    navigationButtons = (
      <div className="border-gray relative h-fit flex-1">
        <div className="bg-gray absolute top-1/2 bottom-0 left-0 z-1 h-[80%] w-[3.5px] translate-x-11.5 -translate-y-1/2"></div>
        <ol className="border-gray/30 divide-gray/30 divide-y-1 border-b-1 text-xl font-medium">
          {sections.map((section, index) => (
            <li
              role="button"
              tabIndex="0"
              key={`section-${index}`}
              onClick={() => setSelectedSection(index)}
              className="text-gray group flex cursor-pointer items-center justify-start gap-2 px-8 py-5">
              <div
                aria-hidden={true}
                className={`z-2 flex size-8 items-center justify-center rounded-full p-2 transition-all duration-300 ${
                  selectedSection === index
                    ? "bg-blue text-white"
                    : "border-gray border-1 bg-white group-hover:text-black"
                }`}>
                {index + 1}
              </div>
              <span
                className={`transition-colors duration-300 ${
                  selectedSection === index
                    ? "text-blue"
                    : "group-hover:text-black"
                }`}>
                {section.name}
              </span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <section className="space-y-8 py-8">
      <h3 className="text-blue text-4xl font-bold">
        ISTA MOHAMED EL FASSI ERRACHIDIA
      </h3>

      <div className="flex flex-col md:flex-row">
        {/* buttons */}
        {navigationButtons}

        {/* section */}
        <div className="border-gray flex-2 border-dashed py-8 md:border-l-1 md:pl-12">
          <SwitchedSectionHeading
            number={selectedSection + 1}
            heading={sections[selectedSection].name}
          />
          {sections[selectedSection].content}
        </div>
      </div>
    </section>
  );
}

export default SwitchedSections;
