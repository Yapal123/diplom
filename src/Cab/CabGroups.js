import React from "react";
import "../css/App.css";
let lessons = [
  {
    lesson: "coding1",
    teacher: "John Doe",
    teacherLink: "/JohnDoe",
  },
  {
    lesson: "coding1",
    teacher: "John Doe",
    teacherLink: "/JohnDoe",
  },
  {
    lesson: "coding1",
    teacher: "John Doe",
    teacherLink: "/JohnDoe",
  },
  {
    lesson: "coding1",
    teacher: "John Doe",
    teacherLink: "/JohnDoe",
  },
];
class CabGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: lessons,
    };
  }

  render() {
    let lessonsCont = this.state.lessons.map((el, i) => (
      <a href={el.teacherLink}>
        <li class="list-group-item">{el.lesson} ({el.teacher})</li>
      </a>
    ));
    return (
      <div>
        <h2>
          Мои предметы
        </h2>
        <ul class="list-group">
          {lessonsCont}
        </ul>
      </div>
    );
  }
}

export default CabGroups;
