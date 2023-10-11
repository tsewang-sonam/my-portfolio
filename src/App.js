import Navbar from "./components/Navbar/navbar";
import Mainpage from "./components/Mainpage/mainpage";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/contact";
import Education from "./components/Education/education";
import Skills from "./components/MySkills/myskills";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainpage />
      <Skills />
      <Education/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
