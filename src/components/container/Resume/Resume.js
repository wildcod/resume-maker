import React ,{Component} from 'react'
import Name from './Name/Name'
import Experience from './Experience/Experience'
import Education from './Education/Eduction'
import Project from './Project/Project' 
import Certificate from './Certificate/Certificate'
import Objective from './Objective/Objective'
import './Resume.css'
class Resume extends Component {
     
    render(){
        return <div id="Resume">
                    <Name State = {this.props.State}/> 
                    <Objective State= {this.props.State}/>
                    <Experience  State = {this.props.State}/>
                    <Education State = {this.props.State}/>
                    <Project State= {this.props.State}/>
                    <Certificate State= {this.props.State}/>
                    
             </div>
    }
}

export default Resume