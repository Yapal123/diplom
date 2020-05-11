import React from "react";

const stud = {
  title: "Stud title",
  content: ["Text1", "text2", "text3"],
};
class Stud extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = stud.content.map((el, index) => <p>{el}</p>);
    return (
      <div className="abit-container">
        <h1 className="abit-title">{stud.title}</h1>
        <br />
        <p>{text}</p>
      </div>
    );
  }
}

export default Stud;
