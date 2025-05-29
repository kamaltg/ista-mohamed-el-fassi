import { HiSparkles } from "react-icons/hi2";

function NosPrincipesEthiques() {
  const nosPrincipesEthiques = [
    {
      title: "Intégrité",
      content: "Agir avec honnêteté et transparence dans toutes nos pratiques.",
    },
    {
      title: "Équité",
      content: "Garantir l’égalité des chances pour tous les apprenants.",
    },
    {
      title: "Responsabilité",
      content:
        "Assumer nos engagements envers les élèves, les partenaires et la société.",
    },
    {
      title: "Respect de la diversité",
      content:
        "Promouvoir un environnement inclusif et ouvert à tous les profils.",
    },
  ];

  return (
    <ul className="space-y-10">
      {nosPrincipesEthiques.map((principe, index) => (
        <li key={index}>
          <div className="flex items-center justify-start gap-2">
            <div className="text-green text-2xl">
              <HiSparkles />
            </div>
            <div className="text-2xl font-bold">{principe.title}</div>
          </div>
          <p className="text-gray-500">{principe.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default NosPrincipesEthiques;
