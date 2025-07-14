import './home.css'
import React from "react";
import UserName from "../user-name/userNameForm";

const Home = () => {
    return (
        <div className="conteinerHomeDiv">
            <h1 className="iconicQuotesH1">ICONIC QUOTES</h1>
            <UserName/>
        </div>
    )
    
}
export default Home
    