import PostCards from "@/features/accueil/components/PostCards";
import SectionHeading from "@/features/accueil/components/SectionHeading";
import Container from "@/layouts/Container";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const posts = [
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA 1",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations 2",
    school: "ISTA 2",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA 3",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA 4",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
  {
    category: "vie stagiaires",
    title: "Finale",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx93MSlEbYq6iWfZ52cVlmlkhXUsodqmAl2A&s",
  },
];

function RecentPosts() {
  return (
    <section>
      <Container>
        <SectionHeading
          icon={<FontAwesomeIcon icon={faClock} />}
          heading="Actualitéss"
        />

        <PostCards posts={posts} />
      </Container>
    </section>
  );
}

export default RecentPosts;
