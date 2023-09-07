import "./Hero.css"

export default function Hero() {
    return (
        <section className="lading-section" data-header-color="white">
            <div className="div-hero">
                <header className="hero-header">
                    <h1 className="hero-title">Disfrute de Tesla</h1>
                    <p className="hero-description">Programe una prueba de conduccion hoy mismo</p>
                </header>

                <footer className="hero-footer">
                    <a className="hero-footer-a" href="">
                        Prueba de conduccion
                    </a>
                </footer>
            </div>
            <div className="div-video">
                <video autoPlay muted loop src="/public_video.webm"></video>
            </div>
        </section>
    )
}