import About from "../components/sections/about";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/experience";
import Introduction from "../components/sections/introduction";
import IntroductionRenderer from "../components/sections/introrender";
import Works from "../components/sections/Works";

function Home() {
    return (
      <div className="Home">
        <Introduction/>
        <IntroductionRenderer/>
        <About/>
        <Works/>
        <Experience/>
        <Contact/>
      </div>
    );
  }
  
  export default Home;