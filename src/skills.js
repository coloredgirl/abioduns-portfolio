import {FaHtml5, FaCss3, FaJsSquare, FaAngular,
    FaReact, FaGithub, FaGit, FaNode, FaNpm } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiRedux, SiTypescript , SiMysql} from "react-icons/si";
import { IconContext } from "react-icons";

const Skills = () => {
    return ( 
        <div>
             <IconContext.Provider value={{size: "30px" ,gap: "30px", color: 'blue'}}>
                <div className="logo">
                    <h2> Skills</h2>
                    <span className="icons">
                        < FaHtml5 style={{marginRight: "6px" }}/> <FaCss3 style={{marginRight: "6px" }} /> <FaJsSquare style={{marginRight: "6px" }} /> 
                        <FaAngular style={{marginRight: "6px" }} />
                        <FaReact style={{marginRight: "6px" }}/> <FaGithub style={{marginRight: "6px" }} /> <FaGit style={{marginRight: "6px" }}/> <FaNode style={{marginRight: "6px" }}/>
                        <br /><FaNpm style={{marginRight: "6px" }}/> <GrGraphQl style={{marginRight: "6px" }} /> <SiRedux style={{marginRight: "6px" }}/> <SiTypescript style={{marginRight: "6px" }}/>
                        <SiMysql style={{marginRight: "6px" }} />  
                    </span>
                </div>
                </IconContext.Provider>
        </div>
     );
}
 
export default Skills;