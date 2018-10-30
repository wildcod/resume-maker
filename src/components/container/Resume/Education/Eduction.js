import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Education.css'

class Education extends Component {


      

     
    render(){
        return <div>  
              <Link to="/education" id="link">
                     <div id="Edu">
                         <h1 id="heading-Education"><b> <b>Education</b></b></h1><br/>
                          {/* <h4 id="Education">DEGREE • DATE EARNED • SCHOOL You 
                              might want to include your GPA and a summary of relevant
                               coursework, awards, and honors.

                       </h4> */}
                         <div className="row">
                              <div  className="col" >
                                    <div  id="EduLeft">
                              <div id="EduList">•{this.props.State.Institution}</div>
                              <div id="EduList">•{this.props.State.Location}</div>
                              <div id="EduList">•{this.props.State.Year}</div>
                                    {/* •{this.props.State.EndDate} </h4><br/> */}</div>
                              </div>
                              <div  className="col">
                                    <h6 id="title"> <b><b>{this.props.State.Degree}</b></b></h6>
                                    <h4 id="EduDes">
                                      {this.props.State.DescriptionEdu}
                                    </h4>
                              </div>
                     </div>
                    </div>
              </Link>
             </div>
    }
}

export default Education