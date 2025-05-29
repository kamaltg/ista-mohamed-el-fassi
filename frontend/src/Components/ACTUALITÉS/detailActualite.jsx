import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
import { Link } from "react-router-dom";
// images
import imageHeading from "../../assets/images/ACTUALITÉS/acctualite.png";
import imageAnnonce from "../../assets/images/ACTUALITÉS/imageAcctualiteDefault.png";
import IconePdf from "../../assets/images/ACTUALITÉS/icones/pdficone.png";
import axios from "axios";

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

const ContentGenerale = ({ newsItem }) => {
  if (!newsItem) return null;

  // Format date in French
  const formatFrenchDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <div className="min-h-screen">
      <header className="py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formatFrenchDate(newsItem.created_at)}
          </span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.523 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"
              />
            </svg>
            {newsItem.tags.join(", ") || "Non spécifié"}
          </span>
        </div>
      </header>

      <main className="">
        <h1 className="text-3xl md:text-3xl font-bold text-[#004a93] mb-8">
          <span className="border-b-4 border-[#004a93] pb-1">
            {newsItem.title.split(" ")[0]}
          </span>{" "}
          {newsItem.title.split(" ").slice(1).join(" ")}
        </h1>

        <div className="mb-8 flex justify-center">
          <img
            src={newsItem.image || imageAnnonce}
            alt={newsItem.title}
            className="w-[990px] h-[490px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="text-black text-base leading-7">
          <p className="mb-4 whitespace-pre-line">{newsItem.content}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {newsItem.attachments && newsItem.attachments.length > 0 && (
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                <span className="border-b-4 border-[#004a93] pb-1">Piè</span>ces
                Jointes
              </h3>
              {newsItem.attachments
                .filter((file) => {
                  const ext = file.path.split(".").pop().toLowerCase();
                  return !["jpg", "jpeg", "png", "gif", "svg", "webp"].includes(
                    ext,
                  );
                })
                .map((file, index) => (
                  <Link
                    key={index}
                    to={file.path}
                    download={file.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 text-blue-600 hover:underline py-4">
                    <img src={IconePdf} alt="PDF Icon" className="h-5 w-4" />
                    {file.label || `Attachment ${index + 1}`}
                  </Link>
                ))}
            </div>
          )}

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3  pb-2">
              <span className="border-b-4 border-[#004a93] pb-1">Par</span>tager
              Cet Annonce
            </h3>
            <div className="flex space-x-3 justify-start md:justify-end py-4">
              <Link
                to={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-full hover:opacity-90 transition-opacity">
                <i className="fab fa-facebook-f"></i>
              </Link>

              <Link
                to={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(newsItem.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-full hover:opacity-90 transition-opacity">
                <i className="fab fa-x-twitter"></i>
              </Link>

              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity">
                <i className="fab fa-instagram"></i>
              </Link>

              <Link
                to="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-red-600 text-white rounded-full hover:opacity-90 transition-opacity">
                <i className="fab fa-youtube"></i>
              </Link>

              <Link
                to={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(newsItem.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-blue-700 text-white rounded-full hover:opacity-90 transition-opacity">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function BodyPage() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await api.get(`/gestionNewsIsta/${id}`);

        const data = response.data;
        setNewsItem(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 max-w-md">
          <h2 className="font-bold">Erreur de chargement</h2>
          <p>{error}</p>
        </div>
        <Link
          to="/actualites"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retour aux actualités
        </Link>
      </div>
    );
  }

  return (
    <>
      <HeadingPage />
      <div className="container mx-auto">
        <ContentGenerale newsItem={newsItem} />
      </div>
    </>
  );
}

function PageDetaileActualite() {
  return (
    <>
      <Header />
      <BodyPage />
      <Footer />
    </>
  );
}

export default PageDetaileActualite;
