import React from "react";
import "../stylesheet/navStyle.css";
import { Link } from 'react-router-dom'; 
import logo from "../image/zijianLogo.png";

export default class Navbar extends React.Component{
    state = {

    };

    render() {
        return(
            <nav className="navbar" style={{color:"#1c2e4a"}}>
                <img src={logo} alt='logo' className="logo"></img>
                <a href="https://ong-zijian.github.io/zijian_personal_page/" className="home-name">Ong Zi Jian's Profile</a>
                <div className="navigation-menu">
                    <ul>
                        <li className="navigation-menu_li">
                            <Link to="/certs" className="link1">Certificates</Link>
                        </li>
                        <li className="navigation-menu_li">
                            <Link to="/projects" className="link1">Projects</Link>
                        </li>  
                        <li className="navigation-menu_li">
                        <a href="https://www.linkedin.com/in/ongzijian/" rel="noreferrer noopener" target="_blank">LinkedIn</a>
                        </li>
                        <li className="navigation-menu_end">
                        <a href="https://github.com/ong-zijian" rel="noreferrer noopener" target="_blank">GitHub</a>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }

    teleHandle(){
        alert("@ongzijian")
    }
    contact(){
        alert("School: zijian.ong.2021@scis.smu.edu.sg\nPersonal: ozj.bruce@gmail.com \nTelegram: @ongzijian")
    }
}

