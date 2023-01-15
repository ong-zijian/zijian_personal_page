import React from "react";
import "../stylesheet/navStyle.css"

export default class Navbar extends React.Component{
    state = {

    };

    render() {
        return(
            <nav className="navi">
                <a href="/" className="home-name">
                    Ong Zi Jian's Page
                </a>
                <div className="navigation-menu">
                    <ul>
                        <li>
                        <a href="/home">Home</a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/ongzijian/">LinkedIn</a>
                        </li>
                        <li>
                        <a href="https://github.com/ong-zijian?tab=projects">GitHub</a>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}

