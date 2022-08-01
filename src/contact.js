import {FaGithub, FaLinkedin, FaDiscord, FaTwitter} from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";


const Contact = () => {
    return ( 
        <div className="footer" id="contact" >
            <h1> Contact me </h1>
            <h2> ...Lets code the world together...</h2>
            <a href={`mailto: abiodunpeace8@gmail.com`} >sayhello@peaceabiodun.com</a>

            <IconContext.Provider value={{size: "20px"}}>
              <div className="socials" style={{marginTop: "6px", gap: "6px"}}>
                  <a href="https://github.com/peaceabiodun"><FaGithub size={30} /></a>
                  <a href="https://www.linkedin.com/in/peaceabiodun"><FaLinkedin size={30} /></a>
                  <a href="discordapp.com/users/885180995945517066"><FaDiscord size={30} /></a>
                  <a href="https://twitter.com/_fine_peace_"><FaTwitter size={30} /></a>
                  <a href="{`mailto: abiodunpeace8@gmail.com`}"><MdEmail size={30} /></a>

              </div>
            </IconContext.Provider>
                <span className="last"> 
                  Made With <i>❤</i> by{" "}
                    <a href="https://github.com/peaceabiodun">Peace Abiodun</a>
                </span>

        </div>
     );
}
 
export default Contact;