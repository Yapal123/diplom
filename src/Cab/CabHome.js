import React from "react";
import "../css/App.css";
const groupInfo = {
  groupName: "kn-15b",
};
const studInfo = [
  {
    fullName: "Stas Stasik Stasichek",
    contacts: " Any info",
  },
  {
    fullName: "Stas Stasik Stasichek",
    contacts: " Any info",
  },
  {
    fullName: "Stas Stasik Stasichek",
    contacts: " Any info",
    isHeadman: true
  },
  {
    fullName: "Stas Stasik Stasichek",
    contacts: " Any info",
  },
  {
    fullName: "Stas Stasik Stasichek",
    contacts: " Any info",
  },
  {
    fullName: "Stas Stasik Stasichek",
    contacts: " Any info",
  },
  {
    fullName: "Stas Stasik Stasichek",
    contacts: " Any info",
  },
  {
    fullName: "Stas Stasik Stasichek",
    contacts: " Any info",
  },
  {
    fullName: "Stas Stasik Stasichek",
    contacts: " Any info",
  },
];
const lessons = [
  ["Понедельник", "lesson1", "lesson2", "lesson3", ""],
  ["Вторник", "lesson1", "", "", "lesson4"],
  ["Среда", "lesson1", "lesson2", "lesson3", "lesson4"],
  ["Четверг", "", "lesson2", "lesson3", "lesson4"],
  ["Пятница", "", "lesson2", "lesson3", "lesson4"],
];
let news = [
  {
    title: `Title 1`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
    date: `20.03.2020`,
  },
  {
    title: `Title 2`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
    date: `20.03.2020`,
  },
  {
    title: `Title 3`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
    date: `20.03.2020`,
  },
];  

class CabHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLead: true,
      editGroup: false,
      students: studInfo,
      lessons: lessons,
      editCalendar: false,
      news: news,
    };
    this.groupEdit = this.groupEdit.bind(this);
    this.infoChange = this.infoChange.bind(this);
    this.calendarEdit = this.calendarEdit.bind(this);
    this.calendarChange = this.calendarChange.bind(this);
    this.postNews = this.postNews.bind(this);
  }

  groupEdit(e) {
    e.preventDefault();
    this.setState({
      editGroup: !this.state.editGroup,
    });
  }
  calendarEdit(e) {
    e.preventDefault();
    this.setState({
      editCalendar: !this.state.editCalendar,
    });
  }

  infoChange(e) {
    let stateKeys = e.target.getAttribute("id").split("-");
    let id = stateKeys[1];
    let prop = stateKeys[0];
    let value = e.target.value;
    console.log(`${prop} -- ${id}--${value}`);
    this.setState((state) => {
      const group = state.students.map((el, i) => {
        console.log("working...");
        if (i == id) {
          console.log(i);
          return (el[prop] = value);
        } else {
          return el;
        }
      });
      return group;
    });
  }

  calendarChange(e) {
    let id = e.target.getAttribute("id");
    let value = e.target.value;
    let parentId = e.target.getAttribute("dataParent");
    console.log(`${parentId} -- ${id} -- ${value}`);
    this.setState((state) => {
      const calendar = state.lessons.map((el, i) => {
        if (i == parentId) {
          return (el[id] = value);
        } else {
          return el;
        }
      });
      return calendar;
    });
  }
  postNews(e){
    e.preventDefault();
    let title = document.getElementById('newPostTitle').value;
    let text = document.getElementById("newPostText").value;
    console.log(`${title} - ${text}`)
    this.setState(state => {
      let news = state.news.push({
        title:title,
        text:text,
        date:'123'
      });
      return news;
    });
    console.log(this.state.news);
  };
  render() {
    const students = this.state.students.map((el, i) => {
      if (this.state.editGroup == true) {
        if (el.isHeadman === true) {
          return (
            /**TODO: Изменить индекс на айди студента */
            <tr id={"student-" + i}>
              <td>
                <input
                  type="text"
                  name="fullName"
                  id={"fullName-" + i}
                  defaultValue={el.fullName}
                  onBlur={this.infoChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="contacts"
                  id={"contacts-" + i}
                  defaultValue={el.contacts}
                  onBlur={this.infoChange}
                />
              </td>
            </tr>
          );
        } else {
          return (
            <tr id={"student-" + i}>
              <td>
                <input
                  type="text"
                  name="fullName"
                  id={"fullName-" + i}
                  defaultValue={el.fullName}
                  onBlur={this.infoChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="contacts"
                  id={"contacts-" + i}
                  defaultValue={el.contacts}
                  onBlur={this.infoChange}
                />
              </td>
            </tr>
          );
        }
      } else {
        if (el.isHeadman === true) {
          return (
            /**TODO: Изменить индекс на айди студента */
            <tr id={"student-" + i}>
              <td>
                <strong>{el.fullName} (староста)</strong>
              </td>
              <td>{el.contacts}</td>
            </tr>
          );
        } else {
          return (
            <tr id={"student-" + i}>
              <td>{el.fullName}</td>
              <td>{el.contacts} </td>
            </tr>
          );
        }
      }
    });
    let calendar = this.state.lessons.map((el, i) => {
      if (this.state.editCalendar == true) {
        return (
          <tr id={"day-" + i}>
            {el.map((element, index) => {
              return (
                <td>
                  <input
                    name="lesson"
                    id={index}
                    defaultValue={element}
                    style={{ width: "100px" }}
                    onBlur={this.calendarChange}
                    dataParent={i}
                  />
                </td>
              );
            })}
          </tr>
        );
      } else {
        return (
          <tr id={"day-i"}>
            {el.map((element, index) => {
              return <td>{element}</td>;
            })}
          </tr>
        );
      }
    });
    let edit;
    let trash;
    let newPost;
    if (this.state.isLead == true) {
      edit = (
        <a href="" onClick={this.groupEdit}>
          Edit <i class="fas fa-pencil-alt"></i>
        </a>
      );
      trash = <i class="fas fa-trash"></i>;
      newPost = (
        <div>
          <h4>New post</h4>
          <div className="form-group">
            <input type="text" id="newPostTitle" placeholder="post title" />
          </div>
          <div className="form-group">
            <textarea id="newPostText" placeholder="Post text" />
          </div>
          <div className="form-group">
            <button id="postNewPost" onClick={this.postNews}>
              Post
            </button>
          </div>
        </div>
      );
    } else {
      edit = "";
      trash = "";
    }
    let news;
    news = this.state.news.map((el, i) => (
      <div className="new-item">
        <h4>
          {el.title}{" "}
          <span className="time-heading">
            {el.date} {trash}
          </span>
        </h4>
        <p className="new-text">{el.text}</p>
      </div>
    ));
    news = news.reverse();
    return (
      <div>
        <h2>{groupInfo.groupName}</h2>
        {edit}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ФИО</th>
              <th scope="col">Контактные данные</th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
        <br />
        <br />
        <br />
        <h2>Calendar</h2>
        {edit}
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">1 lesson</th>
              <th scope="col">2 lesson</th>
              <th scope="col">3 lesson</th>
              <th scope="col">4 lesson</th>
            </tr>
          </thead>
          <tbody>{calendar}</tbody>
        </table>
        <br />
        <br />
        <br />
        <div className="newsPlace">
          <h2>Group news</h2>
          <br />
          {newPost}
          <div className="newsCont">
            <div className="container w-75">{news}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CabHome;