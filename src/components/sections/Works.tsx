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
                    <div className="col-sm-4 project-item d-grip mb-2 mt-2 pb-2 pt-2 fg-primary text-start o-bg-secondary shadow rounded">
                        <h2>Planets Infinity</h2>
                        <p>
                        <span className="fg-accent">Planets Infinity</span> was one of the most interesting projects that was built all by myself from the ground.
                        </p>
                        <p>
                        The idea was to represent <b>full-scale</b> stellar bodies through procedural generation algorithms.
                        </p>
                        <div className="container-flex">
                            <span className="badge o-bg-primary fg-secondary">Unity</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">ShaderLab</span>&ensp;
                        </div>
                    </div>
                </div>
                {/* Project Item End */}
                {/* Project Item */}
                <div className="row project-item-row align-items-stretch mt-2 mb-2">
                    <div className="col-sm-4 project-item order-3 d-grip mb-2 mt-2 pb-2 pt-2 fg-primary text-start text-sm-end o-bg-secondary shadow rounded">
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
                    <div className="col order-sm-4 project-item-video d-grip pe-0 me-0 mb-2 mt-2">
                        <div className="ratio ratio-16x9">
                            <iframe className="shadow rounded" src="https://www.youtube.com/embed/FBEV0BuNrqA?rel=0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                {/* Project Item End */}
                {/* Project Item */}
                <div className="row project-item-row">
                    <div className="col project-item d-grip me-sm-2 mt-2 mb-2 b-3 pb-2 pt-2 fg-primary text-start shadow o-bg-secondary rounded">
                        <h2>TaskManagerWebAPI</h2>
                        <p>
                        <a href="https://github.com/akiaoki/TaskManagerWebAPI" target="_blank" className="fg-accent">TaskManagerWebAPI</a> is a simple tasker Web API application I've made for the Akvelon internship.
                        </p>
                        <div className="container-flex mb-2">
                            <span className="badge o-bg-primary fg-secondary">ASP.NET Core</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">WebAPI</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">EF Core</span>&ensp;
                        </div>
                    </div>
                    <div className="col project-item d-grip ms-sm-2 mt-2 mb-2 pb-2 pt-2 fg-primary text-start shadow o-bg-secondary rounded">
                        <h2>CentreT-TelegramBot</h2>
                        <p>
                        <a href="https://github.com/akiaoki/CentreT-TelegramBot" target="_blank" className="fg-accent">CentreT-TelegramBot</a> is a telegram bot (currently in development) for the Centre-T group.
                        </p>
                        <div className="container-flex mb-2">
                            <span className="badge o-bg-primary fg-secondary">.NET Core</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">Telegram.Bot</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">EF Core</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">statemachine</span>&ensp;
                        </div>
                    </div>
                </div>
                {/* Project Item End */}
                {/* Project Item */}
                <div className="row project-item-row">
                    <div className="col project-item d-grip me-sm-2 mt-2 mb-2 b-3 pb-2 pt-2 fg-primary text-start shadow o-bg-secondary rounded">
                        <h2>Aki-Diary</h2>
                        <p>
                        <a href="https://github.com/akiaoki/Aki-Diary" target="_blank" className="fg-accent">Aki-Diary</a> was a concept of a telegram bot that would <b>heavily</b> simplify our highschool life by fetching timetable board from the school website.
                        </p>
                        <div className="container-flex mb-2">
                            <span className="badge o-bg-primary fg-secondary">Python</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">2019</span>&ensp;
                        </div>
                    </div>
                    <div className="col project-item d-grip ms-sm-2 mt-2 mb-2 pb-2 pt-2 fg-primary text-start shadow o-bg-secondary rounded">
                        <h2>neuralowlexternal</h2>
                        <p>
                        <a href="https://github.com/akiaoki/neuralowlexternal" target="_blank" className="fg-accent">neuralowlexternal</a> is an experemental project that was focused on researching how low-level programs can interact with game engines based on the popular game CS:GO.
                        </p>
                        <div className="container-flex mb-2">
                            <span className="badge o-bg-primary fg-secondary">.NET</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">WinForms</span>&ensp;
                            <span className="badge o-bg-primary fg-secondary">WinAPI</span>&ensp;
                        </div>
                    </div>
                </div>
                {/* Project Item End */}
                <div className="row align-items-center justify-content-center mt-4 mb-4">
                    <div className="col-3 d-grid">
                        <button type="button" className="btn btn-outline-primary" onClick={() => window.open("https://github.com/akiaoki", "_blank", 'noopener,noreferrer')}>See more on GitHub</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;