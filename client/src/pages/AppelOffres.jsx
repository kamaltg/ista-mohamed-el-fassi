import { useState } from "react";
import { Link } from "react-router-dom";
// images
import iconeAuthor from "@/assets/images/ACTUALITÉS/icones/author.png";
import iconeDate from "@/assets/images/ACTUALITÉS/icones/date.png";
import iconePinterer from "@/assets/images/ACTUALITÉS/icones/personneIntere.png";
import RechercheIcone from "@/assets/images/ACTUALITÉS/icones/searchIcon.png";
import Container from "@/layouts/Container";

// section creation d'actualite

const ListActualités = Array(7).fill({
  id: 1,
  title:
    "Fourniture de matériel informatique pour les besoins pédagogiques de l’ISTA Mohamed El Fassi – Errachidia",
  date: "22 AVRIL 2025",
  author: "Directeur",
  views: "stagiaires, formateurs, événement",
  text: "L’Institut Spécialisé de Technologie Appliquée MOHAMED EL FASSI lance un appel d’offres ouvert pour l’acquisition et la livraison de matériel informatique destiné à l’équipement des salles de cours et des bureaux administratifs...",
});

const LesActualites = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ListActualités.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ListActualités.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="mt-6 grid gap-8">
      {currentItems.map((Actualité, index) => (
        <div
          key={index}
          className={
            index === currentItems.length - 1 && currentPage === totalPages
              ? "flex flex-col md:flex-row"
              : "flex flex-col border-b pb-6 md:flex-row"
          }>
          <div className="mt-5 flex flex-col gap-2">
            <div className="mb-3 flex gap-7">
              {/* Date */}
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <img src={iconeDate} alt="calendar" className="h-4 w-4" />
                <span>{Actualité.date}</span>
              </div>
              {/* Views */}
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <img src={iconePinterer} alt="views" className="h-4 w-4" />
                <span>{Actualité.views}</span>
              </div>
              {/* Author */}
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <img
                  src={iconeAuthor}
                  alt="author"
                  className="h-4 w-4 rounded-full"
                />
                <span>{Actualité.author}</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold">{Actualité.title}</h2>
            <p className="mt-2 text-[#a4a3a3]">{Actualité.text}</p>
            <Link
              to="#"
              className="mt-3 inline-block font-semibold text-[#00904a] hover:underline">
              Continuer la lecture →
            </Link>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="mt-8 flex justify-center space-x-2 p-5">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="rounded bg-[#004a93] px-3 py-1 text-sm text-white disabled:opacity-50"
          disabled={currentPage === 1}>
          Précédent
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`rounded px-3 py-1 text-sm ${
              currentPage === i + 1
                ? "bg-[#00904a] text-white"
                : "bg-gray-200 text-gray-700"
            }`}>
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="rounded bg-[#004a93] px-3 py-1 text-sm text-white disabled:opacity-50"
          disabled={currentPage === totalPages}>
          Suivant
        </button>
      </div>
    </div>
  );
};

const BodyPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-5 flex justify-end">
          <div className="relative max-w-md min-w-[300px]">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full rounded-full bg-gray-100 py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-[#004a93] focus:outline-none"
            />
            <img
              src={RechercheIcone}
              alt="Search"
              className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform opacity-50"
            />
          </div>
        </div>
        <LesActualites />
      </div>
    </>
  );
};
// Full Page Content
function AppelOffres() {
  return (
    <Container>
      <BodyPage />
    </Container>
  );
}

export default AppelOffres;
