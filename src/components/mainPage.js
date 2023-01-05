import 'animate.css';
import {FaGithub, FaLinkedin, FaTwitter,FaHtml5, FaCss3, FaJsSquare,
FaReact, FaGit, FaNode} from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const MainPage = () => {
    return (
        <div className='mx-7 my-5 flex flex-col h-[100%]'>
           
            <div>
                <h1 className='text-sm md:text-lg font-bold'>Frontend Engineer</h1>
            </div>

            <main>
                <div className='flex flex-col text-center items-center justify-center mt-[220px]'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Hi 👋, I'm Peace </h1>
                    <h2 className='text-sm md:text-lg'>I build responsive and well optimized software products.</h2>
                </div>
                <div className='flex flex-row items-center justify-center mt-3 gap-3 mb-[100px]' >
                    <a href="https://github.com/peaceabiodun"><FaGithub size={25} /></a>
                    <a href="https://www.linkedin.com/in/peaceabiodun"><FaLinkedin size={25} /></a>
                    <a href="https://twitter.com/_fine_peace_"><FaTwitter size={25} /></a>
                    <a href="mailto:abiodunpeace8@gmail.com"><MdEmail size={25} /></a>
                </div>
            </main>  


            <footer className=' fixed left-0 bottom-2 w-[100%] text-center flex flex-col py-2 justify-center items-center'>
            <span className='flex flex-row gap-3'>
                    <FaHtml5 size={30} />
                    <FaCss3 size={30} />
                    <FaReact size={30} />
                    <FaJsSquare size={30} />
                </span>
                <span className='flex flex-row gap-3 my-2 '>
                    <FaNode size={30} />
                    <FaGit size={30} />
                    <GrGraphQl size={30} />
                    <SiRedux size={30} />
                </span>
                <span className='text-sm flex justify-center items-center'>© 2023 peace abiodun </span>
            </footer>




        </div>
    );
}
 
export default MainPage;
