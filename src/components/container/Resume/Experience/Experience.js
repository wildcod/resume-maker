import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Experience.css'
class Experience extends Component {
     
    render(){
        return <div>
            <Link to="/experience" id="link">
               <div id="Exp" className="contaliner-fluid">
                   <h1 id="heading-Experience" ><b> <b>Experience</b></b></h1><br/>
                    <div className="row">
                              <div  className="col" >
                                    <div  id="ExpLeft">
                                   <div id="ExpList" > •{this.props.State.Company}</div>
                                   <div id="ExpList"> •{this.props.State.Address}</div>
                                   <div id="ExpList"> •{this.props.State.StartDate}</div> 
                                   <div id="ExpList">•{this.props.State.EndDate} </div>
                                    </div>
                              </div>
                              <div  className="col">
                                    <h6 id="title"> <b><b>{this.props.State.JobTitle}</b></b></h6>
                                    <h4 id="Experience">
                                      {this.props.State.Description}
                                    </h4>
                              </div>
                     </div>
                </div>
                </Link>
             </div>
    }
}

export default Experience