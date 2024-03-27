function HomePageCard({title, description, startDate}) {
    return (
        <div className="card">
          <img src="..." className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">{startDate}</small></p>
          </div>
        </div>
    )
}

export default HomePageCard