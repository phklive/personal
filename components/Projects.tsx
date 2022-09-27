import { project } from "../utils/projects";
import Image from "next/image";

interface ProjectsProps {
  projects: project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div>
      <Project0
        images={projects[0].images}
        name={projects[0].name}
        text={projects[0].text}
        title={projects[0].title}
      />

      <Project1
        images={projects[1].images}
        name={projects[1].name}
        text={projects[1].text}
        title={projects[1].title}
      />

      <Project2
        images={projects[2].images}
        name={projects[2].name}
        text={projects[2].text}
        title={projects[2].title}
      />
    </div>
  );
};

const Project0: React.FC<project> = ({ images, name, text, title }) => {
  return (
    <div className="flex flex-col w-11/12 mx-auto">
      <div className="flex flex-row items-center justify-center">
        <Image src={images[0]} alt={title} width={600} height={1100} />
        <Image src={images[1]} alt={title} width={600} height={1100} />
        <Image src={images[2]} alt={title} width={600} height={1100} />
      </div>
      <div
        className={`flex flex-col items-center justify-center md:w-2/3 self-center`}
      >
        <h1 className="text-3xl font-bold text-white text-center">{name}</h1>
        <h1 className="text-2xl text-gray-400 text-center my-4">{title}</h1>
        <h1 className="text-2xl text-white">{text}</h1>
      </div>
    </div>
  );
};

const Project1: React.FC<project> = ({ images, name, text, title }) => {
  return (
    <div className="flex flex-col w-11/12 mx-auto mt-10">
      <div className="flex flex-row items-center justify-center">
        <Image src={images[0]} alt={title} width={600} height={600} />
        <Image src={images[1]} alt={title} width={600} height={600} />
      </div>
      <div
        className={`flex flex-col items-center justify-center md:w-2/3 self-center`}
      >
        <h1 className="text-3xl font-bold text-white text-center">{name}</h1>
        <h1 className="text-2xl text-gray-400 text-center my-4">{title}</h1>
        <h1 className="text-2xl text-white">{text}</h1>
      </div>
    </div>
  );
};

const Project2: React.FC<project> = ({ images, name, text, title }) => {
  return (
    <div className="flex flex-col w-11/12 mx-auto mt-10">
      <div className="flex flex-row items-center justify-center">
        <Image src={images[0]} alt={title} width={600} height={300} />
        <Image src={images[1]} alt={title} width={600} height={1000} />
      </div>
      <div
        className={`flex flex-col items-center justify-center md:w-2/3 self-center`}
      >
        <h1 className="text-3xl font-bold text-white text-center">{name}</h1>
        <h1 className="text-2xl text-gray-400 text-center my-4">{title}</h1>
        <h1 className="text-2xl text-white">{text}</h1>
      </div>
    </div>
  );
};

export default Projects;
