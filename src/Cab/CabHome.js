import React from "react";
import "../css/App.css";
const groupInfo = {
  groupName: "kn-15b",
};
class CabHome extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <h2>{groupInfo.groupName}</h2>;
    }
}

export default CabHome;