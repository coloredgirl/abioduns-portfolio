

const Header = () => {
    return (
        <div className="header" id="home">
            <h2>
              Hi, I'm Peace
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
            <div className="detail">
                <h1 id="title">
                    I am a Frontend Software Developer 
                </h1>
                <p id="profile"> Skilled at writing well-optimized,
                    testable and reusable codes using relevant libraries and frameworks. 
                    Proficient in JavaScript with experience in React.js.  
                </p>
            </div>
            <button>
            <a href={`mailto: abiodunpeace8@gmail.com`}> 
                Reach out 
            </a>
            </button>


        </div>
    );
}
 
export default Header;
