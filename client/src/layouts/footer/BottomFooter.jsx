import Container from "@/layouts/Container";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function BottomFooter() {
  return (
    <section className="bg-green py-2 text-center text-white">
      <Container>
        <div className="flex flex-col items-center justify-center font-light lg:flex-row lg:justify-between">
          <span className="text-sm">
            ©{" "}
            <Link to="/">
              Institut Spécialisé de Technologie Appliquée Mohamed El Fassi
              Errachidia
            </Link>{" "}
            2025.{" "}
            <span className="group">
              Made with{" "}
              <span className="group-hover:text-red-500">
                <FontAwesomeIcon icon={faHeart} />
              </span>{" "}
              by{" "}
              <span className="font-bold group-hover:text-red-500">
                Kamal TAGHLAOUI
              </span>{" "}
              &{" "}
              <span className="font-bold group-hover:text-red-500">
                Otmane ELOUASSOULI
              </span>
            </span>
            .
          </span>
          <div className="mt-4 mr-60 flex space-x-4 hover:underline sm:justify-center lg:mt-0">
            <Link to="/plan-de-site">Plan de site</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BottomFooter;
