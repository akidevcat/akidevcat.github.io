import CVContainer from "../components/cv/CVContainer";
import CVProgress from "../components/cv/CVProgress";
import Timeline from "../components/cv/Timeline";
import About from "../components/sections/about";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/experience";
import Introduction from "../components/sections/introduction";
import Works from "../components/sections/Works";
import '../styles/cv.scss'

function CV() {
    return (
      <div className="CV">
        <div className="page">
          <div className="jumbotron text-start">
            <h1 className="display-4">Aki Aoki</h1>
            <p className="lead">Game Developer & Graphics Engineer <span className="float-end small">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telegram ms-2 me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
              </svg>
              <span>aki_work</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-envelope-fill ms-2 me-2" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
              </svg>
              <span>akidevcat@gmail.com</span>
              </span>
            </p>
            <hr/>
            <p className="text-wrap">
            Hi, glad to see you here! My name is Aki <span className="badge cv-bg-secondary fg-primary p-1 rounded-pill">she/her</span>, <b>a technical artist</b>, <b>indie game developer</b>, and <b>graphics engineer</b>.
            I apply my technical skills to solve advanced development problems. And I really, really enjoy creating awesome things!</p>
          </div>
          <div className="row align-items-center">
            <div className="col ms-2 me-2">
              <div className="d-flex mt-3 mb-3">
                <CVContainer title="Hard Skills">
                  <div className="row ps-3 pe-3">
                    <div className="col">
                      <dl>

                        <dt className="lh-sm mb-1"><span className="cv-card-title-arrow">▼</span> TechArt / CG</dt>
                        <dd className="lh-lg"> 
                          <span className="badge shadow cv-bg-secondary">Unity / Godot</span><br/>
                          <span className="badge shadow cv-bg-secondary">SRP / URP</span><br/>
                          <span className="badge shadow cv-bg-secondary">3D Graphics</span><br/>
                          <span className="badge shadow cv-bg-secondary">GPGPU / PBR</span><br/>
                          <span className="badge shadow cv-bg-secondary">Shader / VFX Graph</span><br/>
                        </dd>

                        {/* <dt className="lh-sm mb-1"><span className="cv-card-title-arrow">▼</span> Databases</dt>
                        <dd className="lh-lg"> 
                          <span className="badge shadow cv-bg-secondary">MSSQL</span><br/>
                        </dd> */}

                        <dt className="lh-sm mb-1"><span className="cv-card-title-arrow">▼</span> More</dt>
                        <dd className="lh-lg"> 
                          <span className="badge shadow cv-bg-secondary">Git / Plastic</span><br/>
                          <span className="badge shadow cv-bg-secondary">Linux</span><br/>
                          <span className="badge shadow cv-bg-secondary">PS / Aseprite</span><br/>
                        </dd>

                      </dl>
                    </div>
                    <div className="col">
                      <dl>
      
                        <dt className="lh-sm mb-1"><span className="cv-card-title-arrow">▼</span> Languages</dt>
                        <dd className="lh-lg"> 
                          <span className="badge shadow cv-bg-secondary">HLSL / GLSL</span><br/>
                          <span className="badge shadow cv-bg-secondary">C# / C++</span><br/>
                          <span className="badge shadow cv-bg-secondary">Python</span><br/>
                        </dd>
      
                        <dt className="lh-sm mb-1"><span className="cv-card-title-arrow">▼</span> Theory</dt>
                        <dd className="lh-lg"> 
                          <span className="badge shadow cv-bg-secondary">3D / 2D Math</span><br/>
                          <span className="badge shadow cv-bg-secondary">Math Analysis</span><br/>
                          <span className="badge shadow cv-bg-secondary">Physics</span><br/>
                          <span className="badge shadow cv-bg-secondary">Lighting</span><br/>
                        </dd>
      
                      </dl>
                    </div>
                  </div>
                </CVContainer>
              </div>
              <div className="d-flex mt-3 mb-3">
                <CVContainer title="Hobbies">
                  <div className="lh-lg">
                    <span className="badge cv-point-badge ms-1 me-1">Narrative Games</span>
                    <span className="badge cv-point-badge ms-1 me-1">Drawing</span>
                    <span className="badge cv-point-badge ms-1 me-1">Pixel Art</span>
                    <span className="badge cv-point-badge ms-1 me-1">Piano / Guitar</span>
                    <span className="badge cv-point-badge ms-1 me-1">Volunteering</span>
                    <span className="badge cv-point-badge ms-1 me-1">Travelling</span>
                    <span className="badge cv-point-badge ms-1 me-1">Blog Writing</span>
                  </div>
                </CVContainer>
              </div>
              <div className="mt-3 mb-3">
                <CVContainer title="Languages">
                  <p className="mt-0 mb-2">Russian <span className="badge cv-point-badge ms-1 me-1">Native</span></p>
                  <CVProgress progressValue={100}/>
                  <p className="mt-2 mb-2">English <span className="badge cv-point-badge ms-1 me-1">C1</span></p>
                  <CVProgress progressValue={80}/>
                  {/* <p className="mt-2 mb-2">Japanese <span className="badge cv-point-badge ms-1 me-1">N5</span></p>
                  <CVProgress progressValue={10}/> */}
                </CVContainer>
              </div>
            </div>
            <div className="col ms-2 me-2">
              <div className="mt-3 mb-3">
                <CVContainer title="Projects">
                  <div className="container ps-0 ms-0 pe-0 me-0">
                    <div className="row text-center">
                      <div className="col ms-2 me-2 ps-0 pe-0">
                        <h6>Work Projects</h6>
                        <div className="shadow rounded cv-bg-secondary mt-2 mb-2 ps-2 pe-2">perelesoq TBA Game</div>
                        <div className="shadow rounded cv-bg-secondary mt-2 mb-2 ps-2 pe-2">Desktop & Console</div>
                      </div>
                      {/* <div className="col ms-2 me-2 ps-0 pe-0">
                        <h6>Web <br/>Apps</h6>
                        <div className="shadow rounded cv-bg-secondary mt-2 mb-2">BPM</div>
                        <div className="shadow rounded cv-bg-secondary mt-2 mb-2">CRM</div>
                        <div className="shadow rounded cv-bg-secondary mt-2 mb-2">WebApi</div>
                      </div> */}
                      <div className="col ms-2 me-2 ps-0 pe-0">
                        <h6>My Projects</h6>
                        <div className="shadow rounded cv-bg-secondary mt-2 mb-2 ps-2 pe-2">Melanoheliophobia</div>
                        <div className="shadow rounded cv-bg-secondary mt-2 mb-2 ps-2 pe-2">-</div>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-link-45deg me-1 ms-2" viewBox="0 0 16 16">
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </svg>
                        <span>akiaoki.github.io</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github me-2 ms-2" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        <span>Artstation</span>
                      </div>
                    </div>
                  </div>
                </CVContainer>
              </div>
              <div className="mt-3 mb-3">
                <CVContainer title="Work Experience">
                  <div className="container ps-0 ms-0 pe-0 me-0">
                    <Timeline elements={[
                      {"subtitle": "2023-Current", "title": "perelesoq", "description": "Unity Technical Artist"},
                      {"subtitle": "2022-2023", "title": "ELMA", "description": ".NET Full-Stack Developer"},
                      {"subtitle": "2021-2022", "title": "Matrix Creators", "description": "Unity C# Developer"}]}/>
                  </div>
                </CVContainer>
              </div>
              <div className="mt-3 mb-3">
                <CVContainer title="Activites / Education">
                  <div className="container ps-0 ms-0 pe-0 me-0">
                    <Timeline elements={[
                      {"subtitle": "2020-2022", "title": "Innopolis University", "description": "Computer Science"},
                      {"subtitle": "2017-2020", "title": "Highschool State Competitions", "description": "Computer Science / Robotics / Infosec"}]}/>
                  </div>
                </CVContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="position-fixed bottom-0 end-0 p-5 d-print-none" style={{"zIndex": 11}}>
          <button type="button" className="btn btn-secondary btn-print rounded-circle cv-bg-primary" onClick={() => {window.print()}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-printer cv-fg-primary" viewBox="0 0 16 16">
              <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
              <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
            </svg>
          </button>
        </div>

      </div>
    );
  }
  
  export default CV;