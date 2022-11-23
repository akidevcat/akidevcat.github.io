export const Works = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="row mb-4">
                    <h1 className="title md-5"><span className="title-counter">02.</span> My works</h1>
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
                        <span className="fg-accent">Planets Infinity</span> was one of the most interesting projects that was built all by myself from the ground.
                        </p>
                        <p>
                        The idea was to represent <b>full-scale</b> stellar bodies through procedural generation algorithms.
                        </p>
                        <div className="container-flex">
                            <span className="badge o-bg-primary fg-secondary">Unity</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">Shaders</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">Procgen</span>&ensp;
                        </div>
                    </div>
                </div>
                {/* Project Item End */}
                {/* Project Item */}
                <div className="row project-item-row align-items-stretch mt-2 mb-2">
                    <div className="col-md-4 project-item order-3 d-grip mb-2 mt-2 pb-2 pt-2 fg-primary text-start text-md-end o-bg-secondary shadow rounded">
                        <h2>Procedural Aurora</h2>
                        <p>
                        <span className="fg-accent">Procedural Aurora</span> is another example of what can be done with the help of math algorithms.
                        </p>
                        <p>
                        The project was published on Asset Store (currently discontinued).
                        </p>
                        <div className="container-flex">
                            <span className="badge o-bg-primary fg-secondary">Unity</span>&ensp;
                        </div>
                    </div>
                    <div className="col order-md-4 project-item-video d-grip pe-0 me-0 mb-2 mt-2">
                        <div className="ratio ratio-16x9">
                            <iframe className="shadow rounded" src="https://www.youtube.com/embed/FBEV0BuNrqA?rel=0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                {/* Project Item End */}
                {/* Project Item */}
                <div className="row project-item-row">
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
                </div>
                {/* Project Item End */}
                {/* Project Item */}
                <div className="row project-item-row">
                    <div className="col project-item d-grip me-md-2 mt-2 mb-2 b-3 pb-2 pt-2 fg-primary text-start shadow o-bg-secondary rounded">
                        <h2>Aki-Diary</h2>
                        <p>
                        <a href="https://github.com/akiaoki/Aki-Diary" target="_blank" className="fg-accent">Aki-Diary</a> was a concept of a telegram bot that would <b>heavily</b> simplify our highschool life by fetching timetable board from the school website.
                        </p>
                        <div className="container-flex mb-2">
                            <span className="badge o-bg-primary fg-secondary">Python</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">2019</span>&ensp;
                        </div>
                    </div>
                    <div className="col project-item d-grip ms-md-2 mt-2 mb-2 pb-2 pt-2 fg-primary text-start shadow o-bg-secondary rounded">
                        <h2>neuralowlexternal</h2>
                        <p>
                        <a href="https://github.com/akiaoki/neuralowlexternal" target="_blank" className="fg-accent">neuralowlexternal</a> is an experemental project that was focused on researching how human-like AI can be used integrating with game engines based on the popular game CS:GO.
                        </p>
                        <div className="container-flex mb-2">
                            <span className="badge o-bg-primary fg-secondary">C#</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">WinForms</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">WinAPI</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">2018</span>&ensp;
                        </div>
                    </div>
                </div>
                {/* Project Item End */}
                <div className="row align-items-center justify-content-center mt-4 mb-4">
                    <div className="col-md-3 d-grid" id="projects-more-button">
                        <button type="button" className="btn btn-outline-primary" onClick={() => window.open("https://github.com/akiaoki", "_blank", 'noopener,noreferrer')}>See more on GitHub</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;