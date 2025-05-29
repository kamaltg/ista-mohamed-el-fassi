import SectionHeading from "@/features/accueil/components/SectionHeading";
import Container from "@/layouts/Container";
import { IoIosBusiness } from "react-icons/io";

const companies = [
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
  },
  {
    name: "Oracle",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
  },
  {
    name: "Bank of Africa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Bank_of_Africa_Logo.png",
  },
  {
    name: "Amazon",
    logo: "https://pngimg.com/d/amazon_PNG24.png",
  },
];

function Partners() {
  return (
    <Container>
      <SectionHeading heading=" Nos partenaires" icon={<IoIosBusiness />} />
      <div className="group inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_green_128px,_green_calc(100%-200px),transparent_100%)] py-5">
        <ul className="animate-infinite-scroll flex items-center justify-center group-hover:[animation-play-state:paused] md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {companies.map((company, index) => (
            <li key={index}>
              <img
                className="grayscale filter transition-colors duration-300 hover:grayscale-0"
                width="210px"
                src={company.logo}
                alt={company.name}
              />
            </li>
          ))}
        </ul>
        <ul
          className="animate-infinite-scroll flex items-center justify-center group-hover:[animation-play-state:paused] md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          aria-hidden="true">
          {companies.map((company, index) => (
            <li key={index}>
              <img
                className="grayscale filter transition-colors duration-300 hover:grayscale-0"
                width="210px"
                src={company.logo}
                alt={company.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Partners;
