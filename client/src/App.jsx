import AutoScrollToTop from "@/components/AutoScrollToTop";
import PostDetail from "@/features/posts/PostDetail";
import HomeLayout from "@/layouts/HomeLayout";
import PageLayout from "@/layouts/PageLayout";
import Accueil from "@/pages/Accueil";
import Actualites from "@/pages/Actualites";
import Ambassadeurs from "@/pages/Ambassadeurs";
import AppelOffres from "@/pages/AppelOffres";
import ChiffresCles from "@/pages/ChiffresCles";
import CorpsEnseignants from "@/pages/CorpsEnseignants";
import DetailsFiliere from "@/pages/DetailsFiliere";
import PageEmploiDeTemps from "@/pages/EmploiTemps";
import FormationDisponible from "@/pages/FormationDisponible";
import Historique from "@/pages/Historique";
import MotDirecteur from "@/pages/MotDirecteur";
import Plansite from "@/pages/Plansite";
import PresentationEtablissement from "@/pages/PresentationEtablissement";
import StaffAdministratifs from "@/pages/StaffAdministratifs";
import TousActualites from "@/pages/TousActualites";
import VisiteVirtuelle from "@/pages/VisiteVirtuelle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* auto scoll to top when page change */}
      <AutoScrollToTop />

      <Routes>
        {/* Home page */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Accueil />} />
        </Route>
        {/* Pages */}
        <Route element={<PageLayout />}>
          <Route
            path="presentation-etablissement"
            element={<PresentationEtablissement />}
          />
          <Route path="tous-les-actualites" element={<TousActualites />} />
          <Route path="mot-de-direteur" element={<MotDirecteur />} />
          <Route path="historique" element={<Historique />} />
          <Route path="corps-enseignants" element={<CorpsEnseignants />} />
          <Route path="chiffres-cles" element={<ChiffresCles />} />
          <Route path="ambassadors" element={<Ambassadeurs />} />

          <Route
            path="formation-disponible"
            element={<FormationDisponible />}
          />
          <Route
            path="formations-disponibles/:filiere"
            element={<DetailsFiliere />}
          />
          <Route path="actualites" element={<Actualites />} />
          <Route path="appel-offres" element={<AppelOffres />} />

          <Route
            path="staff-administratifs"
            element={<StaffAdministratifs />}
          />

          <Route path="emploi-du-temps" element={<PageEmploiDeTemps />} />

          <Route path="tous-les-actualites/:postId" element={<PostDetail />} />
          <Route path="visite-virtuelle" element={<VisiteVirtuelle />} />
          <Route path="plan-de-site" element={<Plansite />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
