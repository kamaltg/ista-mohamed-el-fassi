import Container from "@/layouts/Container";
import { useState } from "react";
import { FaClock, FaGraduationCap, FaStream, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

// Formulaire pour la recherche
const FormationRecherche = () => {
  const [secteur, setSecteur] = useState("");
  const [niveauScolaire, setNiveauScolaire] = useState("");
  const [niveauFormation, setNiveauFormation] = useState("");
  const [modeFormation, setModeFormation] = useState("");
  const [typeFormation, setTypeFormation] = useState("");

  const handleSecteurChange = (event) => {
    setSecteur(event.target.value);
  };

  const handleNiveauScolaireChange = (event) => {
    setNiveauScolaire(event.target.value);
  };

  const handleNiveauFormationChange = (event) => {
    setNiveauFormation(event.target.value);
  };

  const handleModeFormationChange = (event) => {
    setModeFormation(event.target.value);
  };

  const handleTypeFormationChange = (event) => {
    setTypeFormation(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log({
  //     secteur,
  //     niveauScolaire,
  //     niveauFormation,
  //     modeFormation,
  //     typeFormation,
  //   });
  // };

  return (
    <div className="py-9">
      <div className="max-w-6xl bg-white">
        <h2 className="mb-6 pb-2 text-3xl font-bold text-[#004a93]">
          <span className="border-b-4 border-[#004a93]">Tr</span>ouver une
          formation
        </h2>

        <form className="w-[1500px]" /* onSubmit={handleSubmit} */>
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="secteur"
                className="mb-1 block text-sm font-medium text-gray-700">
                Secteur
              </label>
              <select
                id="secteur"
                name="secteur"
                value={secteur}
                onChange={handleSecteurChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm">
                <option value="">Secteur</option>
                <option value="informatique">Informatique</option>
                <option value="commerce">Commerce</option>
                <option value="Cuisine">Cuisine</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="niveauScolaire"
                className="mb-1 block text-sm font-medium text-gray-700">
                Niveau Scolaire
              </label>
              <select
                id="niveauScolaire"
                name="niveauScolaire"
                value={niveauScolaire}
                onChange={handleNiveauScolaireChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm">
                <option value="">Niveau Scolaire</option>
                <option value="bac">Bac</option>
                <option value="bac+2">Bac+2</option>
                <option value="licence">Licence</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="niveauFormation"
                className="mb-1 block text-sm font-medium text-gray-700">
                Niveau de formation
              </label>
              <select
                id="niveauFormation"
                name="niveauFormation"
                value={niveauFormation}
                onChange={handleNiveauFormationChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm">
                <option value="">Niveau de formation</option>
                <option value="debutant">Débutant</option>
                <option value="intermediaire">Intermédiaire</option>
                <option value="avance">Avancé</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="modeFormation"
                className="mb-1 block text-sm font-medium text-gray-700">
                Mode de formation
              </label>
              <select
                id="modeFormation"
                name="modeFormation"
                value={modeFormation}
                onChange={handleModeFormationChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm">
                <option value="">Mode de formation</option>
                {/* Add more training mode options here */}
                <option value="presentiel">Présentiel</option>
                <option value="distance">À distance</option>
                <option value="alternance">Alternance</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="typeFormation"
                className="mb-1 block text-sm font-medium text-gray-700">
                Type de formation
              </label>
              <select
                id="typeFormation"
                name="typeFormation"
                value={typeFormation}
                onChange={handleTypeFormationChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm">
                <option value="">Type de formation</option>
                <option value="diplomante">Diplômante</option>
                <option value="certifiante">Certifiante</option>
                <option value="qualifiante">Qualifiante</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
//
// Card Presentation des FILIERES
const CardFiliere = ({ Information }) => {
  return (
    <>
      <Link
        className="cursor"
        to={"/formations-disponibles/" + Information.title}>
        <div className="flex h-auto min-h-[350px] w-[320px] max-w-sm flex-col gap-5 rounded-xl border bg-white p-5 shadow">
          <h2 className="text-2xl leading-tight font-bold text-black">
            {Information.title}
          </h2>

          <div className="mt-4 space-y-4">
            <div className="flex items-center rounded-md bg-gray-200 px-3 py-2">
              <FaUser className="mr-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-800">
                {Information.type}
              </span>
            </div>

            <div className="flex items-center rounded-md bg-green-100 px-3 py-2">
              <FaClock className="mr-2 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                {Information.mode}
              </span>
            </div>

            <div className="flex items-center rounded-md bg-blue-200 px-3 py-2">
              <FaGraduationCap className="mr-2 text-blue-900" />
              <span className="text-sm font-medium text-blue-900">
                {Information.certification}
              </span>
            </div>
            {!!Information.troncCommun && (
              <div className="flex items-center rounded-md bg-blue-100 px-3 py-2">
                <FaStream className="mr-2 text-blue-700" />
                <span className="text-sm font-medium text-blue-700">
                  Tronc commun
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export function BodyPage() {
  const formations = [
    {
      title: "Développement Digital",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: false,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: false,
    },
    {
      title: "Développement Digital",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: false,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: false,
    },
    {
      title: "Développement Digital",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: false,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: false,
    },
    {
      title: "Développement Digital",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: false,
    },
    {
      title: "Développement Digital Option Web Full Stack",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: false,
    },
    {
      title: "Développement Digital",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
    {
      title: "Développement Digital",
      type: "Technicien Spécialisé",
      mode: "Cours du jour",
      certification: "Diplomante",
      troncCommun: true,
    },
  ];
  // pagination info
  const ITEMS_PER_PAGE = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(formations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = formations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <Container>
      <div className="container mx-auto">
        <FormationRecherche />
        <div className="py-7">
          <h1 className="mb-6 pb-2 text-3xl font-bold text-[#004a93]">
            <span className="border-b-4 border-[#004a93]">
              {formations.length}{" "}
            </span>
            filières trouvées
          </h1>
          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentItems.map((formation, index) => (
              <CardFiliere key={index} Information={formation} />
            ))}
          </div>
          {formations.length > 16 && (
            <div className="mt-6 flex items-center justify-center space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded bg-gray-200 px-4 py-1 hover:bg-gray-300 disabled:opacity-50">
                Précédent
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`rounded px-3 py-1 ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}>
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded bg-gray-200 px-4 py-1 hover:bg-gray-300 disabled:opacity-50">
                Suivant
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

function FormationDisponible() {
  return (
    <>
      <BodyPage />
    </>
  );
}

export default FormationDisponible;
