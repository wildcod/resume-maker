import React , {Component} from 'react'
import './Education_Editor.css'

class EducationEditor extends Component {
    state = {
        year:''
    }

    

     render(){
         return <div  id="EduEditor">
                    <h5>Education</h5>
                   <hr/>
                     {/* <p>  Name of school/institution<br/>
                     <input type="text" placeholder="Institution"  onChange={this.props.InstitutionChange}/><br/>
                     </p> */}

                     <div class="md-form">
                    <h5>Name of school/institution</h5>   <input type="text" id="form1" placeholder="Institution" class="form-control" name="Institution" onChange={ this.props.AllChange}/>
                    </div>

                     {/* <p>
                     Degree<br/>
                     <input type="text" placeholder="Degree"   onChange={this.props.DegreeChange}/><br/>
                     </p> */}

                     <div class="md-form">
                    <h5>Degree</h5>   <input type="text" id="form1" placeholder="Degree" class="form-control" name="Degree" onChange={this.props.AllChange}/>
                    </div>

                    {/* <p>
                     Grduation year<br/>
                     <input type="text" placeholder="Year"   onChange={this.props.YearChange}/><br/>
                     </p> */}

                     <div class="md-form">
                    <h5>Grduation year</h5>   <input type="text" id="form1" placeholder="Year" class="form-control" name="Year" onChange={this.props.AllChange}/>
                    </div>

                     {/* <p>
                     Location<br/>
                     <input type="text" placeholder="Location"   onChange={this.props.LocationChange}/><br/>
                     </p> */}

                     <div class="md-form">
                    <h5>Location</h5>   <input  type="text" id="form1" placeholder="Location" name="Location" class="form-control" onChange={ this.props.AllChange}/>
                    </div>
                 

                     {/* <p>
                     Description<br/>
                    <input type="text" placeholder="Decription" onChange={this.props.DescriptionEduChange} /><br/>
                     </p> */}

                     <div class="md-form">
                     <h5>Description</h5>  <textarea id="textarea-char-counter" placeholder="Description" class="form-control md-textarea" length="120" rows="3" name="DescriptionEdu"onChange={this.props.AllChange}></textarea>
                    </div>
                </div>
     } 
}

export default EducationEditor;