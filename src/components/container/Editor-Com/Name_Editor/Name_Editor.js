import React , {Component} from 'react'
import './Name_Editor.css'

class NameEditor extends Component {

    componentDidMount() {
        console.log(this.props)
    }

     render(){
         return <div >
                    

                     <div id="NameEditor">
                     <h5> Type Your Name </h5>
                     <hr/>
                       <div className="md-form "> 
                            <input  type="text" id="form1" placeholder="Name" name="FullName" className="form-control"  onChange ={this.props.AllChange}  />
        
                        </div>
               
                      {/* <button className="btn btn-primary" onClick= {this.props.DbNameChange}> Submit</button> */}
                     </div>
                      <br/><br/>
                      <div id="NameEditor">
                      <h5> Upload Photo </h5>
                      <hr/>
                      <div id="PhotoEditor">
                        <input type="file" onChange={this.props.PhotoChange} /> 
                      <progress value="0" max="100" id="uploader">0%</progress><br/>
                      <button className="btn btn-danger" onClick={this.props.uploadPhoto}> uploadFile </button>
                </div>
                </div>
                </div>
     } 
}

export default NameEditor;