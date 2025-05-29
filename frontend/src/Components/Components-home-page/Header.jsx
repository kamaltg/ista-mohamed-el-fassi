import React, { useState, useEffect, useRef } from "react";
import OfpptLogo from "../../assets/Logos/ofppt-logo.svg";
import { Link, useLocation } from "react-router-dom";
// section de top-bar
function TopBar() {
  return (
    <div className="top-0 right-0 w-full h-[40px] bg-[#a4a3a3] text-white z-50">
      <ul className="flex justify-end items-center gap-5 h-full pr-5">
        <li className="p-1">
          <Link
            to="/login"
            className="text-sm font-bold cursor-pointer hover:underline">
            Connexion
          </Link>
        </li>

        <div className="h-6 border-l border-white" />

        <li className="p-1">
          <Link to="/icon1">
            <img
              src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF"
              alt="Icon 1"
              className="size-6 object-contain"
            />
          </Link>
        </li>

        <div className="h-6 border-l border-white" />

        <li className="p-1">
          <Link to="/icon2">
            <img
              src="https://img.icons8.com/?size=100&id=60440&format=png&color=FFFFFF"
              alt="Icon 2"
              className="size-6 object-contain"
            />
          </Link>
        </li>

        <div className="h-6 border-l border-white" />

        <li className="p-1">
          <Link to="/icon3">
            <img
              src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=FFFFFF"
              alt="Icon 3"
              className="size-6"
            />
          </Link>
        </li>

        <div className="h-6 border-l border-white" />

        <li className="p-1">
          <Link to="/icon4">
            <img
              src="https://img.icons8.com/?size=100&id=37326&format=png&color=FFFFFF"
              alt="Icon 4"
              className="size-6"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

function LogoSection() {
  return (
    <>
      <div id="partie2" className="w-full py-5 mt-[40px] container mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4">
          <img
            src={OfpptLogo}
            alt="OFPPT Logo"
            className="w-24 h-24 sm:w-28 sm:h-28"
          />
          <div className="text-center sm:text-left">
            <p className="ISTA font text-sm sm:text-sm">
              Institut Spécialisé de Technologie Appliquée
            </p>
            <p className="ISTA-Errachidia font font-bold text-xl sm:text-2xl">
              MOHAMED EL FASSI ERRACHIDIA
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState({
    nosConnaitre: false,
    formations: false,
    annonces: false,
    stagiaire: false,
    entreprise: false,
    parascolaire: false,
  });
  const PathMaintenant = useLocation();

  // Create a unique ref for each menu item
  const nosConnaitreRef = useRef(null);
  const formationsRef = useRef(null);
  const annoncesRef = useRef(null);
  const stagiaireRef = useRef(null);
  const entrepriseRef = useRef(null);
  const parascolaireRef = useRef(null);

  // Handle the toggle of the dropdown
  const handleToggle = (menu) => {
    setIsOpen({
      nosConnaitre: false,
      formations: false,
      annonces: false,
      stagiaire: false,
      entreprise: false,
      parascolaire: false,
    });
    setIsOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // Close the dropdown when clicking outside of it
  const handleClickOutside = (e) => {
    if (
      !nosConnaitreRef.current.contains(e.target) &&
      !formationsRef.current.contains(e.target) &&
      !annoncesRef.current.contains(e.target) &&
      !stagiaireRef.current.contains(e.target) &&
      !entrepriseRef.current.contains(e.target) &&
      !parascolaireRef.current.contains(e.target)
    ) {
      setIsOpen({
        nosConnaitre: false,
        formations: false,
        annonces: false,
        stagiaire: false,
        entreprise: false,
        parascolaire: false,
      });
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside of the dropdowns
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-[#1e3a8a] py-3 px-2 text-white font relative z-40">
      <ul className="flex flex-wrap justify-center gap-8 text-sm sm:text-base relative">
        {/* ACCUEIL */}
        <li
          className={
            PathMaintenant.pathname == "/"
              ? "flex items-center gap-2 cursor-pointer  border-b-orange-500 border-b-3 pb-1"
              : "flex items-center gap-2 cursor-pointer"
          }>
          <img
            src="https://img.icons8.com/?size=100&id=72&format=png&color=FFFFFF"
            alt="Accueil Icon"
            className="size-4"
          />
          <Link to="/" className="text-sm mt-1 ">
            ACCUEIL
          </Link>
        </li>

        {/* NOS CONNAÎTRE */}
        <li
          className={
            PathMaintenant.pathname.indexOf("nos-connaitre") !== -1
              ? "relative cursor-pointer border-b-orange-500 border-b-3 pb-1"
              : "relative cursor-pointer "
          }
          ref={nosConnaitreRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("nosConnaitre")}>
            <img
              src="https://img.icons8.com/?size=100&id=90393&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-sm mt-1">NOS CONNAÎTRE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.nosConnaitre && (
            <ul
              className="absolute left-0 bg-[#004a93] text-white rounded shadow-md mt-2 z-50 inline-block list-none p-0 m-0 min-w-max"
              onMouseLeave={() =>
                setIsOpen((prevState) => ({
                  ...prevState,
                  nosConnaitre: false,
                }))
              }>
              <li>
                <Link
                  to="/nos-connaitre/Presentation de l’etablissement"
                  className="block px-4 py-2 text-sm hover:text-[#00904a] text-sm hover:text-[#00904a]">
                  Presentation de l’etablissement
                </Link>
              </li>
              <li>
                <Link
                  to="/nos-connaitre/mot-directeur"
                  className="block px-4 py-2 text-sm hover:text-[#00904a] text-sm hover:text-[#00904a]">
                  Mot du directeur
                </Link>
              </li>
              <li>
                <Link
                  to="/nos-connaitre/Histoire"
                  className="block px-4 py-2 text-sm hover:text-[#00904a] text-sm hover:text-[#00904a]">
                  Histoire
                </Link>
              </li>
              <li>
                <Link
                  to="/nos-connaitre/Staff administratifs"
                  className="block px-4 py-2 text-sm hover:text-[#00904a] text-sm hover:text-[#00904a]">
                  Staff administratifs
                </Link>
              </li>
              <li>
                <Link
                  to="/nos-connaitre/Corps Enseignants"
                  className="block px-4 py-2 text-sm hover:text-[#00904a] text-sm hover:text-[#00904a]">
                  Corps Enseignants
                </Link>
              </li>
              <li>
                <Link
                  to="/nos-connaitre/Ambassadeurs "
                  className="block px-4 py-2 text-sm hover:text-[#00904a] text-sm hover:text-[#00904a]">
                  Ambassadeurs
                </Link>
              </li>
              <li>
                <Link
                  to="/nos-connaitre/Chiffres clés "
                  className="block px-4 py-2 text-sm hover:text-[#00904a] text-sm hover:text-[#00904a]">
                  Chiffres clés
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/nos-connaitre/notre-mission"
                  className="block px-4 py-2 text-sm hover:text-[#00904a] text-sm hover:text-[#00904a]">
                  Notre mission
                </Link>
              </li> */}
            </ul>
          )}
        </li>

        {/* FORMATIONS */}
        <li
          className={
            PathMaintenant.pathname.indexOf("Formation") !== -1
              ? "relative cursor-pointer border-b-orange-500 border-b-3 pb-1"
              : "relative cursor-pointer "
          }
          ref={formationsRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("formations")}>
            <img
              src="https://img.icons8.com/?size=100&id=79387&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-sm mt-1">FORMATIONS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.formations && (
            <ul
              className="absolute left-0 bg-[#004a93] text-white rounded shadow-md mt-2 z-50 inline-block list-none p-0 m-0 min-w-max"
              onMouseLeave={() =>
                setIsOpen((prevState) => ({ ...prevState, formations: false }))
              }>
              <li>
                <Link
                  to="/Formation/Formations Disponibles"
                  className="block px-4 py-2 text-sm hover:text-[#00904a]">
                  Formations Disponibles
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* ANNONCES */}
        <li
          className={
            PathMaintenant.pathname.indexOf("ACTUALITES") !== -1
              ? "relative cursor-pointer border-b-orange-500 border-b-3 pb-1"
              : "relative cursor-pointer "
          }
          ref={annoncesRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("annonces")}>
            <img
              src="https://img.icons8.com/?size=100&id=IzYXNYBBP9ql&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-sm mt-1">ACTUALITÉS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.annonces && (
            <ul
              className="absolute left-0 bg-[#004a93] text-white rounded shadow-md mt-2 z-50 inline-block list-none p-0 m-0 min-w-max"
              onMouseLeave={() =>
                setIsOpen((prevState) => ({ ...prevState, annonces: false }))
              }>
              <li>
                <Link
                  to="/ACTUALITES/Actualités"
                  className="block px-4 py-2 text-sm hover:text-[#00904a]">
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  to="/ACTUALITES/Appel d’offres"
                  className="block px-4 py-2 text-sm hover:text-[#00904a]">
                  Appel d’offres
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* STAGIAIRE */}
        <li className="relative cursor-pointer" ref={stagiaireRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("stagiaire")}>
            <img
              src="https://img.icons8.com/?size=100&id=38834&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-sm mt-1">ESPACE STAGIAIRE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.stagiaire && (
            <ul
              className="absolute left-0 bg-[#004a93] text-white rounded shadow-md mt-2 z-50 inline-block list-none p-0 m-0 min-w-max"
              onMouseLeave={() =>
                setIsOpen((prevState) => ({ ...prevState, stagiaire: false }))
              }>
              <li>
                <Link
                  to="/Espace-Stagiaire/Emploi-du-temps"
                  className="block px-4 py-2 text-sm hover:text-[#00904a]">
                  Emplois du temps
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/stagiaire/absences"
                  className="block px-4 py-2 text-sm hover:text-[#00904a]">
                  Absences
                </Link>
              </li> */}
            </ul>
          )}
        </li>

        {/* ENTREPRISE */}
        <li className="relative cursor-pointer" ref={entrepriseRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("entreprise")}>
            <img
              src="https://img.icons8.com/?size=100&id=39368&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-sm mt-1">SPACE ENTREPRISE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.entreprise && (
            <ul
              className="absolute left-0 bg-[#004a93] text-white rounded shadow-md mt-2 z-50 inline-block list-none p-0 m-0 min-w-max"
              onMouseLeave={() =>
                setIsOpen((prevState) => ({ ...prevState, entreprise: false }))
              }>
              <li>
                <Link
                  to="/entreprise/offres"
                  className="block px-4 py-2 text-sm hover:text-[#00904a]">
                  Offres de stage
                </Link>
              </li>
              <li>
                <Link
                  to="/entreprise/deposer"
                  className="block px-4 py-2 text-sm hover:text-[#00904a]">
                  Déposer une offre
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* PARASCOLAIRES */}
        <li className="relative cursor-pointer" ref={parascolaireRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("parascolaire")}>
            <img
              src="https://img.icons8.com/?size=100&id=85959&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-sm mt-1">ACTIVITÉS PARASCOLAIRES</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.parascolaire && (
            <ul
              className="absolute left-0 bg-[#004a93] text-white rounded shadow-md mt-2 z-50 inline-block list-none p-0 m-0 min-w-full"
              onMouseLeave={() =>
                setIsOpen((prevState) => ({
                  ...prevState,
                  parascolaire: false,
                }))
              }>
              <li>
                <Link
                  to="/parascolaire/clubs"
                  className="block px-4 py-2 text-sm hover:text-[#00904a]">
                  Clubs
                </Link>
              </li>
              <li>
                <Link
                  to="/parascolaire/evenements"
                  className="block px-4 py-2 text-sm hover:text-[#00904a]">
                  Événements
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <div className="navbar">
      <TopBar />
      <LogoSection />
      <NavBar />
    </div>
  );
}

export default Header;
