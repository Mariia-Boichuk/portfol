import React from "react";
import { FaSass, FaCss3, FaJs, FaHtml5, FaReact } from "react-icons/fa";
import { AiFillQqCircle } from "react-icons/ai";

const tools2 = [<FaSass />, <FaJs />];
const SocialMedia = ({ tools }) => (
  <div className="app__social">
    {tools?.map((it, key) => (
      <div key={key}>{it}</div>
    ))}
    <div>
      <FaReact />
    </div>
    <div>
      <FaCss3 />
    </div>
    <div>
      <FaJs />
    </div>
    <div>
      <FaHtml5 />
    </div>

    {console.log(tools, "jjjj")}
    {console.log(tools2, "jjjj2")}
  </div>
);

export default SocialMedia;
