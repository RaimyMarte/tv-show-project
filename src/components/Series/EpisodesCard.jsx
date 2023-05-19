export const EpisodesCard = ({ episodes }) => {

    return (
        <div className="container mt-3">
            <div className="row g-2">
          
            {
                episodes.map(({ episode, name, season, air_date }) => (
                    <div className="card shadow-lg p-2 bg-body-tertiary rounded" key={episode}>
                        <div className="card-body">
                            <h5 className="card-title">Season {season} Episode {episode} - {name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Air Date: {air_date}</h6>
                        </div>
                    </div>
                ))
            }
                </div>
        </div>
    )
}