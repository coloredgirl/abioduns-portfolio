 import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Portfoilio</h1>
            <div className="menu">
                <Link to="/about">about</Link>
                <Link to="/works" 
                style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px'
                 }} >works</Link>
                <Link to="/nft-project">NFT project</Link>
        
        
            </div>

        </nav> 
        
     );
}
 
export default NavBar;


