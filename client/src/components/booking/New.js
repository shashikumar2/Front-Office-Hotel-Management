import React from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {startPostBooking} from '../../actions/bookingsAction'

class BookingsNew extends React.Component{
    constructor(){
        super()
        this.state= { 
            code : '',          
            customer : '',
            rooms : [],
            checkIn : '',
            time: '',
            checkOut : '',
            adults: '',
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value,            
        })
    }
    
    handleRoomsSelection = (value) => {   
            this.setState(
             {rooms : value.map(val=>val.label)}   
            )    
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
        const redirect=()=>{     
            return this.props.history.push('/bookings')
        }
    
        const customerTemp = this.props.customers.find(cust=> cust.name === this.state.customer)
        const roomsTemp = []

        for(let i=0; i<this.state.rooms.length; i++) {
           roomsTemp.push( this.props.rooms.find(room=> room.roomNo == this.state.rooms[i]) )
        }
        
        const roomsId = []
        for(let i=0; i<roomsTemp.length; i++) {
            roomsId.push( roomsTemp[i]._id)
        }
    
        const bookingData ={
            "code" : this.state.code,
            "customer" : customerTemp._id,        
            "rooms" : roomsId,
            "checkIn" : this.state.checkIn,
            "time" : this.state.time,
            "checkOut" : this.state.checkOut,
            "adults" :  this.state.adults
        }       
        this.props.dispatch(startPostBooking(bookingData, redirect))    
    }

    render(){        
        return (
            <div>
            <br/> <br/> 
             <div className="row bg-light">
                <div className="col-md-8 offset-md-2">
                <p className="h4 text-center">Add Booking </p><br/>
                <form onSubmit = {this.handleSubmit}>

                    <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor= 'code'>Code No</label> 
                    <div class="col-sm-10">                       
                    <input className="form-control form-control-sm"  type ='text' id ='code' name ='code' value = {this.state.code} onChange= {this.handleChange}/>
                    </div>    
                    </div><br/>
                
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'customer'>Customer</label> 
                    <div className="col-sm-10">   
                    <select className="form-control form-control-sm"  id ='customer' name = 'customer' value={this.state.customer} onChange={this.handleChange}>
                        <option value =''>--select--</option>
                        {
                            this.props.customers.map(customer=> {
                                return(
                            
                                 <option  value={customer.name}>{customer.name} </option>
                                )
                           })
                        }
                    </select>
                    </div>
                    </div><br/>

                    <div className="form-group row">    
                    <label className="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'rooms'>Rooms</label> 
                    <div class="col-sm-10">    
                    <Select className="basic-multi-select" 
                            isMulti options={this.props.rooms.map(rms=> {
                                return {label:rms.roomNo, value:rms.roomNo }                           
                            })}                                                
                            onChange={this.handleRoomsSelection} />                            
                    </div>
                    </div><br/>
                                  
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor='checkIn'>Check-In</label>
                    <div class="col-sm-10">           
                    <input className="form-control form-control-sm" type='date' id='checkIn'  name='checkIn' value={this.state.checkIn} onChange={this.handleChange}/> 
                    </div>
                    </div><br/>
                
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label col-form-label-sm h3" htmlFor='time'>Check-In time</label>
                    <div class="col-sm-10"> 
                    <input className="form-control form-control-sm" type='time' id='time' name='time' value={this.state.time} onChange={this.handleChange}/> 
                    </div>
                    </div><br/>

                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor='checkOut'>Check out</label>
                    <div class="col-sm-10">           
                    <input className="form-control form-control-sm" type='Date' id='checkOut'  name='checkOut' value={this.state.checkOut} onChange={this.handleChange}/>
                    </div>
                    </div><br/>

                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'adults'>No Of Adults</label>   
                    <div class="col-sm-10"> 
                    <input className="form-control form-control-sm" type ='text' id ='adults' name ='adults' value = { this.state.adults} onChange= {this.handleChange}/>
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

const mapStateToProps = (state) => {
    return {
        customers : state.customers,
        rooms : state.rooms,                       
    }
}

export default connect(mapStateToProps)(BookingsNew)

