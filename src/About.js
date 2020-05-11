import React from "react";

const teachers = [
  {
    name: "Teacher Name 1",
    lesson: "Lesson name 1",
    photo: "/imgs/slide1.jpg",
  },
  {
    name: "Teacher Name 2",
    lesson: "Lesson name 2",
    photo: "/imgs/slide1.jpg",
  },
  {
    name: "Teacher Name 3",
    lesson: "Lesson name 3",
    photo: "/imgs/slide1.jpg",
  },
  {
    name: "Teacher Name 4",
    lesson: "Lesson name 4",
    photo: "/imgs/slide1.jpg",
  },
  {
    name: "Teacher Name 4",
    lesson: "Lesson name 4",
    photo: "/imgs/slide1.jpg",
  },
];


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const teacheritems = teachers.map((el, index) => (
      <div className="teacher-item" key={index.toString}>
        <img src={el.photo} />
        <span className="teacher-name">
          <strong>{el.name}</strong>
        </span>
        <br />
        <span className="teacher-lesson">
          {el.lesson}
        </span>
      </div>
    ));
    return (
      <div className="about-container">
        <h1 className="about-title">About Title</h1>
        <div className="about-content">
          <p>
            lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            illo quasi minus nam laudantium! Dolorum voluptatibus, nesciunt fuga
            adipisci voluptate rerum tempore harum! Ad asperiores exercitationem
            soluta labore. Nam, doloremque.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum illo
            quasi minus nam laudantium! Dolorum voluptatibus, nesciunt fuga
            adipisci voluptate rerum tempore harum! Ad asperiores exercitationem
            soluta labore. Nam, doloremque. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Eum illo quasi minus nam laudantium!
            Dolorum voluptatibus, nesciunt fuga adipisci voluptate rerum tempore
            harum! Ad asperiores exercitationem soluta labore. Nam, doloremque.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum illo
            quasi minus nam laudantium! Dolorum voluptatibus, nesciunt fuga
            adipisci voluptate rerum tempore harum! Ad asperiores exercitationem
            soluta labore. Nam, doloremque.
          </p>
        </div>
        <div className="about-teacher">{teacheritems}</div>
      </div>
    );
  }
}

export default About;
