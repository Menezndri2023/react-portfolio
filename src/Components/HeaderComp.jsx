import React from "react";
import avatar from "../assets/images/avatar.png";
import { FacebookOutlined, LinkedinOutlined, GithubOutlined, MessageOutlined } from "@ant-design/icons";
import CallButton from "./CallButton";


const HeaderComp = () =>{
      return (
            <header>
            <div className="left">
                  <img src={avatar} alt="" />
            <div className="user-info">
                  <h1>N'dri N'guessan Manasse</h1>
                  <br />
                  <h3>Developpeur Web React- Junior</h3>
            <div className="contacts">
            <div className="contact-item">
            <FacebookOutlined/>
            </div>
            <div className="contact-item">
            <LinkedinOutlined/>
            </div>
            <div className="contact-item">
            <GithubOutlined/>
            </div>
            </div>
            </div>
            </div>
            <div className="right">
            <button className="contact-btn">
                  <CallButton />
                  </button>


            </div>
            </header>
      )
}
export default HeaderComp;