import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../../App.css'

import {startGetCustomers} from '../../actions/customersAction'

import {startDeleteCustomer} from '../../actions/customersAction'


class CustomersList extends React.Component{

    componentDidMount() {  
        if (this.props.customers.length === 0) {
            this.props.dispatch(startGetCustomers())
        }
    }

    handleRemove = (id) =>{
        this.props.dispatch(startDeleteCustomer(id))        
    }
     
    render(){
      return(
    
        <div>

        <img src="/images/customers4.jpg" className="img-fluid img-rounded" alt="Responsive image" />
        <br/><br/>                
        
        {/*<h4><u><strong><em> Customers</em></strong></u> </h4><br/>*/}
        <div class="row"> 
                {
                   this.props.customers.map((customer,i) =>{
                       return( 
                        
                        <div class="col-sm-3">
                        <div class="card  border-secondary  mb-5" >
                            <div class="card-header text-white bg-secondary h6"><strong><em>
                              Customer
                              </em></strong>
                              </div>

                   <div class="card-body">
                      
                      <p class="card-text h6"><strong> <em>Name : {customer.name} </em></strong></p>
                        <p class="card-text h6"><strong> <em>Email:{customer.email} </em></strong></p>
                        <p class="card-text h6"><strong> <em>Phone : {customer.phone}</em></strong></p>
                   </div>

                   <div class="card-footer text-white bg-light  ">
                   <h6 class="btn btn-dark ">{ <button onClick={() => {
                                                   this.handleRemove(customer._id)
                                                    }}><em><strong>Remove</strong></em></button>}</h6>
                   </div>
                   </div>
                   </div>
                   
                  )
                }) 
             }
             </div>
        
        <Link to={`/customers/new`} ><u><strong>Add Customer</strong></u></Link> <br/><br/>


        </div>
    )

 }

    
}
const mapStateToProps = (state) => {
    return {
        customers:state.customers,
       // customer:state.customer
        
    }
}

export default connect(mapStateToProps)(CustomersList)