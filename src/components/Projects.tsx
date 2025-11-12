import { ProjectCard } from "./ProjectCard";
import neobankImage from "../assets/project-neobank.jpg";
import healthAppImage from "../assets/healthAppImage.jpg";
import spaceFashion from "../assets/spaceFashion.jpg";
import imusic from "../assets/imusic.jpg";
import solarEnergy from "../assets/solarEnergy.png";
import montaki from "../assets/montaki.png";

export const Projects = () => {
  const projects = [
    {
      title: "Montaki",
      subtitle: "Um jeito fácil de contratar.",
      image: montaki,
      year: "2025",
      link: "https://www.behance.net/gallery/238368699/Montaki",
    },
    {
      title: "Way Emergency",
      subtitle: "O aplicativo conecta informações pessoais do usuário a dispositivos, facilitando acesso rápido em emergências.",
      image: healthAppImage,
      year: "2024",
      link: "https://www.behance.net/gallery/209355359/App-de-Saude-UITober2024",
    },
    {
      title: "Space Fashion",
      subtitle: "Space Fashion oferece uma experiência móvel de compras online personalizada, prática e divertida.",
      image: spaceFashion,
      year: "2024",
      link: "https://www.behance.net/gallery/209254137/Space-Fashion-UITober2024",
    },
    {
      title: "IMusic",
      subtitle: "",
      image: imusic,
      year: "2023",
      link: "https://www.behance.net/gallery/165977517/Streaming-de-Musica-iMusic"
    },
    {
      title: "Energia Solar",
      subtitle: "",
      image: solarEnergy,
      link: "https://www.behance.net/gallery/165971441/Plataforma-de-Energia-Solar",
      year: "2023"
    },
    {
      title: "Neobank",
      subtitle: "",
      image: neobankImage,
      link: "https://www.behance.net/gallery/149635457/Neo-Bank-Digital-Banking",
      year: "2022"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              year={project.year}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};