import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'
import moment from 'moment'

import '../../App.css'

import {startGetBillings, startDeleteBilling, startShowBilling} from '../../actions/billingsAction'
import {startGetBookings} from '../../actions/bookingsAction'
import {startGetCustomers} from '../../actions/customersAction'


class BillingsList extends React.Component{

    componentDidMount() {  
        if (this.props.customers.length === 0 || this.props.bookings.length === 0 || this.props.billings.length === 0) {
            
            this.props.dispatch(startGetCustomers())
            this.props.dispatch(startGetBookings())
            this.props.dispatch(startGetBillings())
        }
    }

    handleRemove = (id) =>{
        this.props.dispatch(startDeleteBilling(id))        
    }

    handleShow = (id) =>{
       
        const redirect=()=>{
          
            return this.props.history.push(`/billings/show/${this.props.billing1._id}`)
        }
        this.props.dispatch(startShowBilling(id,redirect)) 

    }

     
    render(){
        console.log("this.props.customers", this.props.customers)
        console.log("this.props.bookings", this.props.bookings)
        console.log("this.props.billings", this.props.billings)
      return(
    
        <div>
        {( (this.props.customers.length!=0) && (this.props.bookings.length!=0) && (this.props.billings.length!=0)) ?  (
        <div>
        <p  className="h4 text-center "><em><strong>Billing</strong></em></p>
        <img src="/images/billings2.jpg" className="img-fluid" alt="Responsive image" /><br/><br/>
        
        <table className="table table-sm table-striped">
        
            <thead className="thead-dark">
                <tr>
                    <th> Code No</th>
                    <th> Name</th>
                    <th> Rooms</th>
                    <th> Check In</th> 
                    <th> Check Out</th> 
                    <th> Check Out Time </th>                 
                    <th> No Of Days</th>
                    <th> Price/Day</th>
                    <th> Amount </th>
                    <th> Delete?</th>  
                    <th> Print? </th> 
                </tr>
            </thead>

            <tbody>
                {
                   this.props.billings.map((billing,i) =>{
                       return(
                            <tr key={i}>
                                <td> {billing.code}</td>
                                <td> {this.props.customers.find(cust=>cust._id ===billing.customer).name}</td>
                                <td> {billing.rooms}</td>
                                <td> {(this.props.bookings.find(book=>book._id ===billing.checkIn)).checkIn && moment((this.props.bookings.find(book=>book._id ===billing.checkIn)).checkIn).format('LL')}</td>
                                <td> {billing.checkOut && moment(billing.checkOut).format('LL')}</td> 
                                <td> {billing.time}</td>
                                <td> {billing.noOfDays}</td> 
                                <td> {billing.price}</td>
                                <td> {billing.amount}</td>                                                                                           
                                <td> { <button className="btn btn-secondary" onClick={() => {
                                                   this.handleRemove(billing._id)
                                                    }}>Delete</button>}</td>     
                                <td> { <button className="btn btn-secondary" onClick={() => {
                                                   this.handleShow(billing._id)
                                                    }} > Print</button>}</td>
                                                                                  
                            </tr>                 
                       )
                   }) 
                }
            </tbody>
        </table>
        
       
       <Link to="/billings/new" ><u><strong>Add Bill</strong></u></Link><br/><br/>
       </div>
               ) : (
              
                <p><img src="/images/load2.jpg" alt="" /></p>
               )}
        </div>
    )

 }

    
}
const mapStateToProps = (state) => {
    return {
        billings:state.billings,              
        customers: state.customers,
        bookings: state.bookings,
        billing1:state.billing, 
               
    }
}

export default connect(mapStateToProps)(BillingsList)