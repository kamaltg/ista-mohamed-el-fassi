import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ? Elements
import AccueilPage from "./Components-home-page/AccueilPage";
import NotreMissionPage from "./Components-nos-connaitre-page/notreMission";
import PageDirecteur from "./Components-nos-connaitre-page/motduDirecteur";
import HistoirISTA from "./Components-nos-connaitre-page/historique";
import PageStaffAdministratifs from "./Components-nos-connaitre-page/StaffAdministratifs";
import CorpsEnseignants from "./Components-nos-connaitre-page/CorpsEnseignants";
import Ambassadeurs from "./Components-nos-connaitre-page/Ambassadeurs";
import ChiffresClés from "./Components-nos-connaitre-page/ChiffresClés";
import Actualités from "./ACTUALITÉS/Actualités";
import AppelOffres from "./ACTUALITÉS/AppelOffres";
import FormationDisponible from "./Formation/FormationDisponible";
import EmploiDeTemps from "./EspaceStagiaires/EmploiDeTemps";
import PageDetaileActualite from "./ACTUALITÉS/detailActualite";
import DetailsFiliere from "./Formation/DetailsFiliere";
import AddNewsForm from "./Admin/create-actualite";
import AddTag from "./Admin/Tagspage";
function RoutesMyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index  element={<AccueilPage />} />
        <Route path="/Admins/Actualite/create" element={<AddNewsForm />} />
        <Route path="/Admins/Actualite/createTag" element={<AddTag />} />
        <Route path="/nos-connaitre">
          <Route
            path="Presentation de l’etablissement"
            element={<NotreMissionPage />}
          />
          <Route
            path="mot-directeur"
            element={<PageDirecteur />}
          />
          <Route
            path="Histoire"
            element={<HistoirISTA />}
          />
          <Route
            path="Staff administratifs"
            element={<PageStaffAdministratifs />}
          />
          <Route
            path="Corps Enseignants"
            element={<CorpsEnseignants />}
          />
          <Route
            path="Ambassadeurs"
            element={<Ambassadeurs />}
          />
          <Route
            path="Chiffres clés"
            element={<ChiffresClés />}
          />
        </Route>
        <Route path="/ACTUALITES">
          <Route
            path="Actualités"
            element={<Actualités />}
          />
          <Route
            path="Appel d’offres"
            element={<AppelOffres />}
          />
          {/* detaile Actualite */}
          <Route
            path="Actualités/:id"
            element={<PageDetaileActualite />}
          />
        </Route>
        <Route path="/Formation">
          <Route
            path="Formations Disponibles"
            element={<FormationDisponible />}
          />
          {/* details filiere */}
          <Route
            path="Formations Disponibles/:filiere"
            element={<DetailsFiliere  />}
          />
        </Route>
        <Route path="/Espace-Stagiaire">
          <Route
            path="Emploi-du-temps"
            element={<EmploiDeTemps />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesMyApp;
