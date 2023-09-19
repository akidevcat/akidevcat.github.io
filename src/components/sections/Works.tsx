export const Works = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="row mb-4">
                    <h1 className="title md-5"><span className="title-counter">02.</span> Showcase</h1>
                </div>
                {/* Project Item */}
                <div className="row project-item-row align-items-stretch mt-2 mb-2">
                    <div className="col project-item-video d-grip ps-0 ms-0 mb-2 mt-2">
                        <div className="ratio ratio-16x9">
                            <iframe className="shadow rounded" src="https://www.youtube.com/embed/S3DBA0lohto?rel=0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-md-4 project-item d-grip mb-2 mt-2 pb-2 pt-2 fg-primary text-start o-bg-secondary shadow rounded">
                        <h2>Planets Infinity</h2>
                        <p>
                        <span className="fg-accent">Planets Infinity</span> was one of the most ambitious projects I've ever created that was built all by myself from the ground in Unity.
                        </p>
                        <p>
                        The idea was to represent <b>full-scale</b> stellar bodies through procedural generation algorithms.
                        </p>
                        <div className="container-flex">
                            <span className="badge o-bg-primary fg-secondary">Unity</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">Shaders</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">GPGPU</span>&ensp;
                        </div>
                    </div>
                </div>
                {/* Project Item End */}
                {/* Project Item */}
                <div className="row project-item-row align-items-stretch mt-2 mb-2">
                    <div className="col-md-4 project-item order-3 d-grip mb-2 mt-2 pb-2 pt-2 fg-primary text-start o-bg-secondary shadow rounded">
                        <h2>Unity AVF</h2>
                        <p>
                        <span className="fg-accent">Analytic Volumetric Fog</span> is a custom-designed render feature made for Unity as an alternative to the traditional raymarched volumetric fog.
                        </p>
                        <p>
                        Check out <a href="https://medium.com/@akidevcat/analytic-volumetric-lighting-9d02cc6a95c7" className="fg-accent" target="_blank">my article on Medium</a> (in Russian).
                        </p>
                        <div className="container-flex">
                            <span className="badge o-bg-primary fg-secondary">Unity</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">Shaders</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">Calculus</span>&ensp;
                        </div>
                    </div>
                    <div className="col order-md-4 project-item-video d-grip pe-0 me-0 mb-2 mt-2">
                        <div className="ratio ratio-16x9">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner shadow rounded">
                                    <div className="carousel-item active">
                                        <img src="images/image4.jpg" className="d-block w-100 object-fit-fill" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/image2.jpg" className="d-block w-100 object-fit-fill" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/image3.jpg" className="d-block w-100 object-fit-fill" alt="..."></img>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project Item End */}
                {/* Project Item */}
                {/* <div className="row project-item-row">
                    <div className="col project-item d-grip me-md-2 mt-2 mb-2 b-3 pb-2 pt-2 fg-primary text-start shadow o-bg-secondary rounded">
                        <h2>YumeScript</h2>
                        <p>
                        <a href="https://github.com/akiaoki/YumeScript" target="_blank" className="fg-accent">YumeScript</a> is an interpreted programming <b>narrative</b> langauge I started developing for my own games based on an adaptive backend and .NET as a core.
                        </p>
                        <div className="container-flex mb-2">
                            <span className="badge o-bg-primary fg-secondary">.NET</span>&ensp;
                        </div>
                    </div>
                    <div className="col project-item d-grip ms-md-2 mt-2 mb-2 pb-2 pt-2 fg-primary text-start shadow o-bg-secondary rounded">
                        <h2>Color Mood</h2>
                        <p>
                        <a href="https://github.com/akiaoki/Color-Mood" target="_blank" className="fg-accent">Color Mood</a> is a demo website introducing the idea of a palette search engine wrapper based on a third-party search service.
                        </p>
                        <div className="container-flex mb-2">
                            <span className="badge o-bg-primary fg-secondary">ASP.NET Core</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">WebApi</span>&ensp;
                        </div>
                    </div>
                </div> */}
                {/* Project Item End */}
                
                <div id="carouselExampleIndicators" className="row carousel slide mt-2 mb-2 pt-2 pb-2 shadow" data-bs-ride="carousel" data-bs-interval="false">
  <div className="carousel-indicators ms-0 me-0">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner rounded ps-0 pe-0 ratio ratio-16x9">
    <div className="carousel-item active">
      <img src="images/image0.jpg" className="d-block h-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block text-with-shadow">
        <h5>Stylized Volumetric Lighting</h5>
        <p>A real-time fake volumetric lighting shader I made using the power of geomtry shaders. Check <a href="https://medium.com/@akidevcat/volumetric-lighting-in-unity-using-shader-graph-463864ba5462" target="_blank" className="fg-accent">this tutorial</a> for more information!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/image6.jpg" className="d-block h-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block text-with-shadow">
        <h5>Point Cloud Rendering</h5>
        <p>A concept project dedicated to simulate lidar mechanics using the depth texture, compute shaders, and GPU buffers. Here's a small <a href="https://www.youtube.com/watch?v=TQctNeX9yuQ" target="_blank" className="fg-accent">demo</a>.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/image7.jpg" className="d-block h-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block text-with-shadow">
        <h5>Interactive Rainy Glass</h5>
        <p>Rain is fully procedurally generated accumulating over time. Glass can be "cleaned" using two "wiper" objects tracked with a custom collision algorithm. Be sure to take a look at this <a href="https://www.artstation.com/artwork/PXBVrn" target="_blank" className="fg-accent">video demo on ArtStation</a>!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/image1.jpg" className="d-block h-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block text-with-shadow">
        <h5>Cubemap Translucent Glass</h5>
        <p>Inspired by the glass bottle shader in Half-Life Alyx. There's no actual transparency - a cubemap box reprojection is used to create the illusion. Even better, the whole wall is a single quad drawn using occlusion mapping!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/image5.jpg" className="d-block h-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block text-with-shadow">
        <h5>City Lights VFX</h5>
        <p>Did you know that under specific atmospheric conditions, city lights can bee seen as "light pillars"? This is exactly the effect I managed to recreate in Unity. Moreover, it was baked into a single flipbook texture with my custom tool having no performance cost!</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

                <div className="row align-items-center justify-content-center mt-4 mb-4">
                    <div className="col-md-3 d-grid" id="projects-more-button">
                        <button type="button" className="btn btn-outline-primary" onClick={() => window.open("https://www.artstation.com/akidevcat", "_blank", 'noopener,noreferrer')}>See more on ArtStation</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;