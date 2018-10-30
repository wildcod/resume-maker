import React , {Component} from 'react'
import './Certificate_Editor.css'

class CertificateEditor extends Component {

     render(){
         return <div >
                     <div id="CertificateEditor">
                     <h5> Certificate/Course </h5>
                     
                       {/* <input  type="text" placeholder="Project" onChange ={this.props.CertificateChange} />  */}
                      </div>
                      <div class="md-form">
                      <textarea id="textarea-char-counter" placeholder="Certificate" class="form-control md-textarea" length="120" rows="3" name="Certificate" onChange={this.props.AllChange}></textarea>
                    </div>

                </div>
     } 
}

export default CertificateEditor;