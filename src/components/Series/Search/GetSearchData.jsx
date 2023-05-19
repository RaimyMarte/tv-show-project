import { useContext, useState } from "react"
import { SearchContext } from "../../../context/SearchContext"
import { useFetch } from "../../../hooks"
import { PaginationComponent, SeriesList } from "../.."
import { Results } from "./Results"

export const GetSearchData = () => {
  const { search } = useContext(SearchContext)
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading } = useFetch(`https://www.episodate.com/api/search?q=${search}&page=${currentPage}`)
  const { tv_shows } = !!data && data

  return (
    <>
      <Results search={search} total={data?.total} />
      <SeriesList isLoading={isLoading} tv_shows={tv_shows} />
      <PaginationComponent totalPages={data?.total} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

