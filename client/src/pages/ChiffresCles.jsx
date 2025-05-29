import Container from "@/layouts/Container";

// 🎯 En-tête avec image de fond
function HeadingPage() {
  return (
    <div
      className="relative h-[200px] w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 59, 139, 0.9), rgba(0, 59, 139, 0.4), rgba(0,0,0,0)), url(${imageHeading})`,
      }}>
      <div className="absolute inset-0 flex flex-col justify-center gap-4 pl-10 text-white">
        <span className="border-l-4 border-[#00904a] ps-2 text-sm uppercase">
          Nos connaître
        </span>
        <h1 className="text-3xl font-bold">Chiffres clés</h1>
      </div>
    </div>
  );
}

// 🎓 Carte pour chaque filière
const FiliereCard = ({ title, nombre }) => (
  <div className="flex flex-col border-l border-gray-300 pl-5">
    <div className="mb-4 flex max-w-md items-center justify-between rounded-full border bg-white px-10 py-3 shadow-sm">
      <span className="text-lg font-semibold">{title}</span>
      <span className="flex items-center rounded-full bg-blue-100 px-4 py-1 font-bold text-blue-700">
        ● {nombre}
      </span>
    </div>
  </div>
);

// 📦 Section générique pour un niveau
const SectionNiveau = ({ title, data }) => (
  <div className="py-6">
    <h2 className="mb-4 text-2xl font-bold">{title}</h2>
    {data.map((filiere, index) => (
      <FiliereCard key={index} title={filiere.title} nombre={filiere.nombre} />
    ))}
  </div>
);

// 📊 Contenu principal des statistiques
export function ChiffresCles() {
  const niveaux = {
    "Technicien Spécialisé": [
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
    ],
    Technicien: [
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
    ],
    Qualification: [
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
    ],
    Spécialisation: [
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
    ],
  };

  return (
    <Container>
      <div className="mx-auto flex w-fit flex-col p-5">
        {Object.entries(niveaux).map(([niveau, data], index) => (
          <SectionNiveau
            key={index}
            title={`Effectifs des étudiants inscrits au ${niveau}`}
            data={data}
          />
        ))}
      </div>
    </Container>
  );
}

export default ChiffresCles;
