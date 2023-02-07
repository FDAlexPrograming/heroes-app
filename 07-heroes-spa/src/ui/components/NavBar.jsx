import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

  return (
    <nav className="navbar navbar-expand bg-dark rounded">
        <div className="container-fluid">
            <div className="collapse navbar-collapse"  id="navbarNav">
                <ul className="navbar-nav">

                    <Link
                        className="navbar-brand" 
                        to="/"
                    >
                        Asociaciones
                    </Link>    

                    <li className="nav-item">
                        <NavLink
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                            to="marvel"
                        >
                            Marvel
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/dc"
                        >
                            DC
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/Search"
                        >
                            Search
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-info text-nowrap">
                    Alex Farias dos Santos
                </span>
                <button 
                    className="nav-item nav-link btn"
                    onClick={ onLogout }
                >
                    Logout
                </button>
            </ul>
        </div>
    </nav>
  )
}
