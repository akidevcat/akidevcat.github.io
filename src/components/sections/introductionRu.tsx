import { Typewriter } from 'react-simple-typewriter'

export const Introduction = () => {
    return (
        <section id="introduction" className="section-slide-2">
            <div className="section-slide-2-content">
                <h1 className="title">Привет! Меня зовут <span className="">Аки</span></h1>
                <h1 className="fg-secondary">И я
                    <span className="fg-accent">
                        <Typewriter
                        words={[' Занимаюсь 3D Графикой', ' Создаю Уникальные Шейдеры', ' Составляю Сложный VFX', ' Нахожу Неочевидные Решения']}
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
                <h5 className="fg-primary d-inline-block me-2 mt-1 text-center align-middle">Хочешь узнать больше?</h5>
                <button type="submit" className="btn btn-outline-success rounded-pill" onClick={() => document.getElementById('about')?.scrollIntoView()}>Рада рассказать!</button>
                <br/>
                <br/>
                <br/>
                <a href="#contact"><h5 className="fg-accent d-inline-block me-2 mt-1 text-center align-middle">На данный момент я ищу работу в сфере разработки игр</h5></a>
            </div>
        </section>
    )
}

export default Introduction;