import "./Navbar.css";
import profile from "../../assets/img/profile.png"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#">
                        <i className="fa fa-home"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-plus-square"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <img src={profile} alt="profile" />
                    </a>
                </li>
            </ul>
            <div className="navbar-text">راکوین</div>
        </nav>
    )
}