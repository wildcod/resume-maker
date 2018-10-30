import React,{Component} from 'react'
import Contact from './ContactInfo/Contact'
import Skills from './Skills/Skills'
import './SideBlog.css'

class SideBlog extends Component {
    
    render() {
         return <div id="SideBlog"> <br/><br/><br/>
                       <Contact State = {this.props.State}/>
                       <Skills State = {this.props.State}/>
                </div>
    }
     
}

export default SideBlog