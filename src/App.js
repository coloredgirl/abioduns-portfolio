import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/contact";
import MainPage from "./components/mainPage";
import Work from "./components/work";



function App() {
  return (
    <div className=' '>
      <NavBar />
      <MainPage />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
