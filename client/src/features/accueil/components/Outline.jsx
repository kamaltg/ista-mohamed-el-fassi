import Container from "@/layouts/Container";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  "https://www.sinpress.ma/wp-content/uploads/2023/06/inbound1940487853019975535.jpg",
  "https://static.lematin.ma/files/lematin/images/articles/2017/12/f29de8bdd60686a1befa99908ef749d6.jpg",
];

function Outline() {
  return (
    <Container>
      <section className="flex flex-col-reverse gap-8 lg:flex-row">
        <article className="basis-1/2">
          <div className="grid grid-cols-2 gap-2">
            <div className="row-span-2">
              <img className="h-full object-cover" src={images[0]} />
            </div>
            <div>
              <img src={images[1]} />
            </div>
            <div>
              <img src={images[2]} />
            </div>
          </div>
        </article>
        <article className="grid basis-1/2 gap-8">
          <div className="grid gap-4">
            <h2 className="text-blue text-4xl font-bold">
              À LA DECOUVERTE D’ISTA MOHAMED EL FASSI
            </h2>
            <p className="text-xl font-bold">
              Notre institut, notre engagement.
            </p>
            <div className="text-gray text-md space-y-2">
              <p>
                L’Institut Spécialisé de Technologie Appliquée Mohamed El Fassi
                d’Errachidia est un établissement public relevant de l’OFPPT.
              </p>
              <p>
                Il a p our mission de former des techniciens et des
                professionnels qualifiés, capables de répondre aux besoins du
                marché du travail et de contribuer au développement économique
                et social, au niveau région al et national.
              </p>
            </div>
          </div>

          <div className="group flex w-fit items-center gap-1 self-end text-2xl font-bold">
            <Link to="/presentation-etablissement">La suite</Link>
            <FontAwesomeIcon
              className="group-hover:translate-x-1.5"
              icon={faChevronRight}
            />
          </div>
        </article>
      </section>
    </Container>
  );
}

export default Outline;
