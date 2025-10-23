import './styles/Navigation.css'

function Navigation(){
//Logica

    return(
    <header id="header">
        <div className="container">
            <h1>Portafolio</h1>
            <nav>
                <a href="#section-aboutme">Sobre Mí</a>
                <a href="#section-projects">Proyectos</a>
                <a href="#section-blog">Blog</a>
                <a href="#section-references">Referencias</a>
                <a href="#section-contact">Contacto</a>
            </nav>
        </div>
    </header>
    )
}

export default Navigation