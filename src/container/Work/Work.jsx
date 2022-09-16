import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Work.scss";
import { works } from "../../data/works";
import { AppWrap, MotionWrap } from "../../wrapper";
import { SocialMedia } from "../../components";

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span>
      </h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={work.name}>
            <div className="app__work-gallery">
              <div className="app__work-img app__flex">
                <img src={work.imgUrls[0]} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="app__work-img">
                <img src={work.imgUrls[1]} alt={work.name} />
              </div>
              <div className="app__work-img">
                <img src={work.imgUrls[2]} alt={work.name} />
              </div>
            </div>

            <div className="app__work-content ">
              <h4 className="bold-text">{work.title}</h4>
              <p
                className="p-text app__work-content-text"
                style={{ marginTop: 10 }}
              >
                {work.description}
              </p>

              <SocialMedia tools={work.tools} />
              <div className="app__work-filter">
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <div className="app__work-filter-item app__flex p-text ">
                    See it here
                  </div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <div className="app__work-filter-item app__flex p-text ">
                    See the repo
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__whitebg");
