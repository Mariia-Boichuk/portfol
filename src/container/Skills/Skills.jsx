import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import { AppWrap } from "../../wrapper";

import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        <span> Skills &</span> Tools{" "}
      </h2>

      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={skill.icon} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Skills, "skills");
