import "./Model.css"

export default function Model ({model, image, headerColor}) {
    return(
        <section className="lading-section" data-header-color={ headerColor }>
            <div className="div-hero">
                <header className="hero-header">
                    <h1 h1 className="landing-title" data-header-color={ headerColor }>{model}</h1>
                    <p>Concertar prueba de conduccion</p>
                </header>

                <footer className="model-footer">
                    <a className="hero-footer-a model-a" href="">
                        Explorar Inventario
                    </a>
                    <a className="hero-footer-a" href="">
                        Pedido Personalizado
                    </a>
                </footer>
            </div>
            <div className="div-video">
                <img className="model-image" src={image} alt="Modelo Y" />
            </div>
        </section>
    )
}