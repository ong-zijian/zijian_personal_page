import React from "react";
import "../stylesheet/navStyle.css";
import logo from "../image/zijianLogo.png";

export default class Navbar extends React.Component{
    state = {

    };

    render() {
        return(
            <nav className="navbar" style={{color:"#1c2e4a"}}>
                <img src={logo} alt='logo' className="logo"></img>
                <a href="/" className="home-name">Ong Zi Jian's Profile</a>
                <div className="navigation-menu">
                    <ul>
                        <li className="navigation-menu_li">
                        <a href="https://drive.google.com/file/d/1gXV2vEJJd-VCwFcA-rnq0cA6FccEbhVv/view?usp=sharing" rel="noreferrer noopener" target="_blank">Resume</a>
                        </li>
                        <li className="navigation-menu_li">
                        <a onClick={() => this.teleHandle()} className="link1">Telegram</a>
                        </li>
                        <li className="navigation-menu_li">
                        <a onClick={() => this.email()} className="link1">Email</a>
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
    email(){
        alert("School: zijian.ong.2021@scis.smu.edu.sg\nPersonal: ozj.bruce@gmail.com")
    }
}

