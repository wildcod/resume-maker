import React , {Component} from 'react'
import './Objective_Editor.css'

class ObjectiveEditor extends Component {

     render(){
         return <div >
                     <div id="ObjectiveEditor">
                     <h5> Objective </h5>
                     <hr/>
                       <input  type="text" placeholder="Objective" name="Objective" onChange ={this.props.AllChange} /> 
                      </div>
                </div>
     } 
}

export default ObjectiveEditor;