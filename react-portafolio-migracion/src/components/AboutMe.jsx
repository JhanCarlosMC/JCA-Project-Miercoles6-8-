import ProfilePhoto from '../assets/FotoPerfil.jpg'
import './styles/AboutMe.css'


function AboutMe(){
    return(
        <section id="section-aboutme" className="section-container">
            <div className="container">
                <h2>Sobre Mí</h2>
                <div className="about-container">
                    <img src={ProfilePhoto} alt="Foto de Jhan Carlos" />
                    <div className="about-description">
                        <h3>Jhan Carlos Martínez Ceballos</h3>
                    <p><b>Ingeniero de Sistemas y Computación</b>, apasionado por el desarrollo de software, con experiencia en múltiples proyectos enfocados en el desarrollo de aplicaciones Android, aplicaciones web con JavaScript, aplicaciones locales con Java y otros tipos de software, así como en estudios de usabilidad y pruebas de usuario. Soy investigador del grupo de investigación SINFOCI de la Universidad del Quindío y participo activamente en el desarrollo de soluciones tecnológicas innovadoras, enfocándome en la creación de aplicaciones funcionales, el prototipado rápido y la garantía de la mejor experiencia de usuario mediante pruebas detalladas.</p>
                </div>
                <div className="skills">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>Java</li>
                        <li>GAS</li>
                        <li>Python</li>
                        <li>HCI</li>
                        <li>UX</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutMe