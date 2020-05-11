import React from "react";
import "./css/App.css";

class Slider extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const sliders = this.props.src.map((el, index) => {
            if(index == 0){
                return (
                  <div
                    className="carousel-item active"
                    key={index.toString()}
                    data-interval="10000"
                  >
                    <img src={el} className="d-block w-100 sl" alt="..." />
                  </div>
                );
            } else {
                return (
                  <div
                    className="carousel-item"
                    key={index.toString()}
                    data-interval="10000"
                  >
                    <img src={el} className="d-block w-100 sl" alt="..." />
                  </div>
                );
            }
                
               
        });
        return (
          <div>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              dataride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                {sliders}
              </div>
             
            </div>
          </div>
        );
    }
}

export default Slider;