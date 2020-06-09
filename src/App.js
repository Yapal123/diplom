import React from 'react';
import logo from './imgs/phys.png';
import './css/App.css';
import Slider from "./Slider";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Abit from "./Abit";
import Stud from "./Stud";
import Contacts from "./Contacts";
import Cabinet from "./Cabinet";
const sliderSrc = ["/imgs/new_slide.jpg", "/imgs/slide2.png", "/imgs/slide3.jpg"];

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: 'block'
    }
    this.isCab = this.isCab.bind(this);

  }

  isCab(page){
    if (page === true) {
      this.setState({
        display:'none'
      })
    } else {
      this.setState({
        display: "block",
      });
    }
  }

  render(){
    return (
      <Router>
        <div>
          <div className="blog-bar" style={{display: this.state.display}}>
            <div className="header-bar">
              <img src={logo} />
            </div>
            <div className="hero-slide-place">
              <Slider src={sliderSrc} />
            </div>
          </div>

          <div className="menu-nav">
            <Nav />
          </div>
          <div className="content-place">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/abit" component={Abit} />
              <Route path="/stud" component={Stud} />
              <Route path="/contacts" component={Contacts}/>
              <Route path="/personal-cab" render={(props) => <Cabinet {...props} isCab={this.isCab}/>}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
