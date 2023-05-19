import { useState } from "react"
import { Navbar, SeriesList, PaginationComponent, Footer } from "../components"
import { useFetch } from "../hooks"

export const MainPage = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useFetch(`https://www.episodate.com/api/most-popular?page=${currentPage}`)
  const { tv_shows } = !!data && data


  return (
    <>
      <Navbar />
      <SeriesList isLoading={isLoading} tv_shows={tv_shows} />
      <PaginationComponent totalPages={data?.total} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer/>
    </>
  )
}

