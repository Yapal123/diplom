import React from "react";

const contacts = {
  title: "Stud title",
  addres: "Addres",
  phone:"+380713801537",
  email:"email@gmail.com",
  social:[
      {
          name:'VK',
          link:'vk.com'
      },
  ]
};
class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let social = contacts.social.map((el,index) => (
      <a href={'https://' + el.link}>{el.name}</a>
    ))
    return (
      <div className="abit-container">
        <h1 className="abit-title">Контакты</h1>
        <br />
        <p>
          <strong>Адрес: </strong>
          {contacts.addres}
          <br />
          {social}
          <br />
          <strong>Email: </strong>
          {contacts.email}
          <br />
          <strong>Номер телефона: </strong>
          {contacts.phone}
          <br />
          <br />
          <div className="map-place">
            <h2>
              Карта
            </h2>
            <img src="imgs/map.png"/>
          </div>
        </p>
      </div>
    );
  }
}

export default Contacts