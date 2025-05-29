import { useState } from "react";
import { Link } from "react-router-dom";
// images
import iconeAuthor from "@/assets/images/ACTUALITÉS/icones/author.png";
import iconeDate from "@/assets/images/ACTUALITÉS/icones/date.png";
import iconePinterer from "@/assets/images/ACTUALITÉS/icones/personneIntere.png";
import RechercheIcone from "@/assets/images/ACTUALITÉS/icones/searchIcon.png";
import imgAcctualite from "@/assets/images/ACTUALITÉS/imageAcctualiteDefault.png";
import Container from "@/layouts/Container";

// section creation d'actualite

const ListActualités = Array(7).fill({
  id: 1,
  title: "Ouverture des inscriptions pour l’année 2025-2026",
  date: "8 mai 2025",
  author: "Directeur",
  views: "stagiaires, formateurs, événement",
  text: "Les inscriptions pour la rentrée prochaine sont ouvertes du 1er mai au 15 juillet 2025. Les bacheliers et candidats à la formation professionnelle sont invités à soumettre leur dossier en ligne via notre plateforme.",
  image: imgAcctualite,
});

const LesActualites = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(ListActualités.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = ListActualités.slice(start, start + itemsPerPage);

  return (
    <div className="grid gap-8 p-4">
      {currentItems.map((Actualité, index) => (
        <div key={index} className="flex flex-col border-b pb-6 md:flex-row">
          <img
            src={Actualité.image}
            alt="Actualité"
            className="h-auto w-full rounded object-cover md:w-1/3"
          />
          <div className="mt-5 flex w-[650px] flex-col gap-2 md:mt-2 md:ml-7">
            <div className="mb-3 flex gap-7">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <img src={iconeDate} alt="calendar" className="h-4 w-4" />
                <span>{Actualité.date}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <img src={iconePinterer} alt="views" className="h-4 w-4" />
                <span>{Actualité.views}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <img src={iconeAuthor} alt="author" className="h-4 w-4" />
                <span>{Actualité.author}</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#004a93]">
              {Actualité.title}
            </h2>
            <p className="mt-2 text-[#a4a3a3]">{Actualité.text}</p>
            <Link
              to={"/ACTUALITES/Actualités/" + Actualité.id}
              className="mt-5 inline-block font-semibold text-[#00904a] hover:underline">
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
// Body Page

export function BodyPage() {
  return (
    <>
      <div className="container mx-auto p-6">
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
}
// full page Content
function Actualites() {
  return (
    <Container>
      <BodyPage />
    </Container>
  );
}

export default Actualites;
