import React,{Component} from 'react';

import '../styles/middle.css'
import Quickfood from './quickfood';
class Middle extends Component{
      render(){
        return(
            <>

            <img class="mid-img" src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              
            

            <div class="container-fluid boxes mt-4">
            <h1 className="qs-heading">Quick Searches</h1>
            <br/>
                    <h3 className="qs-subheading mx-5">Restaurant menu</h3>

                    <Quickfood />
            </div>

            </>
        )
      }
}

export default Middle;
