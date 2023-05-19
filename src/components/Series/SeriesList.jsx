
import { Loading } from "../UI"
import { SerieCard } from "./"

export const SeriesList = ({ isLoading, tv_shows }) => {
    return (
        <>
            {
                isLoading
                    ? <Loading />
                    :
                    <div className="container" style={{minHeight: '80vh'}}>
                        <div className="row row-cols-lg-5 row-cols-md-4 row-cols-2 g-3 g-lg-4 mb-3">
                            {
                                tv_shows.map(serie => (
                                    <SerieCard
                                        key={serie.id}
                                        {...serie}
                                    />
                                ))
                            }
                        </div>
                    </div>
            }
        </>
    )
}
