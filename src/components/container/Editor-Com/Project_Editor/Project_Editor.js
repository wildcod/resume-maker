import React , {Component} from 'react'
import './Project_Editor.css'

class ProjectEditor extends Component {

     render(){
         return <div >
                     <div id="ProjectEditor">
                     <h5> Project </h5>
                     
                     {/* Project :  <input  type="text" placeholder="Project" onChange ={this.props.ProjectChange} />  */}
                      </div>

                    <div class="md-form">
                      <textarea id="textarea-char-counter" placeholder="Project" name="Project" class="form-control md-textarea" length="120" rows="3" onChange={this.props.AllChange}></textarea>
                    </div>

                </div>
     } 
}

export default ProjectEditor;