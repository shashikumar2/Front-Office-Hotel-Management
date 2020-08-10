import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startPostBilling } from '../../actions/billingsAction'
import {Redirect } from 'react-router-dom'
import moment from 'moment'

class BillingsNew extends React.Component{
    constructor(){
        super()
        this.state= {
            code : '',
            customer : '',
            rooms : '',
            checkIn : '',
            checkOut : '',
            time: '',
            noOfDays : '',
            price: '',
            amount: '',

        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleBlur = () =>{
        console.log(this.state.customer,"this.state.customer")
        let c=this.props.customers.find(cust=> cust.name === this.state.customer)
        let x=this.props.bookings.find(book=>book.customer == c._id)
        console.log(x,"x")
        this.setState ( {
            checkIn : x.checkIn
        })
    }
    
    handleCalculate = ()=>{
        this.setState({
            amount : (this.state.noOfDays * this.state.price * this.state.rooms)
        })

    }


    handleSubmit = (e)=>{
     e.preventDefault()
     console.log(this.state)
    const redirect=()=>{
     
        return this.props.history.push('/billings')
    }
    
    const customerTemp = this.props.customers.find(cust=> cust.name === this.state.customer)
    const bookingTemp = this.props.bookings.find(book=> book.checkIn === this.state.checkIn)

    const billingData ={
        "code" : this.state.code,
        "customer" : customerTemp._id,        
        "rooms" : this.state.rooms,
        "checkIn" : bookingTemp._id,
        "checkOut" : this.state.checkOut,
        "time" : this.state.time,
        "noOfDays" : this.state.noOfDays,
        "price" :  this.state.price,
        "amount" : this.state.amount
    }
     this.props.dispatch(startPostBilling(billingData, redirect))    
    }



    render(){
      //  console.log(this.state.checkIn, "this.state.checkIn")
        return (
            <div>
            <br/><br/>  
              
           <div className="row bg-light">  
           
              <div className="col-md-8 offset-md-2">
                <p className="h4 text-center">Add Bill</p><br/>
                
                <form onSubmit = {this.handleSubmit}>

                <div className="form-group row">
                <label class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor= 'code'>Code No</label> 
                <div class="col-sm-10">                       
                <input className="form-control form-control-sm"  type ='text' id ='code' name ='code' value = {this.state.code} onChange= {this.handleChange}/>
                </div>    
                </div><br/>


                <div className="form-group row">
                <label class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor= 'customer'>Customer</label> 
                <div class="col-sm-10">                                            
                <select className="form-control form-control-sm"  id ='customer' name = 'customer' value={this.state.customer} onChange={this.handleChange} onBlur={this.handleBlur}>
                    <option value =''>--select--</option>
                        {
                            this.props.customers.map(customer=> {
                                return(
                            
                                 <option  value={customer.name}> {customer.name} </option>
                                )
                           })
                        }
                        </select>
                        </div>   
                        </div><br/>
                
                <div className="form-group row">
                     <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'rooms'>Rooms</label>   
                     <div class="col-sm-10">                   
                    <input className="form-control form-control-sm" type ='text' id ='rooms' name ='rooms' value = { this.state.rooms} onChange= {this.handleChange}/>
                    </div>   
                    </div><br/>



               <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor='checkIn'>Check-In</label>  
                    <div class="col-sm-10">                   
                    <input className="form-control form-control-sm"  type='text' id='checkIn'  name='checkIn' value={this.state.checkIn && moment(this.state.checkIn).format('LL')}/> 
                    </div>   
                    </div><br/>   




                <div className="form-group row">
                    <label  class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor='checkOut'>Check-Out</label> 
                    <div class="col-sm-10">                   
                    <input className="form-control form-control-sm"  type='Date' id='checkOut'  name='checkOut' value={this.state.checkOut} onChange={this.handleChange}/> 
                    </div>   
                </div><br/>      
                 

                <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"   htmlFor='time'>Time</label>                    
                    <div class="col-sm-10"> 
                    <input  className="form-control form-control-sm"  type='time' id='time' name='time' value={this.state.time} onChange={this.handleChange}/> 
                    </div>   
                </div><br/>  

                <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"   htmlFor= 'noOfDays'>No Of Days</label>                     
                    <div class="col-sm-10"> 
                    <input className="form-control form-control-sm"    type ='text' id ='noOfDays' name ='noOfDays' value = { this.state.noOfDays} onChange= {this.handleChange}/>
                    </div>   
                </div><br/>    

                <div className="form-group row">
                    <label  class="col-sm-2 col-form-label col-form-label-sm h3"   htmlFor= 'price'>Price/Day</label>                       
                    <div class="col-sm-10"> 
                    <input className="form-control form-control-sm"   type ='text' id ='price' name ='price' value = { this.state.price} onChange= {this.handleChange} onBlur= {this.handleCalculate}/>
                    </div>   
                </div><br/>  

                <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"   htmlFor= 'amount'>Amount</label>                     
                    <div class="col-sm-10"> 
                    <input className="form-control form-control-sm"    type ='text' id ='amount' name ='amount' value = { this.state.amount} />
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
        bookings : state.bookings,                   
    }
}

export default connect(mapStateToProps)(BillingsNew)

 