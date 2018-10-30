import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Objective.css'

class Objective extends Component {
     
    render(){
        return <div>
                  <Link to="/objective" id="link">
                     <div id="Obj">
                          <h4 id="Objective"> 
                            {this.props.State.Objective}
                         </h4>
                    </div>
                    </Link>
             </div>
    }
}

export default Objective