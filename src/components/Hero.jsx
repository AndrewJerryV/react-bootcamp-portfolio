import profileImage from '../my-image.png';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">
                        <span className="name-gradient">Andrew</span>
                        <span className="name-regular"> Jerry V</span>
                    </h1>
                    <div className="hero-title">
                        <span className="title-badge">Full Stack Developer</span>
                        <span className="title-divider">&</span>
                        <span className="title-badge">UI/UX Designer</span>
                    </div>
                    <p className="hero-description">
                        Passionate about creating elegant solutions through code and design.
                        I build modern web applications and craft intuitive user experiences
                        that make a difference.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-container">
                        <div className="hero-image-bg"></div>
                        <div className="hero-image-ring"></div>
                        <img
                            src={profileImage}
                            alt="Andrew Jerry V"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
