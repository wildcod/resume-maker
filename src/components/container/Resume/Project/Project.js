import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Project.css'

class Project extends Component {
     
    render(){
        return <div>
                  <Link to="/project" id="link">
                     <div id="Pro">
                         <h1 id="heading-Project"> <b><b>Project</b></b></h1>
                          <h4 id="Project">
                            {this.props.State.Project}
                       </h4>
                    </div>
                    </Link>
             </div>
    }
}

export default Project