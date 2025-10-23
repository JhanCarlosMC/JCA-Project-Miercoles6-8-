import './styles/CardProject.css'

function CardProject({urlImg, altImg, titleCard,descriptionCard, urlProject}){
    return(
         <div className="card-project">
            <img className='card-project-img' src={urlImg} alt={altImg} />
            <h3>{titleCard}</h3>
            <p>{descriptionCard}</p>
            <a href={urlProject} target="_blank">Ver proyecto</a>
        </div>
    )
}

export default CardProject