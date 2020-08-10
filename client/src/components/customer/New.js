import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startPostCustomer } from '../../actions/customersAction'
import {Redirect } from 'react-router-dom'

class CustomersNew extends React.Component{
    constructor(){
        super()
        this.state= {
            name : '',
            email : '',
            phone : ''

        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e)=>{
     e.preventDefault()
     console.log(this.state)
    const redirect=()=>{
     
        return this.props.history.push('/customers')
    }
     this.props.dispatch(startPostCustomer(this.state,redirect))
     
    
}



    render(){
        return (
            

            <div>
              <br/> <br/> <br/>
            <div className="row ">  
             <div className="col-md-5">
               <img src="/images/customer6.jpg" className="img-fluid float-left" alt="Responsive image" />
                </div>




               <div className="col-md-5 offset-md-1">
                              
                <p className="h4 text-center">Add Customer </p><br/>

                <form onSubmit = {this.handleSubmit}>
                
                

                <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'name'>Name</label>   
                    <div class="col-sm-10">  
                    <input className="form-control form-control-sm"   type ='text' id ='name' name ='name' value = { this.state.name} onChange= {this.handleChange}/>
                    </div>    
                </div><br/>

                <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'email'>Email</label>   
                    <div class="col-sm-10">  
                    <input className="form-control form-control-sm" type ='text' id ='email' name='email' value = { this.state.email} onChange= {this.handleChange}/>
                    </div>    
                </div><br/>

                <div className="form-group row">                    
                    <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'phone'>Phone</label>   
                    <div class="col-sm-10">  
                    <input className="form-control form-control-sm" type ='text' id ='phone' name='phone' value = { this.state.phone} onChange= {this.handleChange}/>
                    </div>    
                </div><br/>

                    <input className="btn btn-secondary btn-sm btn-block" type ='submit' value='Submit' /><br/><br/><br/>
                       
                    </form>
                    </div>

                   
            </div>
            </div>
        )
    }
}
export default connect()(CustomersNew)

