import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Certificate.css'

class Certificate extends Component {
     
    render(){
        return <div>
                  <Link to="/certificate" id="link">
                     <div id="Cer">
                         <h1 id="heading-Certificate"><b><b> Certificate</b></b></h1>
                          <h4 id="Certificate">
                            {this.props.State.Certificate}
                       </h4>
                    </div>
                    </Link>
             </div>
    }
}

export default Certificate