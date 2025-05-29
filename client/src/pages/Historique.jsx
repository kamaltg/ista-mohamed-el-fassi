// images
import MsMohammedELFassi from "@/assets/images/NOS CONNAÎTRE/MohammedElfassi.png";

function Historique() {
  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-7 shadow-md">
      <div className="mb-6 flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-1/3">
          <img
            src={MsMohammedELFassi}
            alt="Mohammed Ghali El Fassi"
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
          <p className="mt-2 text-center text-sm text-[#004a93]">
            Mohammed Ghali El Fassi (1908-1991)
          </p>
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            Mohammed Ghali El Fassi
          </h1>
          <p className="mb-4 text-gray-600">
            Né en 1908 à Fès et mort à Rabat le 21 décembre 1991, est un homme
            d'État marocain.
          </p>
          <p className="mb-4 text-gray-700">
            Comme son cousin Allal El Fassi, il passera au nationalisme et à
            l'Istiqlal en étant le lien entre le Sultan Mohammed V et les
            nationalistes durant la période préindépendance, où son rôle était
            de transmettre les informations de l'extérieur vers l'intérieur du
            Palais Royal. Il a été aussi l'un des signataires du Manifeste de
            l'indépendance du 11 janvier 1944 et a été longuement emprisonné
            pour son nationalisme et sa proximité avec Feu Mohammed V.
          </p>
          <p className="mb-4 text-gray-700">
            Il eut une formation au collège Moulay-Driss de Fès puis à la
            Quaraouiyine dont il deviendra le recteur. Plus tard, il obtiendra
            une licence en lettres à la Sorbonne ainsi qu'un diplôme de
            l'institut des langues orientales.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Études</h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>
            Licence ès lettres – Diplôme de l’Ecole des langues orientales
            (1929-1931)
          </li>
          <li>
            Etudes univers itaires à Paris – Diplôme des études supérieures
            (1932)
          </li>
          <li>
            Doctorat honorifique de l’Université Bridge port (Connecticut-
            Etats-Unis), de l’Université de Lagos (Nigéria) et de l’Université
            de Djakarta (Indonésie)
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Postes scientifiques et politiques:
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>Professeur au collège royal</li>
          <li>Directeur de l'Université Al Qaraouiyine</li>
          <li>
            Ministre de l'éducation nationale au premier gouvernement du Maroc
            indépendant (1955) et dans le second gouvernement (1956)
          </li>
          <li>
            Ministre d'Etat chargé des affaires culturelles et de l'enseignement
            originel (1968)
          </li>
          <li>
            Président du Bureau permanent de la Commission nationale marocaine
            de l'éducation, de la culture et des sciences
          </li>
          <li>
            Président du Centre de coordination entre les commissions nationales
            arabes de l'éducation, de la culture et des sciences (UNESCO-ALESCO)
          </li>
          <li>Membre de l'Académie de la langue arabe du Caire (1958)</li>
          <li>Membre de l'Académie des sciences irakienne</li>
          <li>Membre de l'Académie de la langue arabe de Damas</li>
          <li>Président de l'association des sciences humaines</li>
          <li>Membre du Conseil exécutif de l'UNESCO (1958-1966)</li>
          <li>Président du Conseil exécutif de l'UNESCO (1964-1966)</li>
          <li>Président du Conseil de l'Institut d'arabisation (Maroc)</li>
          <li>Président de la Ligue des universités islamiques</li>
          <li>Président de l'association des universités africaines</li>
          <li>
            Membre honorifique du Centre méditerranéen de la musique comparée
          </li>
          <li>
            Membre fondateur de l'association des études pour le développement
            des relations maroco-américaines
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Historique;
