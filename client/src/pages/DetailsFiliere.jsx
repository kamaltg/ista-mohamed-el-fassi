// images
import iconeClock from "@/assets/images/ACTUALITÉS/icones/ClockIcone.png";
import iconeDiplome from "@/assets/images/ACTUALITÉS/icones/DiplomeIcon.png";
import iconeNiveau from "@/assets/images/ACTUALITÉS/icones/EcriteurIcone.png";
import iconePanne from "@/assets/images/ACTUALITÉS/icones/PremierAnneIcone.png";
import Container from "@/layouts/Container";
import { FaClock, FaDownload, FaGraduationCap, FaUser } from "react-icons/fa";

// content
const CardPresentation = ({ img, titre, bg, colorText }) => {
  var bgCadre = "bg-gray-300";
  if (titre === "Cours du jour") {
    bgCadre = "bg-[#00904a]/20";
  }
  if (titre === "Diplomante") {
    bgCadre = "bg-[#004a93]/30";
  }
  if (titre === "Tronc commun") {
    bgCadre = "bg-[#00904a]/20";
  }

  return (
    <div className="relative mx-auto w-[250px]">
      <div
        className={`absolute -top-1 left-1/2 -translate-x-1/2 transform bg-${bg} rounded-full p-2`}>
        <img src={img} alt="Custom Icon" className="h-5 w-5 object-contain" />
      </div>

      {/* Card */}
      <div
        className={`mt-5 ${bgCadre} flex h-[100px] flex-col justify-center rounded-lg px-6 py-4 text-center`}>
        <p className={`text-${colorText} font-bold`}>{titre}</p>
      </div>
    </div>
  );
};

export function PresentationFiliere() {
  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-6 py-5">
        <CardPresentation
          img={iconeNiveau}
          titre="Technicien Spécialisé"
          bg="[#a4a3a3]"
          colorText="black"
        />
        <CardPresentation
          img={iconeClock}
          titre="Cours du jour"
          bg="[#00904a]"
          colorText="[#00904a]"
        />
        <CardPresentation
          img={iconeDiplome}
          titre="Diplomante"
          bg="[#004a93]"
          colorText="[#004a93]"
        />
        <CardPresentation
          img={iconePanne}
          titre="Tronc commun"
          bg="blue-500"
          colorText="blue-500"
        />
      </div>

      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#004a93]">
          <span className="border-b-4 border-[#004a93] pb-1">Pr</span>ésentation
          du tronc commun
        </h1>

        <p className="py-5 text-xl">
          Le tronc commun en Développement Digital est une étape importante pour
          acquérir les bases nécessaires à l'étude, la conception, la
          construction, le développement, la mise au point, la maintenance et à
          l'amélioration des logiciels, des applications et des sites web. Au
          cours de cette étape, qui dure une année de formation professionnelle,
          les stagiaires suivent une formation qui a la vocation de répondre à
          deux types de compétences :
        </p>

        <ul className="space-y-1 pl-6 text-xl">
          <li className="relative pl-4 before:absolute before:left-0 before:content-['-']">
            <strong>Compétences transversales :</strong> Les langues,
            l'entrepreneuriat, compétences comportementales et sociales, culture
            et techniques avancées du numérique.
          </li>
          <li className="relative pl-4 before:absolute before:left-0 before:content-['-']">
            <strong>Compétences techniques :</strong> Acquérir les bases de
            l'algorithmique, programmer en orienté objet, développer des sites
            web statiques, programmer en JavaScript, développer des sites web
            dynamiques.
          </li>
        </ul>
      </div>
    </>
  );
}

// card
// Card Presentation des FILIERES
const CardFiliere = ({ Information }) => {
  return (
    <div className="flex h-auto w-[350px] max-w-sm flex-col gap-5 rounded-xl border bg-white p-5 shadow">
      <h2 className="text-3xl leading-tight font-bold text-black">
        {Information.title}
      </h2>

      <div className="mt-4 space-y-4">
        <div className="flex items-center rounded-md bg-gray-200 px-3 py-2">
          <FaUser className="mr-2 text-gray-600" />
          <span className="text-sm font-medium text-gray-800">
            {Information.Niveaux}
          </span>
        </div>

        <div className="flex items-center rounded-md bg-green-100 px-3 py-2">
          <FaClock className="mr-2 text-green-600" />
          <span className="text-sm font-medium text-green-800">
            {Information.mode}
          </span>
        </div>

        <div className="flex items-center rounded-md bg-blue-200 px-3 py-2">
          <FaGraduationCap className="mr-2 text-blue-900" />
          <span className="text-sm font-medium text-blue-900">
            {Information.certification}
          </span>
        </div>
      </div>
    </div>
  );
};
//
function OptionDisponible() {
  return (
    <>
      <div className="py-5">
        <h1 className="text-center text-4xl font-bold text-[#004a93]">
          Les options de la deuxième année
        </h1>
        <div className="flex justify-between py-10">
          <CardFiliere
            Information={{
              title: "Développement Digital option Applications Mobiles",
              Niveaux: "Technicien Spécialisé",
              mode: "Cours du jour",
              certification: "Diplomante",
            }}
          />
          <CardFiliere
            Information={{
              title: "Développement Digital option Applications Mobiles",
              Niveaux: "Technicien Spécialisé",
              mode: "Cours du jour",
              certification: "Diplomante",
            }}
          />
          <CardFiliere
            Information={{
              title: "Développement Digital option Applications Mobiles",
              Niveaux: "Technicien Spécialisé",
              mode: "Cours du jour",
              certification: "Diplomante",
            }}
          />
          <CardFiliere
            Information={{
              title: "Développement Digital option Applications Mobiles",
              Niveaux: "Technicien Spécialisé",
              mode: "Cours du jour",
              certification: "Diplomante",
            }}
          />
        </div>
      </div>
    </>
  );
}

function Programme() {
  const syllabus = [
    "EGTS101 : ARABE",
    "EGTS102 : FRANÇAIS",
    "EGTS103 : ANGLAIS TECHNIQUE/ESPAGNOLE",
    "EGTS104 : CULTURE ENTREPRENEURIALE-PARTIE 1",
    "EGTS105 : COMPÉTENCES COMPORTEMENTALES ET SOCIALES",
    "EGTS106 : ENTREPRENEURIAT-P1",
    "EGTS107 : CULTURE ET TECHNIQUES AVANCÉES DU NUMÉRIQUE",
  ];

  const modules = [
    "M101 : SE SITUER AU REGARD DU MÉTIER ET DE LA DÉMARCHE DE FORMATION",
    "M102 : ACQUÉRIR LES BASES DE L’ALGORITHMIQUE",
    "M103 : PROGRAMMER EN ORIENTÉ OBJET",
    "M104 : DÉVELOPPER DES SITES WEB STATIQUES",
    "M105 : PROGRAMMER EN JAVASCRIPT",
    "M106 : MANIPULER DES BASES DE DONNÉES",
    "M107 : DÉVELOPPER DES SITES WEB DYNAMIQUES",
    "M108 : S’INITIER À LA SÉCURITÉ DES SYSTÈMES D’INFORMATION",
  ];
  return (
    <div className="space-y-8 bg-white p-6 text-[#0049B7] md:p-12">
      <h1 className="text-2xl font-bold">Programme de formation</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="col-span-2 space-y-4">
          <section>
            <h2 className="text-xl font-semibold">Conditions d'admission</h2>
            <ul className="list-inside list-disc text-sm text-black">
              <li>
                Âge limite : Au plus 30 ans au 1er Septembre 2023 ; Au plus 33
                ans au 1er Septembre 2023 pour les bénéficiaires du Système des
                Passerelles.
              </li>
              <li>
                Niveau scolaire : Être titulaire du baccalauréat au moins ou
                équivalent ou avoir un diplôme de niveau Technicien, selon le
                tableau de correspondance 2023/2024.
              </li>
              <li>Branche(s) du Bac : Science ; Techniques scientifiques.</li>
              <li>
                Aptitudes et qualités :
                <ul className="ml-5 list-inside list-disc">
                  <li>Sens des responsabilités</li>
                  <li>de l’organisation et de la discipline</li>
                  <li>Capacités d’analyse et de synthèse</li>
                  <li>Sens du service</li>
                  <li>Esprit d’initiative</li>
                  <li>
                    Curiosité pour les nouvelles technologies de l’information
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Évaluation de la formation
            </h2>
            <p className="text-sm text-black">
              La formation dispensée est modulaire et les évaluations sont
              organisées selon l’acquisition du champ de compétence :
            </p>
            <ul className="ml-5 list-inside list-disc text-sm text-black">
              <li>Contrôles continus ;</li>
              <li>Examens de fin de module.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Modalités de sélection</h2>
            <p className="text-sm text-black">
              L’inscription et la confirmation, hors délibérations, sont
              possibles pour les candidats ayant une moyenne au baccalauréat
              supérieure ou égale à 12/20 ainsi que les candidats disposant d’un
              Baccalauréat Technique ou Professionnel en respectant le tableau
              de correspondance entre l’option du baccalauréat et les filières
              de formation choisies.
            </p>
            <p className="mt-2 text-sm text-black">
              Le classement des candidats se fait selon la moyenne du
              baccalauréat en respectant les classes suivantes :
            </p>
            <ul className="ml-5 list-inside list-disc text-sm text-black">
              <li className="text-[#0049B7]">
                Les candidats de toutes les branches ayant une moyenne
                supérieure ou égale à 12/20;
              </li>
              <li className="text-[#0049B7]">
                Les candidats ayant un baccalauréat option Sciences
                Mathématiques et une moyenne inférieure à 12/20;
              </li>
              <li className="text-[#0049B7]">
                Les candidats ayant un baccalauréat technique (dont le Bac Pro)
                et une moyenne inférieure à 12/20;
              </li>
              <li className="text-[#0049B7]">
                Les candidats des autres options ayant une moyenne inférieure à
                12/20.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Organisation de la formation
            </h2>
            <ul className="list-inside list-disc text-sm text-black">
              <li>
                La durée de formation du tronc commun est étalée sur 2
                semestre(s) ;
              </li>
              <li>
                Le programme peut être dispensé en mode de formation résidentiel
                ou alterné ;
              </li>
            </ul>
          </section>
        </div>

        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold">Compétences</h2>
            <ul className="space-y-2 text-sm text-black">
              {syllabus.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{item}</span>
                  <FaDownload className="cursor-pointer text-[#0049B7]" />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Modules</h2>
            <ul className="space-y-2 text-sm text-black">
              {modules.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{item}</span>
                  <FaDownload className="cursor-pointer text-[#0049B7]" />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

// programme
function PresentationProgrammeEtude() {
  return (
    <>
      <div className="py-7">
        <h1 className="text-4xl font-bold text-[#004a93]">
          <span className="border-b-4 border-[#004a93] py-2">To</span>us ce que
          vous devez savoir
        </h1>
        <ProgramInfo />
      </div>
    </>
  );
}
function PageBody() {
  return (
    <>
      <div className="container mx-auto">
        <PresentationFiliere />
        <OptionDisponible />
        <Programme />
      </div>
    </>
  );
}

function DetailsFiliere() {
  return (
    <Container>
      <PageBody />
    </Container>
  );
}

export default DetailsFiliere;
