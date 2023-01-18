import React from "react";
import "../stylesheet/navStyle.css";
import logo from "../image/zijianLogo.png";

export default class Navbar extends React.Component{
    state = {

    };

    render() {
        return(
            <nav className="navi">
                <img src={logo} alt='logo' className="logo"></img>
                <a href="/" className="home-name">Ong Zi Jian's Profile</a>
                <div className="navigation-menu">
                    <ul>
                        <li>
                        <a href="/home">Home</a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/ongzijian/" rel="noreferrer noopener" target="_blank">LinkedIn</a>
                        </li>
                        <li>
                        <a href="https://github.com/ong-zijian?tab=projects" rel="noreferrer noopener" target="_blank">GitHub</a>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}

