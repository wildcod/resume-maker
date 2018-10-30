import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import  './Contact.css'
class Contact extends Component {

    render() {
        return <div>
        <Link to="/contact-information" id="link">
               <div id="Contact">
                    <h4 id="heading-Contact"> <b>Contact Information</b></h4>
                    <div id="CList">
                      <h6 id="Sub"><b>Email</b></h6>
                      <p id="f1">{this.props.State.Email}</p>
                      <h6 id="Sub"><b>Address</b></h6>
                      <p id="f1">{this.props.State.ResAddress}</p>
                      <h6 id="Sub"><b>Phone</b></h6>
                      <p id="f1">{this.props.State.Phone}</p>
                     </div>

               </div>
         </Link>
         </div>
    }

}

export default Contact