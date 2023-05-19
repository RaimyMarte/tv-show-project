import { useParams } from "react-router-dom"
import { Carousel, Footer, Loading, Navbar, SeriesEpisodes } from "../components"
import { useFetch } from "../hooks"


export const SeriePage = () => {
  const { id } = useParams()
  const { data, isLoading } = useFetch(`https://www.episodate.com/api/show-details?q=${id}`)
  const { tvShow } = !!data && data
  const { name, description, episodes, start_date, status, genres, rating, rating_count, network, country, image_path, pictures } = !!tvShow && tvShow


  return (
    <>
      <Navbar />
      {
        isLoading
          ? <Loading />
          :
          <>
            <div className="container" >
              <div className="row justify-content-center gx-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="col-md-6 col-lg-4 col-12 d-flex align-items-center mb-3">
                  <Carousel pictures={pictures} image_path={image_path} />
                </div>

                <div className="col-md-6 col-lg-8 col-12">
                  <h2>{name}</h2>
                  <p>{description}</p>
                  <hr />

                  <div className="row justify-content-center align-items-center g-3">
                    <div className="col-6">
                      <p><strong>Genres:</strong> {genres.toString().replaceAll(',', ' | ')}</p>
                      <p><strong>Station:</strong> {network} ({country})</p>
                      <p><strong>Rating:</strong> {parseFloat(rating).toFixed(2)}/10 from {rating_count} users</p>
                    </div>
                    <div className="col-6">
                      <p><strong>Status:</strong> {status}</p>
                      <p><strong>Start:</strong> {start_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SeriesEpisodes episodes={episodes} />
          </>
      }
      <Footer />
    </>
  )
}