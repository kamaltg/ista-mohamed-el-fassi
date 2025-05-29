import CoursSoirIcon from "@/components/formationIcons/CoursSoirIcon";
import DiplomanteIcon from "@/components/formationIcons/DiplomanteIcon";
import QualifianteIcon from "@/components/formationIcons/QualifianteIcon";

function OffreFormation() {
  const offreFormations = [
    {
      icon: <DiplomanteIcon className="h-10 w-10" />,
      title: "Formation Diplômante",
      content:
        "La formation initiale est une formation dont le cursus est sanctionné par un diplôme marquant la fin du parcours de formation. Après l’obtention du diplôme, le lauréat est apte à exercer son métier.",
    },
    {
      icon: <QualifianteIcon className="h-10 w-10" />,
      title: "Formation qualifiante",
      content:
        "Les Formations Qualifiantes sont des formations de courte durée, de trois à neuf mois, qui complètent la formation initiale et ouvrent davantage les portes du marché du travail.",
    },
    {
      icon: <CoursSoirIcon className="h-10 w-10" />,
      title: "Cours du soir",
      content:
        "Alternative par excellence pour la formation et le perfectionnement des salariés et des demandeurs d'emploi. Les cours du soir offrent un diplôme équivalent à celui des formations en cours du jour.",
    },
  ];

  return (
    <ul className="flex flex-wrap gap-4">
      {offreFormations.map((offre, index) => (
        <li
          key={index}
          className="border-blue flex-1 rounded-xl border px-4 py-8">
          <div className="border-blue text-blue mb-8 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4">
            {/* Icon forced to scale */}
            {offre.icon}
          </div>
          <h5 className="mb-4 text-xl font-bold">{offre.title}</h5>
          <p className="text-gray-500">{offre.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default OffreFormation;
