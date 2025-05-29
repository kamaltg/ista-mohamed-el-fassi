import { useState } from "react";
// images
import imgG from "@/assets/images/NOS CONNAÎTRE/Man.png";
import imgF from "@/assets/images/NOS CONNAÎTRE/women.png";
import Container from "@/layouts/Container";

function CorpsEnseignants() {
  // LesProfesseurs = formateurs + formatrices
  const images = [imgG, imgF];
  const LesProfesseurs = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    nomC: "Nom PRÉNOM",
    Role: "rôle",
    filière: "filière",
    image: images[Math.floor(Math.random() * images.length)],
  }));

  const ITEMS_PER_PAGE = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(LesProfesseurs.length / ITEMS_PER_PAGE);

  const FormateurEtFormatriceCurrente = LesProfesseurs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show the first page
      pages.push(1);

      if (currentPage <= 3) {
        pages.push(2, 3, 4);
        pages.push("...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push("...");
        pages.push(totalPages - 3, totalPages - 2, totalPages - 1);
        pages.push(totalPages);
      } else {
        pages.push("...");
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push("...", totalPages);
      }
    }

    // Remove duplicates
    return [...new Set(pages)];
  };

  return (
    <Container>
      <div className="container mx-auto">
        <h2 className="mb-4 p-5 text-center text-3xl font-bold text-[#004a93]">
          L'ISTA MOHAMED EL FASSI d’Errachidia compte <br />
          <span>50 formateurs et formatrices permanents</span>
        </h2>

        <div className="grid grid-cols-2 justify-items-center gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {FormateurEtFormatriceCurrente.map((person) => (
            <div
              key={person.id}
              className="relative h-[250px] w-[220px] bg-gray-100 shadow-md">
              <img
                src={person.image}
                alt={person.nomC}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-white/50 px-2 py-1 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-[#004a93]">
                  {person.nomC}
                </h3>
                <p className="text-xs text-black">
                  {person.filière} - {person.Role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center space-x-2 p-5 text-sm">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-lg border border-gray-300 px-3 py-1 transition-colors hover:bg-blue-500 hover:text-white disabled:opacity-50">
            Précédent
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() =>
                typeof page === "number" ? setCurrentPage(page) : null
              }
              disabled={page === "..."}
              className={`rounded-lg border border-gray-300 px-3 py-1 transition-colors ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 hover:text-blue-600"
              }`}>
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-gray-300 px-3 py-1 transition-colors hover:bg-blue-500 hover:text-white disabled:opacity-50">
            Suivante
          </button>
        </div>
      </div>
    </Container>
  );
}

export default CorpsEnseignants;
