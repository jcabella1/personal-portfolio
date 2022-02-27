import "./topnav.scss";
import { SiGitea } from "react-icons/si";

export default function TopNav({ menuOpen, setMenuOpen }) {
    return(
        <div className={"top-nav " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> <SiGitea /> </a>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen) }>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}