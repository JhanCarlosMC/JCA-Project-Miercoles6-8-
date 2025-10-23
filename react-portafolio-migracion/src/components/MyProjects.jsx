import './styles/MyProjects.css'
import CardProject from './CardProject'

import imgProjectUno from '../assets/img-paginaweb.png'
import imgProjectDos from '../assets/img-android.png'



function MyProjects(){
    return(
    <section id="section-projects" className="section-container">
        <div className="container">
                <h2>Proyectos</h2>
                <div id="container-projects">

                    <CardProject 
                        urlImg={imgProjectUno}
                        altImg = "Captura de Portafolio Web"
                        titleCard = "Portafolio Web"
                        descriptionCard="Página web con HTML, CSS y JS, que muestra un portafolio virtual."
                        urlProject="https://github.com/JhanCarlosMC/JCA-ProjectGit-Sabado4-6"
                    />

                    <CardProject 
                        urlImg={imgProjectDos}
                        altImg = "ProjectNameAndroid"
                        titleCard = "ProjectNameAndroid"
                        descriptionCard="Aplicación Android con Java, que muestra un portafolio virtual."
                        urlProject="https://github.com/JhanCarlosMC/JCA-ProjectGit-Sabado4-6"
                    />

                    <CardProject 
                        urlImg={imgProjectUno}
                        altImg = "Captura de Portafolio Web"
                        titleCard = "Portafolio Web"
                        descriptionCard="Página web con HTML, CSS y JS, que muestra un portafolio virtual."
                        urlProject="https://github.com/JhanCarlosMC/JCA-ProjectGit-Sabado4-6"
                    />

                </div>
            </div>
    </section>
    )
}
export default MyProjects