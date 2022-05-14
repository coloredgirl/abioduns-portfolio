

const About = () => {
    return ( 
        <div className="about-section" id="about">

            <h2 className="big-text">Here is what I do</h2>

            <div className="about" >
                <img className="pic" src={require ("./image/pic.JPG") }alt="profile"></img>
            
                <div className="details">
                   
                    <p>
                        <i>❤</i>I Develop highly interactive webpages for web and 
                        mobile applications.
                        <br /><i>❤</i>I Design and develop user-facing features for software products.
                         <br /><i>❤</i>I write well-optimized, testable and reusable codes using relevant libraries
                          and frameworks.

                    </p>
               
                </div>
            </div>
            
        </div>
    
     );
}
 
export default About;