export const Carousel = ({ pictures = [], image_path }) => {
    return (
        <div id="carouselIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                {
                    pictures.map(img => (
                        <button key={pictures.indexOf(img)} type="button" data-bs-target="#carouselIndicators" data-bs-slide-to={pictures.indexOf(img) + 1} aria-label={pictures.indexOf(img) + 2}></button>
                    ))
                }
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image_path} className="img-fluid rounded" />
                </div>
                {
                    pictures.map(img => (
                        <div key={pictures.indexOf(img)} className="carousel-item">
                            <img src={img} className="img-fluid rounded" style={{ minWidth: '332px' }} />
                        </div>
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}