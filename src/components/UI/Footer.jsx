import { Link } from "react-router-dom"

export const Footer = () => {
  return (

    <footer className="d-flex flex-wrap justify-content-around align-items-center py-4 border-top bg-dark mt-4">

      <Link to="/" className="mb-3 me-2 mb-md-0">
        <img src="https://static.episodate.com/logo-white.svg" alt="Episodate" width="90" />
      </Link>

      <span className="mb-3 mb-md-0 text-white-50 text-center">© 2023 Episodate, Inc</span>

      <ul className="nav list-unstyled d-flex">
        <li className="ms-3"><a className="text-white-50" href="https://twitter.com/"><i className="bi bi-twitter"></i></a></li>
        <li className="ms-3"><a className="text-white-50" href="https://facebook.com/"><i className="bi bi-facebook"></i></a></li>
        <li className="ms-3"><a className="text-white-50" href="https://github.com/"><i className="bi bi-github"></i></a></li>
      </ul>
    </footer>

  )
}