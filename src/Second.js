import React from 'react'
import './App.css'

class Second extends React.Component{
    
    constructor(props){
        super(props)
        console.log("Second Created with ")
        console.log(this.props)
        this.state = {}
    
    }

       
    static getDerivedStateFromProps(props,states){
        console.log(props,states)
        return states;
    }




    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps)
        console.log(this.props)
        console.log("snapshot method")
        return "dummy"
     }

     componentDidUpdate(prevProps, prevState, snapshot)
      {
        console.log("Did Update Method")
        console.log(prevProps)
        console.log(this.props)
        console.log(snapshot)
      }


    render(){
        this.props={...this.props,funny: "New one"}
        return(
        <div className="box">
            <h3>{this.props.title}</h3>
            <hr/>
            <ul>
                 {this.props.things.map(x=><li key={x}>{x}</li>)}
           </ul>
        </div>
        );
    }
}

export default Second;

