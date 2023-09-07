export default function Accesory ({accesory, image, headerColor}) {
    return (
        <section className="lading-section" data-header-color={ headerColor }>
            <div className="div-hero">
                <header className="hero-header">
                    <h1 h1 className="landing-title" data-header-color={ headerColor }>{accesory}</h1>
                </header>

                <footer className="model-footer">
                    <a className="hero-footer-a model-a" href="">
                        Ordena ahora
                    </a>
                    <a className="hero-footer-a" href="">
                        Mas informacion
                    </a>
                </footer>
            </div>
            <div className="div-video">
                <img className="model-image" src={image} alt="Accesory Image" />
            </div>
        </section>
    )
}