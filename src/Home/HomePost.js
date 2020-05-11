import React from "react";

class HomePost extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="post-item">
                <div className="post-img">
                    <img src={this.props.posts.img}/>
                </div>
                <div className="post-content">
                    <h2 className="post-title">
                        {this.props.posts.title}
                    </h2>
                    <p className="post-text">
                        {this.props.posts.text}
                    </p>
                </div>
            </div>
        );
    }
}

export default HomePost;