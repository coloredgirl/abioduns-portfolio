import 'animate.css';
import { SiTypescript } from "react-icons/si";
import {FaGithub, FaLinkedin, FaTwitter,FaHtml5, FaCss3, FaJsSquare,
FaReact, FaNode} from "react-icons/fa"
import { BsGithub } from "react-icons/bs";
import { MdEmail, MdCss } from "react-icons/md";
import { SiTailwindcss} from "react-icons/si";

const MainPage = () => {
    return (
        // <div className='flex h-[80%] justify-center items-center '>
        //     <div className=''>
           
        //     <main  className='flex flex-col justify-center items-start '>
        //         <h1 className='text-sm md:text-lg font-semibold'>Frontend Engineer</h1> 
        //         <h1 className='text-2xl md:text-4xl font-bold mb-1'>Hi 👋, I'm Peace </h1>
        //         <h2 className='text-sm md:text-lg m-0'>I build responsive and well optimized software products.</h2>

        //         <div className='flex flex-wrap items-center justify-center mt-3 gap-3' >
        //             <a href="https://github.com/peaceabiodun"><FaGithub size={25} /></a>
        //             <a href="https://www.linkedin.com/in/peaceabiodun"><FaLinkedin size={25} /></a>
        //             <a href="https://twitter.com/_fine_peace_"><FaTwitter size={25} /></a>
        //             <a href="mailto:abiodunpeace8@gmail.com"><MdEmail size={25} /></a>
        //         </div>
        //     </main>  


        //     <div className='flex flex-col justify-center items-center h-[20vh] w-[100%] fixed left-0 bottom-2 '>

        //         <span className='flex flex-row gap-3'>
        //             <div>
        //                 <FaHtml5 id='icon' size={30} className='cursor-pointer' />
        //                 <p id='show' className='hidden top-[-15px] text-xs font-semibold text-center absolute z-10 cursor-pointer bg-white border-2 rounded-lg p-2'>html5</p>
        //             </div>
        //             <div>
        //                 <SiTailwindcss id='icon' size={30} className='cursor-pointer'  />
        //                 <p id='show' className='hidden top-[-15px] text-xs font-semibold text-center absolute z-10 cursor-pointer bg-white border-2 rounded-lg p-2'>Tailwindcss</p>
        //             </div>
        //             <div>
        //                 <FaReact id='icon' size={30} className='cursor-pointer'  />
        //                 <p id='show' className='hidden top-[-15px] text-xs font-semibold text-center absolute z-10 cursor-pointer bg-white border-2 rounded-lg p-2'>React.js</p>
        //             </div>
        //             <div>
        //                 <FaJsSquare id='icon' size={30} className='cursor-pointer'  />
        //                 <p id='show' className='hidden top-[-15px] text-xs font-semibold text-center absolute z-10 cursor-pointer bg-white border-2 rounded-lg p-2'>JavaScript</p>
        //             </div>

        //         </span>

        //         <span className='flex flex-row gap-3 my-2 '>
        //             <div>
        //                 <FaNode  id='icon' size={30} className='cursor-pointer'  />
        //                 <p id='show' className='hidden top-6 text-xs font-semibold text-center absolute z-10 cursor-pointer bg-white border-2 rounded-lg p-2'>Node</p>
        //             </div>
        //             <div>
        //                 <FaGit  id='icon' size={30} className='cursor-pointer'  />
        //                 <p id='show' className='hidden top-6 text-xs font-semibold text-center absolute z-10 cursor-pointer bg-white border-2 rounded-lg p-2'>Git</p>
        //             </div>
        //             <div>
        //                 <GrGraphQl  id='icon' size={30} className='cursor-pointer'  />
        //                 <p id='show' className='hidden top-6 text-xs font-semibold text-center absolute z-10 cursor-pointer bg-white border-2 rounded-lg p-2'>GraphQL</p>
        //             </div>
        //             <div>
        //                 <SiRedux  id='icon' size={30} className='cursor-pointer'  />
        //                 <p id='show' className='hidden top-6 text-xs font-semibold text-center absolute z-10 cursor-pointer bg-white border-2 rounded-lg p-2'>Redux</p>
        //             </div>
        //         </span>

        //         <span className='text-sm flex justify-center items-center'>© 2023 peace abiodun </span>
        //     </div>


        //     </div>

        // </div>
        <div >
            <div className='p-10'>
                <div className='h-[60vh] flex flex-col justify-center'>
                    <h3 className='text-[16px] font-bold'>Peace Abiodun</h3>
                    <h1 className='text-3xl font-bold my-2'>Frontend Engineer</h1>
                    <p className='text-xs sm:text-sm'>And ofcourse, I made this myself!</p>
                </div>

                <div className='border-y'>
                    <div className='hidden sm:flex py-6 justify-between gap-2'>
                        <FaJsSquare size={30} />
                        <SiTypescript size={28} className='rounded-sm'/>
                        <FaReact size={30} />
                        <SiTailwindcss size={34} />
                        <p className='font-bold flex items-center'>CSS</p>
                        <p className='font-bold flex items-center'>API</p>
                        <BsGithub size={30}/>
                        <FaNode size={36} />
                    </div>

                    <div  className='py-6 flex flex-col sm:hidden gap-3' >
                        <div className='flex justify-between'>
                            <FaJsSquare size={30} />
                            <SiTypescript size={28} className='rounded-sm'/>
                            <FaReact size={30} />
                            <SiTailwindcss size={34} />
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-bold flex items-center'>CSS</p>
                            <p className='font-bold flex items-center'>API</p>
                            <BsGithub size={30}/>
                            <FaNode size={36} />
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}
 
export default MainPage;
