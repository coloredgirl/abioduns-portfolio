import NavBar from "./NavBar";
import Header from "./Header";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./contact";
import Skills from "./skills";



function App() {
  return (
    <Router>
      <div className="App">
         <NavBar /> 
        <div className="content">
          <Switch>
            <Route exact path="/">
              <>
              <Header />
               <About /> 
               <Skills />
               <Contact />
              </>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
