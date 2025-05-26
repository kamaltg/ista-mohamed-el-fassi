import LogoVertical from "@/components/logo/LogoVertical";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Container from "@/layouts/Container";

function MainFooter() {
  return (
    <section className="bg-blue py-14 text-white">
      <Container>
        <div className="divide-gray grid grid-cols-2 gap-4 space-y-8 divide-x-1 divide-dashed max-[400px]:grid-cols-1 max-[400px]:divide-none md:grid-cols-3">
          <div className="col-span-full flex h-full w-full items-center justify-center border-0 md:col-span-1 md:mb-0 md:border-r-1">
            <div className="max-w-fit">
              <div className="mb-4 border-b border-dashed pb-4">
                <LogoVertical height={64} />
              </div>
              <div className="px-10">
                <SocialMediaIcons />
              </div>
            </div>
          </div>

          <div className="flex h-full min-[400px]:justify-center md:items-center">
            <div className="text-left">
              <div className="mb-7 w-fit">
                <h4 className="text-lg font-medium">Liens utiles</h4>
                <div className="h-1 w-1/3 bg-white"></div>
              </div>
              <ul className="text-sm">
                <li className="mb-6">
                  <a href="#" className="text-gray-300 hover:text-white">
                    OFPPT Site Officiel
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="text-gray-300 hover:text-white">
                    MY WAY
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Altissia / OFPPT-Langues
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Scholar VOX
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex h-full min-[400px]:justify-center md:items-center">
            <div className="text-left">
              <div className="mb-7 w-fit">
                <h4 className="text-lg font-medium">Contacts</h4>
                <div className="h-1 w-1/3 bg-white"></div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <h6 className="font-bold">Adresse</h6>
                  <p>B.P. 528 Boutalamine 52000 Errachidia</p>
                </li>
                <li>
                  <h6 className="font-bold">Numéro de téléphone</h6>
                  <p>05 35 52 06 10 / 05 35 51 33 52 / 05 35 57 27 40</p>
                </li>
                <li>
                  <h6 className="font-bold">Email</h6>
                  <p>youssef.brnyoussef@ofppt.ma</p>
                </li>
                <li>
                  <h6 className="font-bold">Fax</h6>
                  <p>0535528832</p>
                </li>
                <li>
                  <h6 className="font-bold">Coordination</h6>
                  <p>ISBTP ERRACHIDIA/ DRCS</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainFooter;
