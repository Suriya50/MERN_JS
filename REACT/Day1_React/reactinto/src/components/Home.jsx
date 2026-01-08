


import photoos from "../assets/images/photo.png.jpeg";

const Home = () => {

    const intro = "Hi i'm Surya";
    const role = "Frontend developer";
    const skills =
        "I am passionate about building modern and responsive web applications. I specialize in creating user-friendly interfaces using HTML, CSS, JavaScript, and React. I enjoy turning ideas into interactive digital experiences with clean and efficient code.";

    return (
        <>
            <section id="home">

                <div className="homeparent">

                    <div className="hochild1">
                        <h1>{intro}</h1>
                        <h2>{role}</h2>
                        <h3>{skills}</h3>



                        <div className="social-links">

                            {/* GitHub */}
                            <a
                                href="https://github.com/Suriya50"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.8 2-1.2.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.6 11.6 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1 .8 2v3c0 .4.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/surya-s-132356357"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24V7.98h5V24H0zm7.5-16.02h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.9V24h-5v-7.6c0-1.8 0-4.2-2.6-4.2s-3 2-3 4.1V24h-5V7.98z" />
                                </svg>
                            </a>

                            {/* Email */}
                            <a href="mailto:suryazzx6@gmail.com">
                                <svg viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="www.instagram.com/itz_me__surya.s?"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zm4.75-7.95a1.05 1.05 0 1 0 1.05 1.05 1.05 1.05 0 0 0-1.05-1.05z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="hochild2">
                        <img src={photoos} alt="imagesss" />
                    </div>

                </div>
                <hr />

            </section>
        </>
    );
};

export default Home;
