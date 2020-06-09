import React from "react";
import { Link } from "react-router-dom";
import "../css/App.css";

class CabNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pk-menu">
        <ul>
          <Link to="/personal-cab/home">
            <li title="Домой">
              <i class="fas fa-home"></i>
            </li>
          </Link>
          <Link to="/personal-cab/groups">
            <li title="Мои группы">
              <i class="fas fa-user-friends"></i>
            </li>
          </Link>
          <Link to="/personal-cab/teachers">
            <li title="Преподаватели">
              <i class="fas fa-chalkboard-teacher"></i>
            </li>
          </Link>
          <Link to="/personal-cab/messages">
            <li title="Диалоги">
              <i className="fas fa-envelope"></i>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default CabNav;
