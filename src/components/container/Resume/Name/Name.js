import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Name.css'
class Name extends Component {

    render(){

        return <div className="container-fluid" id="Name1">
                     {/* <Link to="/name"  id="link" > <div id="name" >
                                    <div id="Name" > {this.props.State.FullName} </div>
                            </div>
                     </Link>  */}
                     <div className="row" id="name">
                             <div className="col-9"> <Link to="/name" id="link"> <div  id="Name">{this.props.State.FullName}</div> </Link>
                                </div>
                     <div className="col-3" id="photo">   <div  >
                         
                           <img id="myimg" src={this.props.State.Url} width="143px" height="147px"/>
                         
                         </div> </div>
                     </div>
             </div>
    }
}

export default Name