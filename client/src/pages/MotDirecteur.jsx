import imageDirecteur from "@/assets/images/mot-directeur.png";

function MotDirecteur() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-[#00904a]">
        MOT DU DIRECTEUR
      </h2>

      <div className="relative mb-6 flex flex-col items-center">
        <img className="h-[370px] w-[370px]" src={imageDirecteur} alt="" />

        <h3 className="text-lg font-bold text-[#004a93]">Mohamed KARAOUI</h3>
        <p className="text-sm text-[#004a93]">
          Directeur de l’établissement ISTA Mohamed EL FASSI - ERRACHIDIA
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-4 text-justify text-base leading-7 text-gray-700">
        <p>
          C’est avec une grande fierté que je vous souhaite la bienvenue sur la
          plateforme officielle de l’Institut Spécialisé de Technologie
          Appliquée (ISTA) Mohamed El Fassi à Errachidia.
        </p>
        <p>
          Dans un monde en constante évolution, l’accès à l’information et aux
          services digitaux devient un levier essentiel pour le développement de
          la formation professionnelle. À travers ce site web, nous avons pour
          ambition de rapprocher davantage notre institut de ses stagiaires,
          formateurs, partenaires et futurs candidats.
        </p>
        <p>
          Vous y trouverez toutes les informations utiles concernant nos
          filières, nos programmes de formation, les actualités de l’institut,
          ainsi que des services pratiques tels que la consultation des emplois
          du temps, des notes ou encore les offres de stages et d’emplois.
        </p>
        <p>
          Notre objectif est de garantir une communication fluide, une meilleure
          organisation pédagogique et une visibilité renforcée de notre
          institut, en phase avec les exigences du marché de l’emploi.
        </p>
        <p>
          Je tiens à remercier l’ensemble des équipes pédagogiques et
          administratives qui œuvrent chaque jour pour offrir un encadrement de
          qualité à nos stagiaires, ainsi que tous ceux qui ont contribué à la
          réalisation de ce projet digital.
        </p>
        <p>
          Ensemble, continuons à bâtir un avenir professionnel solide pour nos
          jeunes.
        </p>
      </div>
    </div>
  );
}

export default MotDirecteur;
