import React from "react";
import "../stylesheet/navStyle.css";
import logo from "../image/zijianLogo.png";

export default class Navbar extends React.Component{
    state = {

    };

    render() {
        return(
            <nav className="navi" style={{color:"#1c2e4a"}}>
                <img src={logo} alt='logo' className="logo"></img>
                <a href="/" className="home-name">Ong Zi Jian's Profile</a>
                <div className="navigation-menu">
                    <ul>
                        <li>
                        <a onClick={() => this.teleHandle()} className="link1">Telegram Handle</a>
                        </li>
                        <li>
                        <a onClick={() => this.email()} className="link1">Email</a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/ongzijian/" rel="noreferrer noopener" target="_blank">LinkedIn</a>
                        </li>
                        <li>
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

