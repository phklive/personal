import Image from "next/image";
import { skill } from "../utils/skills";

interface SkillsProps {
  skills: skill[];
}

interface SkillProps {
  skill: skill;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="w-11/12 mx-auto mb-10">
      <div className="grid grid-cols-3 gap-8">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.title} />
        ))}
      </div>
    </div>
  );
};

const Skill: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div className="col-span-1 flex flex-col items-center justify-center">
      <Image src={skill.image} alt={skill.title} width={50} height={50} />
      <h1 className="text-2xl text-white nabla mt-2">{skill.title}</h1>
    </div>
  );
};

export default Skills;
