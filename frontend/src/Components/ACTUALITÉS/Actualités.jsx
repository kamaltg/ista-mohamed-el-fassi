import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
// images
import imageHeading from "../../assets/images/ACTUALITÉS/acctualite.png";
import imgAcctualite from "../../assets/images/ACTUALITÉS/imageAcctualiteDefault.png";
import iconeDate from "../../assets/images/ACTUALITÉS/icones/date.png";
import iconePinterer from "../../assets/images/ACTUALITÉS/icones/personneIntere.png";
import iconeAuthor from "../../assets/images/ACTUALITÉS/icones/author.png";
import RechercheIcone from "../../assets/images/ACTUALITÉS/icones/searchIcon.png";

function HeadingPage() {
  return (
    <div
      className="w-full h-[200px] bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 59, 139, 0.9), rgba(0, 59, 139, 0.4), rgba(0,0,0,0)), url(${imageHeading})`,
      }}>
      <div className="absolute inset-0 flex flex-col justify-center pl-10 gap-4 text-white">
        <span className="text-sm uppercase border-l-4 border-[#00904a] ps-2">
          ACTUALITÉS
        </span>
        <h1 className="text-3xl font-bold">Actualités</h1>
      </div>
    </div>
  );
}

const LesActualites = ({ searchTerm }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("/gestionNewsIsta");
        
        const formattedNews = response.data.map(item => ({
          ...item,
          tags: Array.isArray(item.tags) 
            ? item.tags.map(t => t.name || t)
            : []
        }));

        setNews(formattedNews);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const formatDateForSearch = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const getTagsString = (tags) => {
    return tags.map(tag => tag).join(", ");
  };

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredNews = news.filter(actualite => {
    const searchLower = searchTerm.toLowerCase();
    const searchNoAccents = removeAccents(searchLower);
    
    return (
      removeAccents(actualite.title.toLowerCase()).includes(searchNoAccents) ||
      removeAccents(getTagsString(actualite.tags).toLowerCase()).includes(searchNoAccents) ||
      formatDateForSearch(actualite.created_at).includes(searchTerm)
    );
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        Erreur lors du chargement des actualités: {error}
      </div>
    );
  }

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredNews.slice(start, start + itemsPerPage);

  return (
    <div className="p-4 grid gap-8">
      {filteredNews.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Aucune actualité ne correspond à votre recherche.</p>
        </div>
      ) : (
        currentItems.map((actualite) => (
          <div key={actualite.id} className="flex flex-col md:flex-row border-b pb-6">
            <img
              src={actualite.image || imgAcctualite}
              alt="Actualité"
              className="w-full md:w-1/3 h-auto object-cover rounded"
              onError={(e) => {
                e.target.src = imgAcctualite;
              }}
            />
            <div className="flex flex-col gap-2 md:ml-7 mt-5 md:mt-2 w-[650px]">
              <div className="flex gap-7 mb-3">
                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <img src={iconeDate} alt="calendar" className="w-4 h-4" />
                  <span>{formatDate(actualite.created_at)}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <img src={iconePinterer} alt="views" className="w-4 h-4" />                
                  <span>{getTagsString(actualite.tags)}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <img src={iconeAuthor} alt="author" className="w-4 h-4" />
                  <span>Administration</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#004a93]">
                {actualite.title}
              </h2>
              <p className="text-[#a4a3a3] mt-2">
                {actualite.content.length > 150 
                  ? `${actualite.content.substring(0, 150)}...` 
                  : actualite.content}
              </p>
              <Link
                to={`/ACTUALITES/Actualités/${actualite.id}`}
                className="text-[#00904a] font-semibold hover:underline mt-5 inline-block">
                Continuer la lecture →
              </Link>
            </div>
          </div>
        ))
      )}

      {totalPages > 1 && filteredNews.length > 0 && (
        <div className="flex justify-center mt-8 space-x-2 p-5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 rounded bg-[#004a93] text-white text-sm disabled:opacity-50"
            disabled={currentPage === 1}>
            Précédent
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded text-sm ${
                currentPage === i + 1
                  ? "bg-[#00904a] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}>
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 rounded bg-[#004a93] text-white text-sm disabled:opacity-50"
            disabled={currentPage === totalPages}>
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

export function BodyPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <HeadingPage />
      <div className="container mx-auto p-6">
        <div className="flex justify-end mt-5">
          <div className="relative min-w-[300px] max-w-md">
            <input
              type="text"
              placeholder="Rechercher par titre, tag ou date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#004a93]"
            />
            <img
              src={RechercheIcone}
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50"
            />
          </div>
        </div>
        <LesActualites searchTerm={searchTerm} />
      </div>
    </>
  );
}

function Actualités() {
  return (
    <>
      <Header />
      <BodyPage />
      <Footer />
    </>
  );
}

export default Actualités;