import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import NavItems from "./Nav-Items";




const NavBar = () => {
    const [state, setState] =useState(false)

    return (
        <nav className="navbar">
            <h1>Portfolio</h1>
            <div className={`menu ${state?'dropDown' :""}`}> 
                <a href="#about">about</a>
                <a href="https://github.com/peaceabiodun" 
                style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px'
                 }} >work</a>
                <a href= "https://opensea.io/collection/rangeofangels">NFT project</a>
                <a href="#contact"> contact</a>
            </div>
                    <div className="ham" onClick= {() => setState(!state)}>
                        <FaBars />
                    </div>
            

        </nav> 
        
     );
}
 
export default NavBar;


