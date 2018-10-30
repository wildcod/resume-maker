import React, {Component} from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import Main from '../container/Main/Main';

class Home extends Component {
   
    render() {
        return (
            <BrowserRouter>
               <Route path="/"  component={Main} />
            </BrowserRouter>
        );
           
    }
}

export default Home
