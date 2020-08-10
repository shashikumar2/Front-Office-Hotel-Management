import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import '../../App.css'

import {startGetBookings} from '../../actions/bookingsAction'

import {startDeleteBooking} from '../../actions/bookingsAction'
import {startGetRooms} from '../../actions/roomsAction'
import {startGetCustomers} from '../../actions/customersAction'


class BookingsList extends React.Component{

    componentDidMount() {  
        if (this.props.rooms.length === 0 || this.props.customers.length === 0 || this.props.bookings.length === 0 ) {
            
            this.props.dispatch(startGetRooms())
            this.props.dispatch(startGetCustomers())
            this.props.dispatch(startGetBookings())
        }
    }

    handleRemove = (id) =>{
        this.props.dispatch(startDeleteBooking(id))        
    }
     
    render(){
        
      return(
    
        <div>
         {((this.props.rooms.length!=0) && (this.props.customers.length!=0) && (this.props.bookings.length!=0) ) ?  (
        <div>
        <p  className="h4 text-center "><em><strong>Booking</strong></em></p> 
        <img src="/images/bookings3.jpg" className="img-fluid" alt="Responsive image"/><br/><br/>
        
        <table className="table table-sm table-striped" >
            
            <thead className="thead-dark">
                <tr>
                   
                    <th> Name</th>
                    <th> Rooms</th>
                    <th> Check In</th> 
                    <th> Check In Time </th>                 
                    <th> Check Out</th>
                    <th> No of Adults</th>
                    <th> Delete?</th>  
                </tr>
            </thead>

            <tbody>
                {
                   this.props.bookings.map((booking,i) =>{
                       return(
                            <tr key={i}>
                                
                                <td> {this.props.customers.find(cust=>cust._id ===booking.customer).name}</td>
                                <td> {(this.props.rooms.filter(room=>((booking.rooms.includes(room._id)))).map(rm=>rm.roomNo)).join(', ')}</td>
                                <td> {booking.checkIn && moment(booking.checkIn).format('LL')}</td> 
                                <td> {booking.time}</td>
                                <td>{booking.checkOut && moment(booking.checkOut).format('LL')}</td> 
                                 
                                <td> {booking.adults}</td>                                                            
                                <td> { <button className="btn btn-secondary" onClick={() => {
                                                   this.handleRemove(booking._id)
                                                    }} >Remove</button>}</td>                               
                            </tr>                 
                       )
                   }) 
                }
            </tbody>
        </table>
        
        <Link to={`/bookings/new`} ><u><strong>Add Booking</strong></u></Link> <br/><br/>
        </div>
               ) : (
                <p>  <img src="/images/load2.jpg" alt="" /></p>
               )}

        </div>
    )

 }

    
}
const mapStateToProps = (state) => {
    
    return {
        bookings:state.bookings,
        rooms: state.rooms,
        customers: state.customers
               
    }
}

export default connect(mapStateToProps)(BookingsList)