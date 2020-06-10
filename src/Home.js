import React from "react";
import HomePost from "./Home/HomePost";


const posts = [
  {
    title: `СТУДЕНТАМ 2(1 УСК.), 3(2УСК.) КУРСОВ! ЗАОЧНАЯ ФОРМА
`,
    text: `С 01.06.2020 по 13.06.2020 УЧЕБНАЯ (научно-исследовательская работа) ПРАКТИКА
С 01.06.2020 ПО 13.06.2020 3 (2 УСК.) - ПРОИЗВОДСТВЕННАЯ ПРАКТИКА
Практику проходите на кафедре (дистанционно). Выполнение заданий согласно выданному варианту (список будет предоставлен позже).
Руководитель практики: ст.пр. Бодряга Виктор Викторович`,
    img: "/imgs/slide1.jpg",
    postDate: "20.03.2020",
  },
  {
    title: "Post 2",
    text: "This is text for post 2",
    img: "/imgs/slide1.jpg",
    postDate: "20.03.2020",
  },
  {
    title: "Post 3",
    text: "This is text for post 3",
    img: "/imgs/slide1.jpg",
    postDate: "20.03.2020",
  },
  {
    title: "Post 4",
    text: "This is text for post 4",
    img: "/imgs/slide1.jpg",
    postDate: "20.03.2020",
  },
];

class Home extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const renderedPosts = posts.map((el, index) => (
          <HomePost posts={el} key={index.toString()}/>
        ));
        return(
            <div className="home-container">
                {renderedPosts}
            </div>
        )
    }
}

export default Home;