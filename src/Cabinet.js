import React from "react";
import "./css/App.css";
import CabNav from "./Cab/CabNav";
import CabHome from "./Cab/CabHome";
import CabGroups from "./Cab/CabGroups";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CabTeachers from "./Cab/CabTeachers";
import CabMessages from "./Cab/CabMessages";

class Cabinet extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("mounted");
    this.props.isCab(true);
  }
  componentWillUnmount(){
    this.props.isCab(false);
  };

  render() {
    return (
      <div>
        <CabNav />
        <Switch>
          <Route
            from="/personal-cab"
            exact
            to="/personal-cab/home"
            component={CabHome}
          />
          <Route path="/personal-cab/home" component={CabHome} />
          <Route path="/personal-cab/groups" component={CabGroups} />
          <Route path="/personal-cab/teachers" component={CabTeachers} />
          <Route path="/personal-cab/messages" component={CabMessages} />
        </Switch>
      </div>
    );
  }
}

export default Cabinet;