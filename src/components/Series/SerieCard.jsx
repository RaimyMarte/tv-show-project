import { Link } from "react-router-dom"

export const SerieCard = ({ id, name, network, image_thumbnail_path }) => {
    return (
        <div className="col" >
            <div className="card serie shadow-lg bg-body-tertiary rounded" >
                <Link to={`/serie/${id}`}>
                    <img
                        src={image_thumbnail_path}
                        className="img-fluid card-img-top"
                        alt={name}
                        style={{ height: '17rem' }}
                    />
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <p className="card-text"><small className="text-secondary">{network}</small></p>
                    </div>
                </Link>
            </div>
        </div>
    )
}