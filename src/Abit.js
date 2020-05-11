import React from "react";

const abit = {
    title:'Abit title',
    content:['Text1','text2', 'text3']
};
class Abit extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const text = abit.content.map((el, index) => 
            <p>
                {el}
            </p>
        );
        return(
            <div className="abit-container">
                <h1 className="abit-title">
                    {abit.title}
                </h1>
                <br />
                <p>
                    {text}
                </p>
            </div>
        )
    }
}

export default Abit;