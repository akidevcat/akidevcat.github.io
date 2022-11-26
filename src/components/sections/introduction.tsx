import { Typewriter } from 'react-simple-typewriter'

export const Introduction = () => {
    return (
        <section id="introduction" className="section-slide-2">
            <div className="section-slide-2-content">
                <h1 className="title">Hi! I'm <span className="">Aki</span></h1>
                <h1 className="fg-secondary">And I
                    <span className="fg-accent">
                        <Typewriter
                        words={[' Make Games', ' Create ProcGen', ' Code Web Apps', ' Draw Pixel Art']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={30}
                        deleteSpeed={20}
                        delaySpeed={3000}
                        />
                    </span>
                </h1>
                <br/>
                <h5 className="fg-primary d-inline-block me-2 mt-1 text-center align-middle">Want to learn more?</h5>
                <button type="submit" className="btn btn-outline-success rounded-pill" onClick={() => {window.location.href = "#about"}}>Glad you asked!</button>
            </div>
        </section>
    )
}

export default Introduction;