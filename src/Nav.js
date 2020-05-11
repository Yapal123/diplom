import React from "react";
import {Link} from "react-router-dom";
import "./css/App.css";

class Nav extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return (
          <div className="content-container">
            <div className="menu">
              <Link to="/">
                <div className="menu-item">
                  <span>Новости</span>
                </div>
              </Link>
              <Link to="/about">
                <div className="menu-item">
                  <span>О кафедре</span>
                </div>
              </Link>
              <Link to="/abit">
                <div className="menu-item">
                  <span>Абитуриентам</span>
                </div>
              </Link>
              <Link to="/stud">
                <div className="menu-item">
                  <span>Студентам</span>
                </div>
              </Link>
              <Link to="/contacts">
                <div className="menu-item">
                  <span>Контакты</span>
                </div>
              </Link>
              <Link to="/personal-cab">
                <div className="menu-item">
                  <span>Личный кабинет</span>
                </div>
              </Link>
            </div>
          </div>
        );
    }
}

export default Nav;