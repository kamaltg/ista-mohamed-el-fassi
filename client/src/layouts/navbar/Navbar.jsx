import LogoHorizontal from "@/components/logo/LogoHorizontal";
import LogoVertical from "@/components/logo/LogoVertical";
import useMediaQuery from "@/hooks/useMediaQuery";
import Container from "@/layouts/Container";
import DesktopNavLinks from "@/layouts/navbar/DesktopNavLinks";
import MobileNavLinks from "@/layouts/navbar/MobileNavLinks";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(width >= 64rem)");
  const isVeryNarrow = useMediaQuery("(width <= 400px)");

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between gap-4 py-6">
          {isVeryNarrow ? <LogoVertical /> : <LogoHorizontal />}
          {isDesktop && <DesktopNavLinks />}

          {!isDesktop && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isOpen ? "bg-blue text-white" : "text-blue bg-transparent"} cursor-pointer rounded-md p-2 text-3xl`}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
        </div>
      </Container>
      {!isDesktop && <MobileNavLinks isOpen={isOpen} />}
    </nav>
  );
}

export default Navbar;
