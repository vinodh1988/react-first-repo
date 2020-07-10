import React from 'react';

import './App.css';
import Second from './Second'

/*
  component will have template, css , data and event functions
*/
 class App extends React.Component{

     constructor(){
       super()
       this.state= {titles: ["Vegetables","Fruits","Spices"],
                    items: [["Potato","Carrot","Cabbage","Green Chillies"],
                            ["Mango","Apple","Orange","Banana"],
                            ["Cinnamon","Pepper","Turmeric"]]}

          this.item=React.createRef()
          this.type=React.createRef()   

          this.addItem=this.addItem.bind(this)
          console.log("App component instantiated")
     }
  
     addItem(){
      let item = this.item.current.value
      let type = this.type.current.value
      this.state.items[type].push(item);
      let newState = {...this.state};
      this.setState(newState);
     }

     componentDidMount(){
       console.log("App component mounted")
     }

     shouldComponentUpdate(nextProps, nextState){
       console.log("Should Component Update")
         return true
     }



     render(){
       let developer="johnson"
         return(
           <div id="home-component">
           <h1>First component</h1>
           Add an item <input type="text" ref={this.item} />
           <select ref={this.type}>
             <option value="0">Vegetables</option>
             <option value="1">Fruits</option>
             <option value="2">Spices</option>
           </select>
           <button type="button"  onClick={this.addItem}>Add Item</button>
           <div style={{display:"block", overflow: "hidden"}}>
           <Second  title={this.state.titles[0]} things={this.state.items[0]} ></Second>           
           <Second  title={this.state.titles[1]} things={this.state.items[1]}></Second>    
           <Second  title={this.state.titles[2]} things={this.state.items[2]}></Second>    
            
           </div>
           <hr/>
           Developed by {developer}
           </div>
         )
     }
}



export default App;

/*
    Exports can be done in two ways 
    normal export  -- one file can have many exports
    default export  --- One file can have only one default export
*/