import { NavLink } from "react-router-dom"
import { SearchForm } from "../Series"


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4 flex-shrink-0" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="https://static.episodate.com/logo-white.svg" alt="Episodate" width="90" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink
                            className='nav-item nav-link'
                            to="/"
                        >
                            Most Popular
                        </NavLink>
                    </div>
                    <SearchForm />
                </div>
            </div>
        </nav>
    )
}


