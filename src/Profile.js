import React from "react";

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            name:"pp",
            email:"pp@gg.com"
        }
    }
    /*componentDidMount(){
        console.warn("called life cycle..!!!")
    } */
    pj(){
        this.setState({
            name:"kk",
            email:"jj@jj.com",
        })
    }   
    render(){
        return(
            <div>
                <h1> Hello Profile Component</h1>
                <h1>{this.props.data}</h1>
                <h1>{this.state.email}</h1>
                <button onClick={()=>{this.pj()}}>update</button>
            </div>
        )
    }
}
