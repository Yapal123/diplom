import React from "react";
import HomePost from "./Home/HomePost";


const posts = [
  {
    title: "Post 1",
    text: "This is text for post 1",
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