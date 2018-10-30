import React, {Component} from "react"
import Resume from '../Resume/Resume'
import SideBlog from '../SideBlog/SideBlog'
import './Preview.css'

class Preview extends Component {

    render() {
        return  <div id="Preview" className="container-fluid">
                     <div className="row">
                              <div  >
                                    <SideBlog State = {this.props.State}/>
                              </div>
                              <div className="col" id="Resume">
                                   <Resume State = {this.props.State}/>
                              </div>
                     </div>
                      
                </div>
         
            

    }


}

export default Preview
