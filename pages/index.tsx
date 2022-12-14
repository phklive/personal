import type { NextPage } from "next";
import { skills } from "../utils/skills";
import { projects } from "../utils/projects";
import { values } from "../utils/values";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Form from "../components/Form";
import Projects from "../components/Projects";
import Values from "../components/Values";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <h1 className="text-3xl md:text-5xl text-white text-center nabla my-14 mx-2">
        Programming is my passion, my art, my sword
      </h1>
      <Values values={values} />
      <h1 className="text-3xl md:text-5xl text-white text-center nabla my-14 mx-2">
        Ideas without action are worthless
      </h1>
      <Projects projects={projects} />
      <h1 className="text-3xl md:text-5xl text-white text-center nabla my-14 mx-2">
        These are my weapons and tools of choice for fullstack{" "}
        <span className="whitespace-nowrap">web2 & web3 </span>
        development
      </h1>
      <Skills skills={skills} />
      <h1 className="text-3xl md:text-5xl text-white text-center nabla my-14 mx-2">
        Let's change the world together
      </h1>
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
