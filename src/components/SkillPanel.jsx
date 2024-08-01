import { skills } from "../utils/skills";
import Skill from "./Skill";

export default function SkillPanel() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl sm:text-xl md:text-2xl text-blue-400 font-bold">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <Skill
            key={skill.title}
            icon={<i className={skill.icon}></i>}
            title={skill.title}
          />
        ))}
      </div>
    </div>
  );
}
