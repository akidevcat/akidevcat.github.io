import About from "../components/sections/aboutRu";
import Contact from "../components/sections/ContactRu";
import Experience from "../components/sections/experienceRu";
import Introduction from "../components/sections/introductionRu";
import IntroductionRenderer from "../components/sections/introrender";
import Works from "../components/sections/WorksRu";

function HomeRu() {
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
  
  export default HomeRu;