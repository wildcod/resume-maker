import React , {Component} from 'react'
import './Exp_Editor.css'

class ExpEditor extends Component {
     render(){
         return <div  id="ExpEditor">
                    <h5>Experience</h5>
                    <hr/>
                     {/* <p>  Job title<br/>
                     <input type="text" placeholder="Job title"  onChange={this.props.JobTitleChange}/><br/>
                     </p> */}

                    
                    <div class="md-form">
                      <h5>Job title</h5>  <input type="text" id="form1" placeholder="Job Title" class="form-control" name="JobTitle" onChange={this.props.AllChange}/>
                    </div>

                     {/* <p>
                     Company<br/>
                     <input type="text" placeholder="Company"   onChange={this.props.CompanyChange}/><br/>
                     </p> */}

                     <div class="md-form">
                     <h5>Company</h5>   <input type="text" id="form1" placeholder="Company" class="form-control" name="Company" onChange={ this.props.AllChange}/>
                    </div>

                    {/* <p>
                     Address<br/>
                     <input type="text" placeholder="Address"   onChange={this.props.AddressChange}/><br/>
                     </p> */}

                    <div class="md-form">
                    <h5>Address</h5>  <input type="text" id="form1" placeholder="Address" class="form-control" name="Address" onChange={this.props.AllChange}/>
                    </div>

                     {/* <p>
                     Start date<br/>
                     <input type="text" placeholder="Start date"   onChange={this.props.StartDateChange}/><br/>
                     </p> */}

                    <div class="md-form">
                    <h5>Start date</h5>    <input type="text" id="form1" placeholder="Start Date" class="form-control" name="StartDate" onChange={ this.props.AllChange}/>
                    </div>
                     
                     {/* <p>
                     End date<br/>
                     <input type="text" placeholder="End date"    onChange={this.props.EndDateChange}/><br/>
                     </p> */}

                    <div class="md-form">
                    <h5>End date</h5>   <input type="text" id="form1" placeholder="End Date" class="form-control" name="EndDate" onChange={ this.props.AllChange}/>
                    </div>

                     {/* <p>
                     Description<br/>
                    <input type="text" placeholder="Decription" onChange={this.props.DescriptionChange} /><br/>
                     </p> */}
                     <div class="md-form">
                     <h5>Description</h5>  <textarea id="textarea-char-counter" placeholder="Description" class="form-control md-textarea" length="120" rows="3" name="Description" onChange={this.props.AllChange}></textarea>
                    </div>


                </div>
     } 
}

export default ExpEditor;