import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startPostService } from '../../actions/servicesAction'
import {Redirect } from 'react-router-dom'

class ServicesNew extends React.Component{
    constructor(){
        super()
        this.state= {  
                   
            room : '',
            type : '',
            worker : '',
            date: '',
            time: '',
            completed: false
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    handleComplete=(e)=>{
        this.setState(prevState=>{
            return{
                completed : !prevState.completed
            }
        })
    }



    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
        const redirect=()=>{
     
        return this.props.history.push('/services')
    }
    
    const workerTemp = this.props.workers.find(work=> work.name === this.state.worker)
    const roomTemp = this.props.rooms.find(room=> room.roomNo == this.state.room)


    //console.log('workerTemp', workerTemp)
   // console.log('this.props.rooms', this.props.rooms)
    //console.log('roomTemp', roomTemp)

    const serviceData ={
        
        "room" : roomTemp._id,
        "type" : this.state.type,
        "worker" : workerTemp._id,                
        "date" : this.state.date,
        "time" : this.state.time,
        "completed" : this.state.completed,       
    }
    console.log(serviceData,"serviceData")
     this.props.dispatch(startPostService(serviceData, redirect))    
    }



    render(){
        return (
            <div>
              <br/> <br/> 
            <div className="row bg-secondary"> 
            
               <div className="col-md-8 offset-md-2">
               <p className="h4 text-center">Add Service </p><br/>

                <form onSubmit = {this.handleSubmit}>

                <div className="form-group row"> 
                <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'room'>Room</label>  
                <div class="col-sm-10">  
                    <select  className="form-control form-control-sm" id ='room' name = 'room' value={this.state.room} onChange={this.handleChange}>
                        <option value =''>--select--</option>
                        {
                            this.props.rooms.map(room=> {
                                return(
                            
                                 <option  value={room.roomNo}>{room.roomNo} </option>
                                )
                           })
                        }
                        </select>
                        </div>    
                       </div><br/>

                     
                    <div className="form-group row">  
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor= 'type'>Service Type</label>  
                    <div class="col-sm-10"> 
                    <select className="form-control form-control-sm"id ='type' name ='type' value = { this.state.type} onChange= {this.handleChange}>
                            <option value =''>--select--</option>
                            <option  value='Room Cleaning'>Room Cleaning </option>
                            <option  value='Room Repairing'>Room Repairing </option>
                            <option  value='Food Service'>Food Service </option>                            
                         
                        </select>
                        </div>    
                       </div><br/>

                    <div className="form-group row"> 
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor= 'worker'>Worker</label> 
                    <div class="col-sm-10">
                    <select className="form-control form-control-sm" id ='worker' name = 'worker' value={this.state.worker} onChange={this.handleChange}>
                        <option value =''>--select--</option>
                        {
                            this.props.workers.map(worker=> {
                                return(
                            
                                 <option  value={worker.name}>{worker.name} </option>
                                )
                           })
                        }
                        </select>
                        </div>    
                    </div><br/>

                    <div className="form-group row"> 
                    <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor='date'>Date </label>
                    <div class="col-sm-10">
                            <input className="form-control form-control-sm" type='Date' id='date'  name='date' value={this.state.date} onChange={this.handleChange}/> 
                            </div>    
                       </div><br/>
                    
                    <div className="form-group row"> 
                    <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor='time'>Service time</label>
                    <div class="col-sm-10">
                         <input className="form-control form-control-sm" type='time' id='time' name='time' value={this.state.time} onChange={this.handleChange}/> 
                         </div>    
                     </div><br/>

                     <div className="form-group row"> 
                     <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor='completed'>Completed</label> 
                     <div class="col-sm-1">
                    <input className="form-control-sm" type='checkbox' id='completed' name='completed' value={this.state.completed} onChange={this.handleComplete}/>
                            
                             </div>    
                     </div><br/>                   

                     <input className="btn btn-light btn-sm btn-block" type ='submit' value='Submit' /><br/><br/>

                    </form>
                </div>
             </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        workers : state.workers, 
        rooms : state.rooms,                      
    }
}

export default connect(mapStateToProps)(ServicesNew)

