import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

function BillingShow(props){       
        return (
            <div>
              {((props.customers.length!=0) && (props.billings.length!=0) && (props.bookings.length!=0)) ?  (
              
               <div >                    
                <br/>                
                <p className="h4 text-center"><strong>HOTEL INVOICE </strong></p>                        
                <p className="h6 text-left "><em><strong>Invoice No :  {props.billing.code}</strong> </em> </p> 
                <p className="h6 text-left"><em><strong>Date :   {props.billing.checkOut && moment(props.billing.checkOut).format('LL')}</strong></em> </p>
                
                <table className="table table-sm table-striped">
                     <tbody>                
                            <tr > 
                                <td>Name : </td>                               
                                <td>{props.customers.find(cust=>cust._id ===props.billing.customer).name}</td>
                            </tr> 
                            <tr> 
                                <td>Rooms : </td>
                                <td>{props.billing.rooms}</td> 
                            </tr>
                            <tr>
                                 <td>Check In :</td>
                                 <td>{props.bookings.find(book=>book._id ===props.billing.checkIn).checkIn && moment(props.bookings.find(book=>book._id ===props.billing.checkIn).checkIn).format('LL')}</td>
                            </tr>
                            <tr> 
                                 <td>Check Out :</td>
                                 <td>{props.billing.checkOut && moment(props.billing.checkOut).format('LL')}</td>
                            </tr>
                            <tr >
                                <td>Time : </td>
                                <td>{props.billing.time}</td> 
                            </tr>  
                            <tr>
                                <td>No Of Days : </td>
                                <td>{props.billing.noOfDays}</td>   
                            </tr>
                            <tr >
                                <td>Price/Day : </td>
                                <td>{props.billing.price}</td> 
                            </tr>    
                            <tr >
                                <td className="table-dark">Total : </td>
                                <td className="table-dark">{props.billing.amount}</td>                                                         
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

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {           
        billing: state.billings.find(billing=>billing._id == id),  
        customers: state.customers,
        bookings: state.bookings,
        billings: state.billings,        
    }
}

export default connect(mapStateToProps)(BillingShow)

