import { Tooltip } from "bootstrap";

export const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="row mb-4">
                    <h1 className="title md-5"><span className="title-counter">01.</span> Привет!</h1>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col d-grip pe-0">
                        <div className="col align-middle d-flex align-self-center" style={{height: "100%"}}>
                            <div className="container align-self-center" id="about-me-skills">
                                <span className="badge bg-success ms-1 me-0">Unity</span>
                                <span className="badge bg-success ms-1 me-0">Godot</span><br/>
                                <span className="badge bg-success ms-1 me-0">HLSL</span>
                                <span className="badge bg-success ms-1 me-0">GLSL</span><br/>
                                <span className="badge bg-success ms-1 me-0">C#</span>
                                <span className="badge bg-success ms-1 me-0">C++</span><br/>
                                <span className="badge bg-success ms-1 me-0">Shader Graph</span><br/>
                                <span className="badge bg-success ms-1 me-0">VFX Graph</span><br/>
                                <span className="badge bg-success ms-1 me-0">URP</span>
                                <span className="badge bg-success ms-1 me-0">SRP</span><br/>
                                <span className="badge bg-success ms-1 me-0">Графика</span>
                                <span className="badge bg-success ms-1 me-0">GPGPU</span><br/>
                                <span className="badge bg-success ms-1 me-0">3D Мат.</span>
                                <span className="badge bg-success ms-1 me-0">NSight</span><br/>
                                <span className="badge bg-success ms-1 me-0">RendDoc</span><br/>
                                <span className="badge bg-success ms-1 me-0">PS</span>
                                <span className="badge bg-success ms-1 me-0">Blender</span><br/>
                                <span className="badge bg-success ms-1 me-0">Git</span><br/><br/>
                                <span className="badge bg-secondary o-fg-primary ms-1 me-1"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 d-grip ps-0 mt-2 fg-primary" id="about-me-description">
                        <p className="mb-2">
                        Рада тебя здесь видеть! Меня зовут <i>Аки</i> <span className="badge bg-success fg-primary p-1 rounded-pill">она/её</span>, я являюсь <b>технической художницей</b> и <b>разработчицей графики</b>.
                        С помощью своих технических навыков мне нравится решать сложные задачки при разработке игр. И я обожаю создавать реально крутые штуки!
                        </p>
                        <ul className="nav justify-content-center" id="about-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link fg-accent active" id="about-gamedev-tab" data-bs-toggle="tab" data-bs-target="#about-gamedev" role="tab" aria-controls="about-gamedev" aria-selected="true">
                                    : : Техарт : :
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link fg-accent" id="about-web-tab" data-bs-toggle="tab" data-bs-target="#about-web" role="tab" aria-controls="about-web" aria-selected="true">
                                    : : Графика : :
                                    </a>
                            </li>
                        </ul>
                        <div className="tab-content mb-4" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="about-gamedev" role="tabpanel" aria-labelledby="about-gamedev-tab">
                                <p>
                                    В основном я работаю с <b>написанием шейдеров</b>, <b>созданием VFX</b>, <b>программированием графики</b>, <b>общей настройкой графики</b>, её <b>оптимизацией</b> и <b>отладкой</b>.
                                    В своих решениях я использую большое количество математики, чтобы приходить к более эффективным решениям - ниже можно взглянуть на мой проект под названием <b>Аналитический Объемный Туман</b>.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="about-web" role="tabpanel" aria-labelledby="about-web-tab">
                                <p>
                                    Больше всего меня вдохновляют <b>алгоритмы освещения (света)</b> и возможности, которые открываются в их усовершенствовании и стилизации.
                                    Иногда для демонстрации разных идей я использую <a href="https://www.shadertoy.com/profile/?show=shaders" className="fg-accent" target="_blank">Shadetoy</a>.
                                    В свободное время мне нравится экспериментировать с <b>Unreal Engine 5</b> и низкоуровневой <b>DirectX 12</b> графикой в целях создания собственного игрового движка.
                                    Кроме того я обожаю концепцию <b>рендеринга процедурного pixel-art'а</b>.
                                
                                </p>
                            </div>
                        </div>
                        {/* <p>
                        <b>Currently I'm not looking for a full-time remote job in the game development industry.</b>
                        </p> */}
                    </div>
                </div>
                <div className="row justify-content-center mt-2 mb-4 align-items-center">
                    <div className="col-md-3 d-grid mb-4 mt-4 d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-primary w-100" id="about-me-cv-button" onClick={() => window.open("/Aki Aoki Резюме.pdf", "_blank", 'noopener,noreferrer,download')}>Сохранить Резюме</button>
                    </div>
                    <div className="col-1 d-grid ms-3 me-4 mt-4 mt-md-0">
                        <a href="https://github.com/akidevcat" target="_blank"  data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-trigger="manual" title="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="col-1 d-grid ms-3 me-4 mt-4 mt-md-0">
                        <a href="https://t.me/aki_work" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-trigger="manual" title="Telegram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="col-1 d-grid ms-3 me-4 mt-4 mt-md-0">
                        <a href="https://hh.ru/resume/2e5311f4ff09adf4c70039ed1f51586f497536" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-trigger="manual" title="hh.ru">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="col-1 d-grid ms-3 me-4 mt-4 mt-md-0">
                        <a href="https://www.linkedin.com/in/aki-aoki-77a538220" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-trigger="manual" title="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="col-1 d-grid ms-3 me-4 mt-4 mt-md-0">
                        <a href="mailto:akidevcat@gmail.com" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-trigger="manual" title="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;