import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'

import { startGetRooms, startPostRoom, startPutRoom,startDeleteRoom } from '../../actions/roomsAction'




class RoomsListAndAdd extends React.Component{
    constructor(){
        super()
        this.state= {
            roomNo : undefined,
            airConditioner : false
        }
    }

    componentDidMount() {  
        if (this.props.rooms.length === 0) {
            this.props.dispatch(startGetRooms())
        }
    }
    
    handleAvailableUpdate=(room)=>{                
        this.props.dispatch(startPutRoom(room._id, {airConditioner:!room.airConditioner}))   
    }


    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleAvailable=(e)=>{
        this.setState(prevState=>{
            return{
                airConditioner : !prevState.airConditioner
            }
        })
    }

    handleSubmit = (e)=>{
     e.preventDefault()
     console.log(this.state)
    
     this.props.dispatch(startPostRoom(this.state)) 
     
     this.setState({roomNo : ''})
     
    }

    handleRemove = (id) =>{
      this.props.dispatch(startDeleteRoom(id))    
    }


    render(){
        console.log("this.props.rooms", this.props.rooms)
        return (
            <div>
                 
                 <p  className="h4 text-center"><em><strong>Rooms</strong></em></p>
                <img src="/images/rooms2.jpg"  class="img-fluid col-md-12" alt="Responsive image"/>  <br/> <br/>                     
               
                <div class="row"> 
                {
                   this.props.rooms.map((room,i) =>{
                       return( 
                        
                        <div class="col-sm-3">
                        <div class="card  border-secondary  mb-5" >
                            <div class="card-header text-white bg-secondary h6"><strong><em>
                              Room 
                              </em></strong>
                              </div>

                   <div class="card-body">
                       <p class="card-title"><strong><em>Room No : {room.roomNo}</em></strong></p>
                        <p class="card-text h6"><strong> <em>Air Conditioner </em></strong><input type="checkbox" checked={room.airConditioner} onChange={() => {
                                                        this.handleAvailableUpdate(room)
                                                    }} /></p>
                   </div>

                   <div class="card-footer text-white bg-light  ">
                   <h6 class="btn btn-dark">{ <button onClick={() => {
                                                   this.handleRemove(room._id)
                                                    }}><strong><em>Remove</em></strong></button>}</h6>
                   </div>
                   </div>
                   </div>
                   
                  )
                }) 
             }
             </div>   
    
            <div>
            <div className="row ">
            <div className="col-md-3">    
            <p className="h5"><u>Add room </u></p><br/>
            
                <form onSubmit = {this.handleSubmit}>

                <div className="form-group row">
                    <label class="col-sm-4 col-form-label col-form-label-sm h3" htmlFor= 'roomNo'>Room No</label>   
                    <div class="col-sm-8">  
                    <input className="form-control form-control-sm"   type ='text' id ='roomNo' name ='roomNo' value = { this.state.roomNo} onChange= {this.handleChange}/>
                    </div>    
                </div>


                   {/* <label htmlFor= 'roomNo'>Room Number</label>   
                    <input type ='text' id ='roomNo' name ='roomNo' value = { this.state.roomNo} onChange= {this.handleChange}/>
                    <br/>
            <br/>*/}

                   {/* <input type='checkbox' id='airConditioner' name='airConditioner' value={this.state.airConditioner} onChange={this.handleAvailable}/>
                             <label htmlFor='airConditioner'> AC</label> <br/> <br/>*/}
                    
                    <div className="form-group row"> 
                     <label class="col-sm-4 col-form-label col-form-label-sm h3" htmlFor='airConditioner'>AC</label>
                     <div class="col-sm-2">
                    <input className="form-control-sm" type='checkbox' id='airConditioner' name='airConditioner' value={this.state.airConditioner} onChange={this.handleAvailable}/>
                            
                    </div>    
                     </div>




                             <input className="btn btn-secondary btn-sm btn-block" type ='submit' value='Submit' /><br/><br/><br/>
                   {/* <input type ='submit' value='Add' /><br/><br/>*/}

                    </form>
                   
                  
                    </div> 
                    </div>
                    </div>    
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {        
        rooms:state.rooms,        
    }
}
export default connect(mapStateToProps)(RoomsListAndAdd)

