import imgG from "@/assets/images/NOS CONNAÎTRE/Man.png";
import imgF from "@/assets/images/NOS CONNAÎTRE/women.png";
import Container from "@/layouts/Container";

function Ambassadeurs() {
  const images = [imgG, imgF];
  const LesAmbassadeurs = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    nomC: "Nom PRÉNOM",
    filière: "filière",
    image: images[Math.floor(Math.random() * images.length)],
  }));
  return (
    <Container>
      <div className="container mx-auto">
        <p className="w-[90%] py-10 font-[18px]">
          Les ambassadeurs de l’ISTA MOHAMED EL FASSI jouent un rôle essentiel
          au sein de l’institut. Véritables relais entre l’administration et les
          stagiaires, ils contribuent activement à la vie de l’établissement.
          Ils participent à l’organisation d’événements, soutiennent la
          communication interne. Leur engagement est reconnu chaque fin d’année
          par la remise de certificats valorisant leur implication et leur
          esprit de leadership.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="rounded-1xl w-60 border-2 border-transparent bg-[#00904a] p-2 text-center text-white">
            Devenir Ambassadeur
          </a>
        </div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#004a93]">Ambassadeurs</h1>
          <div className="w-20 border-3 border-[#004a93]"></div>
        </div>
        <div className="mb-6 grid grid-cols-2 gap-x-3 gap-y-6 py-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {LesAmbassadeurs.map((person) => (
            <div
              key={person.id}
              className="relative h-[250px] w-[220px] bg-gray-100 shadow-md">
              <img
                src={person.image}
                alt={person.nomC}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-white/50 p-3 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-[#004a93]">
                  {person.nomC}
                </h3>
                <p className="text-xs text-black">{person.filière}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Ambassadeurs;
