import React , {Component} from 'react'
import './Skills_Editor.css'

class SkillsEditor extends Component {

  

     render(){
         return <div  id="SkillsEditor"><br/>
                    <h5>Skills</h5>
                    <hr/>
                        {/* <label>
                         Name:
                        <input type="text"  onChange={this.props.TempChange} /><br/><br/>
                        <button type="button" className="btn btn-danger" onClick={this.props.SkillsChange}>Submit</button>
                        </label> */}
                     
                        
                        <label for="exampleForm2">Add Skills</label>
                        <input type="text" id="exampleForm2" class="form-control" name="temp" onChange={this.props.AllChange}/>
                        <button type="button" className="btn btn-danger" onClick={this.props.SkillsChange}>ADD</button>
                        <button type="button" className="btn btn-danger" onClick={this.props.DeleteSkillsChange}>Delete</button>


                </div>
     } 
}

export default SkillsEditor;