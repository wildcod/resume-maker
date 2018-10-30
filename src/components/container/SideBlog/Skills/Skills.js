import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Skills.css'

class Skills extends Component {

    render() {
         console.log(this.props)
        let skills = this.props.State.Skills.map((skill) => {
            return <li>{skill}</li>
        })

        return <div>
            <Link to="/skills" id="link">
               <div id="Skills">
                      <h4 id="heading-Skills"> <b>Skills</b></h4>
                      <ul id="List">
                          {/* <li>Cricket</li>
                          <li>java   </li>
                          <li>C++    </li>
                          <li>Tannis </li>
                          <li>Web-D  </li>
                          <li>Python </li> */}
                           {skills} 

                      </ul>

               </div>
               </Link>
               </div>
    }
}


export default Skills