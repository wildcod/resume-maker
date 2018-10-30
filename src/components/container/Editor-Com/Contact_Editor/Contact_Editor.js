import React , {Component} from 'react'
import './Contact_Editor.css'

class ContactEditor extends Component {
     render(){
         return <div  id="ContactEditor">
         <br/>
                    <h5>Contact Information</h5>
                    <hr/>
                     {/* <p>  Email<br/>
                     <input type="text" placeholder="Email"  onChange={this.props.EmailChange}/><br/>
                     </p> */}


                      <br/>             
                    <div className="md-form">
                        <i className="fa fa-envelope prefix"></i>
                        <input type="text" id="inputIconEx1" placeholder="Email" className="form-control" name="Email" onChange={this.props.AllChange}/>
                        
                    </div>


                     {/* <p>
                     Address<br/>
                     <input type="text" placeholder="Address"   onChange={this.props.ResAddressChange}/><br/>
                     </p> */}

                    <div class="md-form">
                        <textarea id="textarea-char-counter" placeholder="Address" class="form-control md-textarea" maxLength="20" rows="1" name="ResAddress" onChange={this.props.AllChange}></textarea>
                    </div>





                    {/* <p>
                     Phone<br/>
                     <input type="number" placeholder="Phone"   onChange={this.props.PhoneChange}/><br/>
                     </p> */}

                     <div class="md-form">
                        <input type="number" id="form1" class="form-control" placeholder="Phone" maxLength="10" name="Phone"onChange={ this.props.AllChange}/>
                    </div>

                </div>
     } 
}

export default ContactEditor;