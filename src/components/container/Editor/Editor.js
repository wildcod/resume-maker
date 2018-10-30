import React,{Component} from 'react'
import './Editor.css'
import NameEditor from '../Editor-Com/Name_Editor/Name_Editor'
import ExpEditor from '../Editor-Com/Exp_Editor/Exp_Editor'

class Editor extends Component {
     
    render(){

        return <div>
            
                   <NameEditor NameChange = {this.props.NameChange} /><br/>
                   <ExpEditor  JobTitleChange = {this.props.JobTitleChange}
                               CompanyChange= {this.props.CompanyChange}
                               StartDateChange={this.props.StartDateChange}
                               EndDateChange={this.props.EndDateChange}
                               DescriptionChange={this.props.DescriptionChange}
                               AddressChange={this.props.AddressChange}
                               />
             </div>
    }
}

export default Editor