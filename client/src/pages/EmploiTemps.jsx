import Container from "@/layouts/Container";
import { useState } from "react";
// page heading
function HeadingPage() {
  return (
    <div className="relative h-[200px] w-full bg-[#a4a3a3] bg-cover bg-center">
      <div className="absolute inset-0 flex flex-col justify-center gap-4 pl-10 text-white">
        <span className="text-md border-l-6 border-[#00904a] ps-2 uppercase">
          {"Espace Stagiaire".toLocaleUpperCase()}
        </span>
        <h1 className="text-3xl font-bold">Emploi du temps</h1>
      </div>
    </div>
  );
}
// navigation avec niveaux
const TechnicienInterface = () => {
  // État pour suivre l'affichage actuel
  const [currentDisplay, setCurrentDisplay] = useState("Technicien Spécialisé");

  // Fonction pour changer l'affichage
  const handleButtonClick = (display) => {
    setCurrentDisplay(display);
  };

  return (
    <>
      {/* Boutons de navigation */}
      <div className="mb-5 flex w-full justify-center space-x-4 p-6 shadow-xl">
        <button
          onClick={() => handleButtonClick("Technicien Spécialisé")}
          name="Technicien Spécialisé"
          className={`min-w-[200px] rounded-4xl border-1 border-[#a4a3a3] px-2 py-2 font-medium text-[#00904a] hover:bg-[#00904a] hover:text-white ${currentDisplay == "Technicien Spécialisé" ? "bg-[#00904a] text-white" : null}`}>
          Technicien Spécialisé
        </button>
        <button
          onClick={() => handleButtonClick("technicien")}
          name="Technicien"
          className={`min-w-[200px] rounded-4xl border-1 border-[#a4a3a3] px-2 py-2 font-medium text-[#00904a] hover:bg-[#00904a] hover:text-white ${
            currentDisplay === "technicien" ? "bg-[#00904a] text-white" : ""
          }`}>
          Technicien
        </button>

        <button
          onClick={() => handleButtonClick("qualifiant")}
          name="Qualifiant"
          className={`min-w-[200px] rounded-4xl border-1 border-[#a4a3a3] px-2 py-2 font-medium text-[#00904a] hover:bg-[#00904a] hover:text-white ${
            currentDisplay === "qualifiant" ? "bg-[#00904a] text-white" : ""
          }`}>
          Qualifiant
        </button>

        <button
          onClick={() => handleButtonClick("specialiste")}
          name="Specialiste"
          className={`min-w-[200px] rounded-4xl border-1 border-[#a4a3a3] px-2 py-2 font-medium text-[#00904a] hover:bg-[#00904a] hover:text-white ${
            currentDisplay === "specialiste" ? "bg-[#00904a] text-white" : ""
          }`}>
          Specialiste
        </button>
      </div>
    </>
  );
};
// emploi interface

const EmploiDuTemps = () => {
  const [selectedFiliere, setSelectedFiliere] = useState(null);
  const [selectedGroupe, setSelectedGroupe] = useState(null);

  // Mock timetable data
  const data = {
    101: {
      Lundi: { 0: "Math", 2: "Physique" },
      Mardi: { 4: "Anglais" },
    },
    102: {
      Lundi: { 1: "JavaScript", 3: "React" },
    },
    // Add more groupe data as needed
  };

  const filieres = [
    {
      id: 1,
      name: "Développement Digital",
      option: "Web Full Stack",
      groupes: [
        { id: 101, name: "DEVOWFS201", totalHours: "17.5H" },
        { id: 102, name: "DEVOWFS202", totalHours: "15H" },
      ],
    },
    {
      id: 2,
      name: "Infrastructure Digitale",
      option: "Systèmes",
      groupes: [
        { id: 201, name: "INFOSYS201", totalHours: "16H" },
        { id: 202, name: "INFOSYS202", totalHours: "14H" },
      ],
    },
    {
      id: 3,
      name: "Data Science",
      option: "Analyse",
      groupes: [
        { id: 301, name: "DATASCI301", totalHours: "18H" },
        { id: 302, name: "DATASCI302", totalHours: "16.5H" },
      ],
    },
    {
      id: 4,
      name: "Cyber Security",
      option: "Protection",
      groupes: [
        { id: 401, name: "CYBERSEC401", totalHours: "19H" },
        { id: 402, name: "CYBERSEC402", totalHours: "17H" },
      ],
    },
    {
      id: 5,
      name: "Cloud Computing",
      option: "Architecture",
      groupes: [
        { id: 501, name: "CLOUD501", totalHours: "20H" },
        { id: 502, name: "CLOUD502", totalHours: "18H" },
      ],
    },
    {
      id: 6,
      name: "AI Engineering",
      option: "Machine Learning",
      groupes: [
        { id: 601, name: "AIENG601", totalHours: "21H" },
        { id: 602, name: "AIENG602", totalHours: "19H" },
      ],
    },
    {
      id: 7,
      name: "DevOps",
      option: "Intégration Continue",
      groupes: [
        { id: 701, name: "DEVOPS701", totalHours: "22H" },
        { id: 702, name: "DEVOPS702", totalHours: "20H" },
      ],
    },
    {
      id: 8,
      name: "Blockchain",
      option: "Technologie Ledger",
      groupes: [
        { id: 801, name: "BLOCK801", totalHours: "18H" },
        { id: 802, name: "BLOCK802", totalHours: "16H" },
      ],
    },
    {
      id: 9,
      name: "IoT",
      option: "Objets Connectés",
      groupes: [
        { id: 901, name: "IOT901", totalHours: "17H" },
        { id: 902, name: "IOT902", totalHours: "15H" },
      ],
    },
    {
      id: 10,
      name: "UX/UI Design",
      option: "Expérience Utilisateur",
      groupes: [
        { id: 1001, name: "UXUI1001", totalHours: "16H" },
        { id: 1002, name: "UXUI1002", totalHours: "14H" },
      ],
    },
    {
      id: 11,
      name: "Big Data",
      option: "Analyse Avancée",
      groupes: [
        { id: 1101, name: "BIGDATA1101", totalHours: "19H" },
        { id: 1102, name: "BIGDATA1102", totalHours: "17H" },
      ],
    },
    {
      id: 12,
      name: "Mobile Development",
      option: "Applications Native",
      groupes: [
        { id: 1201, name: "MOBILE1201", totalHours: "18H" },
        { id: 1202, name: "MOBILE1202", totalHours: "16H" },
      ],
    },
    {
      id: 13,
      name: "Game Development",
      option: "Jeux Vidéo",
      groupes: [
        { id: 1301, name: "GAME1301", totalHours: "20H" },
        { id: 1302, name: "GAME1302", totalHours: "18H" },
      ],
    },
    {
      id: 14,
      name: "AR/VR",
      option: "Réalité Mixte",
      groupes: [
        { id: 1401, name: "ARVR1401", totalHours: "17H" },
        { id: 1402, name: "ARVR1402", totalHours: "15H" },
      ],
    },
    {
      id: 15,
      name: "Digital Marketing",
      option: "Stratégie Online",
      groupes: [
        { id: 1501, name: "DIGIMKT1501", totalHours: "16H" },
        { id: 1502, name: "DIGIMKT1502", totalHours: "14H" },
      ],
    },
    {
      id: 16,
      name: "Network Security",
      option: "Protection Réseaux",
      groupes: [
        { id: 1601, name: "NETSEC1601", totalHours: "18H" },
        { id: 1602, name: "NETSEC1602", totalHours: "16H" },
      ],
    },
    {
      id: 17,
      name: "Embedded Systems",
      option: "Systèmes Embarqués",
      groupes: [
        { id: 1701, name: "EMBED1701", totalHours: "19H" },
        { id: 1702, name: "EMBED1702", totalHours: "17H" },
      ],
    },
    {
      id: 18,
      name: "Quantum Computing",
      option: "Algorithmes Quantiques",
      groupes: [
        { id: 1801, name: "QUANTUM1801", totalHours: "20H" },
        { id: 1802, name: "QUANTUM1802", totalHours: "18H" },
      ],
    },
    {
      id: 19,
      name: "Bioinformatics",
      option: "Analyse Génétique",
      groupes: [
        { id: 1901, name: "BIOINFO1901", totalHours: "17H" },
        { id: 1902, name: "BIOINFO1902", totalHours: "15H" },
      ],
    },
    {
      id: 20,
      name: "Robotics",
      option: "Automatisation",
      groupes: [
        { id: 2001, name: "ROBOT2001", totalHours: "18H" },
        { id: 2002, name: "ROBOT2002", totalHours: "16H" },
      ],
    },
  ];
  const selectFiliere = (filiereId) => {
    setSelectedFiliere(filiereId);
    setSelectedGroupe(null);
  };

  const selectGroupe = (groupeId) => {
    setSelectedGroupe(groupeId);
  };

  const currentFiliere = filieres.find((f) => f.id === selectedFiliere);
  const currentGroupe = currentFiliere?.groupes.find(
    (g) => g.id === selectedGroupe,
  );

  const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const heures = Array.from(
    { length: 10 },
    (_, i) => `${8 + i}:30 - ${9 + i}:30`,
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Filière selection */}
      <div className="mb-6">
        <h2 className="mb-3 px-2 text-xl font-bold">
          Sélectionnez une filière
        </h2>
        <div className="relative">
          <div className="scrollbar-hide flex space-x-3 overflow-x-auto pb-3">
            {filieres.map((filiere) => (
              <button
                key={filiere.id}
                onClick={() => selectFiliere(filiere.id)}
                className={`w-48 flex-shrink-0 rounded-lg border-2 p-4 transition-all ${
                  selectedFiliere === filiere.id
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}>
                <h3 className="text-left font-bold">{filiere.name}</h3>
                {filiere.option && (
                  <p className="mt-1 text-left text-sm text-gray-600">
                    {filiere.option}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Groupe selection */}
      {currentFiliere && (
        <div className="mb-6 rounded-lg bg-white p-4 shadow">
          <h2 className="mb-3 text-lg font-bold">Sélectionnez un groupe</h2>
          <div className="flex flex-wrap gap-3">
            {currentFiliere.groupes.map((groupe) => (
              <button
                key={groupe.id}
                onClick={() => selectGroupe(groupe.id)}
                className={`rounded-lg px-4 py-2 transition-all ${
                  selectedGroupe === groupe.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}>
                {groupe.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Timetable */}
      {currentGroupe && (
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div className="border-b p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-xl font-bold text-blue-800 md:text-2xl">
                  {currentFiliere.name}
                </h1>
                {currentFiliere.option && (
                  <h2 className="text-lg text-green-700 md:text-xl">
                    {currentFiliere.option}
                  </h2>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-x-4">
                  <span className="font-medium">
                    Groupe:{" "}
                    <span className="font-bold">{currentGroupe.name}</span>
                  </span>
                  <span className="font-medium">
                    Total:{" "}
                    <span className="font-bold">
                      {currentGroupe.totalHours}
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-3 text-gray-600 md:mt-0">
                Date: {new Date().toLocaleDateString("fr-FR")}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-24 border border-gray-200 p-2"></th>
                  {heures.map((slot, i) => (
                    <th key={i} className="border border-gray-200 p-2 text-sm">
                      {slot}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {jours.map((day) => (
                  <tr key={day}>
                    <td className="border border-gray-200 p-2 font-medium">
                      {day}
                    </td>
                    {heures.map((_, hourIndex) => {
                      const groupData = data[selectedGroupe];
                      const cellContent = groupData?.[day]?.[hourIndex] || "";
                      return (
                        <td
                          key={hourIndex}
                          className="border border-gray-200 p-2 text-center">
                          {cellContent}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end space-x-3 border-t p-4">
            <button className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Télécharger PDF
            </button>
            <button className="flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Partager
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// body page content
function BodyPage() {
  return (
    <Container>
      <TechnicienInterface />
      <div className="container mx-auto">
        <EmploiDuTemps />
      </div>
    </Container>
  );
}

function PageEmploiDeTemps() {
  return (
    <>
      <BodyPage />
    </>
  );
}

export default PageEmploiDeTemps;
