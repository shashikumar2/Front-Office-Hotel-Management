import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'
import moment from 'moment'


import {startShowBilling} from '../../actions/billingsAction'

class BillingShow extends React.Component{

    
   
    render(){
        console.log("billingShow",this.props.billing)
        console.log("billingsList",this.props.billings)
        console.log("CustomerList",this.props.customers)
        console.log("BookingList",this.props.bookings)
        return (
            <div>
                {((this.props.customers.length!=0) && (this.props.billings.length!=0) && (this.props.bookings.length!=0)) ?  (
              
                <div >
                    
                <br/>                
                <p className="h4 text-center"><strong>HOTEL INVOICE </strong></p>
                
               {/* <h5>Invoice No - {this.props.billing.code} </h5>*/}
                <p className="h6 text-left "><em><strong>Invoice No :  {this.props.billing.code}</strong> </em> </p> 
                <p className="h6 text-left"><em><strong>Date :   {this.props.billing.checkOut && moment(this.props.billing.checkOut).format('LL')}</strong></em> </p>
                
                <table className="table table-sm table-striped"  >
                  <thead>
                      <tr>  
                      </tr>
                  </thead>

                   <tbody>
                
                            <tr > 
                                <td>Name : </td>                               
                                <td>{this.props.customers.find(cust=>cust._id ===this.props.billing.customer).name}</td>
                            </tr> 
                            <tr> 
                                <td>Rooms : </td>
                                <td>{this.props.billing.rooms}</td> 
                            </tr>
                            <tr>
                                 <td>Check In :</td>
                                 <td>{this.props.bookings.find(book=>book._id ===this.props.billing.checkIn).checkIn && moment(this.props.bookings.find(book=>book._id ===this.props.billing.checkIn).checkIn).format('LL')}</td>
                            </tr>
                            <tr> 
                                 <td>Check Out :</td>
                                 <td>{this.props.billing.checkOut && moment(this.props.billing.checkOut).format('LL')}</td>
                            </tr>
                            <tr >
                                <td>Time : </td>
                                <td>{this.props.billing.time}</td> 
                            </tr>  
                            <tr>
                                <td>No Of Days : </td>
                                <td>{this.props.billing.noOfDays}</td>   
                            </tr>
                            <tr >
                                <td>Price/Day : </td>
                                <td>{this.props.billing.price}</td> 
                            </tr>    
                            <tr >
                                <td className="table-dark">Total : </td>
                                <td className="table-dark">{this.props.billing.amount}</td>                                                         
                            </tr>                 
             
                   </tbody>
                </table>
                <br/>     
                
            
                
                 <p className="h5"><em><strong>Signature : </strong></em></p>
                 <br/> 
                 <p className="h5"><em><strong>Thank You. . .Visit Again </strong></em></p><br/> 

                         
                    <img src="/images/bill.gif" className="img-fluid img-thumbnail" alt="Responsive image" /><br/> 
                   

               </div>
               ) : (
                <p> <img src="/images/load2.jpg" alt="" /></p>
               )}
               <br/> <br/> 
            </div>

               )
           }

}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    console.log("params.id", id)
    return {
           
        billing: state.billings.find(billing=>billing._id == id),  
        customers: state.customers,
        bookings: state.bookings,
        billings: state.billings,        
    }
}

export default connect(mapStateToProps)(BillingShow)

/*
<div className="row "> 
                
                 <p className="h5"><em><strong>Signature : </strong></em></p>
                 <br/>
                 <p className="h5"><em><strong>Thank You. . .Visit Again </strong></em></p><br/> 
                
                  
                
                    <img src="/images/bill.gif" className="img-fluid col-md-4 " alt="Responsive image" /><br/> 
                    
                </div>
*/