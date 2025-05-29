import { fade, RevealOnScroll, zoomIn } from "@/animations";
import Carousel from "@/features/accueil/components/Carousel";
import LinkCards from "@/features/accueil/components/LinkCards";
import Numbers from "@/features/accueil/components/Numbers";
import Offers from "@/features/accueil/components/Offers";
import Outline from "@/features/accueil/components/Outline";
import Partners from "@/features/accueil/components/Partners";
import RecentPosts from "@/features/accueil/components/RecentPosts";
import usePageTitle from "@/hooks/usePageTitle";

const slides = [
  {
    image:
      "https://www.snaeia.com/uploads/ueditor/20230821/1-230R11152101Z.png",
    title: "China North Africa Competition with OFPPT",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit, est porro enim molestias incidunt iusto ipsum ab temporibus perspiciatis itaque odit quo esse nisi fuga maiores et ex animi repudiandae deleniti dolorem minima ad. Consequatur voluptates unde eum doloremque vitae aperiam possimus veniam. Officiis quasi nulla, unde aliquam non accusantium libero ducimus in similique quibusdam. Vel tempora perferendis iusto eveniet sit velit deleniti molestias consequatur voluptates, quis enim asperiores aliquid temporibus, reiciendis corporis quas? Voluptatem incidunt labore quae qui pariatur autem at hic molestias libero quo, iusto sit, rem cumque. Modi id unde tempora distinctio necessitatibus eveniet non fugiat.",
  },
  {
    image:
      "https://www.ofppt.ma/sites/default/files/styles/thumbnail_page_detail/public/photos_actualites/examens-fin-d-annee-octobre-2020.jpeg?itok=cF5tw_Qg",
    title: "Les calendriers des Fin de formations",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit, est porro enim molestias incidunt iusto ipsum ab temporibus perspiciatis itaque odit quo esse nisi fuga maiores et ex animi repudiandae deleniti dolorem minima ad. Consequatur voluptates unde eum doloremque vitae aperiam possimus veniam. Officiis quasi nulla, unde aliquam non accusantium libero ducimus in similique quibusdam. Vel tempora perferendis iusto eveniet sit velit deleniti molestias consequatur voluptates, quis enim asperiores aliquid temporibus, reiciendis corporis quas? Voluptatem incidunt labore quae qui pariatur autem at hic molestias libero quo, iusto sit, rem cumque. Modi id unde tempora distinctio necessitatibus eveniet non fugiat.",
  },
  {
    image:
      "https://www.ofppt.ma/sites/default/files/styles/thumbnail_home_slider/public/photos_actualites/SLIDER%20PAGE%20D%27ACCUEIL%20-%20C%C3%A9l%C3%A9bration%20du%20talent%20culinaire%20%C3%A0%20la%205e%20%C3%A9dition%20du%20concours%20national%20en%20arts%20culinaires%20%C2%AB%20Tyab%20Bladna%20%C2%BB.png?itok=iCcYIsCl",
    title:
      "Célébration du talent culinaire à la 5e édition du concours national en arts culinaires « Tyab Bladna »",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit, est porro enim molestias incidunt iusto ipsum ab temporibus perspiciatis itaque odit quo esse nisi fuga maiores et ex animi repudiandae deleniti dolorem minima ad. Consequatur voluptates unde eum doloremque vitae aperiam possimus veniam. Officiis quasi nulla, unde aliquam non accusantium libero ducimus in similique quibusdam. Vel tempora perferendis iusto eveniet sit velit deleniti molestias consequatur voluptates, quis enim asperiores aliquid temporibus, reiciendis corporis quas? Voluptatem incidunt labore quae qui pariatur autem at hic molestias libero quo, iusto sit, rem cumque. Modi id unde tempora distinctio necessitatibus eveniet non fugiat.",
  },
  {
    image:
      "https://lereporterexpress.ma/wp-content/uploads/2021/07/CMC-Marrakech-.jpg",
    title: "Le debut de construction de CMC Errachidia",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit, est porro enim molestias incidunt iusto ipsum ab temporibus perspiciatis itaque odit quo esse nisi fuga maiores et ex animi repudiandae deleniti dolorem minima ad. Consequatur voluptates unde eum doloremque vitae aperiam possimus veniam. Officiis quasi nulla, unde aliquam non accusantium libero ducimus in similique quibusdam. Vel tempora perferendis iusto eveniet sit velit deleniti molestias consequatur voluptates, quis enim asperiores aliquid temporibus, reiciendis corporis quas? Voluptatem incidunt labore quae qui pariatur autem at hic molestias libero quo, iusto sit, rem cumque. Modi id unde tempora distinctio necessitatibus eveniet non fugiat.",
  },
];

function Accueil() {
  usePageTitle("Accueil");

  return (
    <div className="mb-28 space-y-24">
      <RevealOnScroll delay={0.5} variant={fade}>
        <Carousel slides={slides} />
      </RevealOnScroll>

      <RevealOnScroll>
        <LinkCards />
      </RevealOnScroll>

      <RevealOnScroll>
        <RecentPosts />
      </RevealOnScroll>

      <RevealOnScroll>
        <Outline />
      </RevealOnScroll>

      <RevealOnScroll variant={fade}>
        <Offers />
      </RevealOnScroll>

      <RevealOnScroll>
        <Numbers />
      </RevealOnScroll>

      <RevealOnScroll variant={zoomIn}>
        <Partners />
      </RevealOnScroll>
    </div>
  );
}

export default Accueil;
