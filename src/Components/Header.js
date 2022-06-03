import { Link } from "react-router-dom";
import Logout from "./Logout";
import '../Components/Header.css';

function Header() {
    return (
        <header className="bg-light d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link link-secondary" aria-current="page" to="/">Diary</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link-secondary" aria-current="page" to="/categories">Categories</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link-secondary" aria-current="page" to="/about">About</Link>
                </li>
            </ul>
            <div className="col-md-3 text-end">
                <Logout />
            </div>
        </header>
    )
}

export default Header