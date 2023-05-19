import { EpisodesCard } from "./EpisodesCard";

export const SeriesEpisodes = ({ episodes }) => {
    const getAllEpisodesSeasons = episodes.map(serie => serie.season)
    const numberOfSeasons = Math.max(...getAllEpisodesSeasons);

    const numberOfSeasonsArray = Array.from({ length: numberOfSeasons }, (_, index) => index + 1);

    return (
        <div
            className="container"
            style={{ minHeight: '50vh' }}
        >
            <h2>Episodes</h2>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {
                    numberOfSeasonsArray.map((season) => (
                        <li className="nav-item" role="presentation" key={season}>
                            <button
                                className="nav-link"
                                id={`season${season}-tab`}
                                data-bs-toggle="tab"
                                data-bs-target={`#season${season}-tab-pane`}
                                type="button"
                                role="tab"
                                aria-controls={`season${season}-tab-pane`}
                                aria-selected="true"
                            >
                                Season {season}
                            </button>
                        </li>
                    ))
                }
            </ul>

            <div className="tab-content" id="myTabContent">
                {
                    numberOfSeasonsArray.map((season) => (
                        <div
                            key={season}
                            className="tab-pane fade"
                            id={`season${season}-tab-pane`}
                            role="tabpanel"
                            aria-labelledby={`season${season}-tab`}
                            tabIndex={`${season}`}
                        >
                            <EpisodesCard episodes={episodes.filter(episode => episode.season === season)} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}





