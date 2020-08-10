import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import '../../App.css'

import {startGetServices, startDeleteService, startPutService} from '../../actions/servicesAction'
import {startGetRooms} from '../../actions/roomsAction'
import {startGetWorkers} from '../../actions/workersAction'


class ServicesList extends React.Component{

    componentDidMount() {  
      //  if (this.props.rooms.length === 0 || this.props.workers.length === 0 || this.props.services.length === 0) {
      //  if (this.props.services.length === 0 ) {
            this.props.dispatch(startGetRooms())
            this.props.dispatch(startGetWorkers())
            this.props.dispatch(startGetServices())
       // }
       // }
    }

    handleCompletedUpdate=(service)=>{                
        this.props.dispatch(startPutService(service._id, {completed:!service.completed}))   
    }


    handleRemove = (id) =>{
        this.props.dispatch(startDeleteService(id))        
    }
     
    render(){
      return(
    
        <div>
        {((this.props.rooms.length!=0) && (this.props.workers.length!=0) && (this.props.services.length!=0)) ?  (
        <div>
        <p  className="h4 text-center"><em><strong>Services</strong></em></p>
        
        <img src="/images/services9.jpeg" className="img-fluid col-md-12" alt="Responsive image" /> <br/><br/>   
        
        <table className="table table-sm table-striped"  >
            <thead className="thead-dark">
                <tr>
                    
                    <th> Room</th>
                    <th> Service</th>
                    <th> Worker</th>                  
                    <th> Date</th>
                    <th> Time</th>
                    <th> Completed?</th>
                    <th> Delete?</th>  
                </tr>
            </thead>

            <tbody>
                {
                   this.props.services.map((service,i) =>{
                       return(
                            <tr key={i}>
                                
                                <td> {this.props.rooms.find(rm=>rm._id ===service.room).roomNo}</td>
                                <td> {service.type}</td> 
                                <td> {this.props.workers.find(work=>work._id ===service.worker).name}</td>
                                <td>{service.date && moment(service.date).format('LL')}</td> 
                                <td> {service.time}</td>
                                <td><input type="checkbox" checked={service.completed} onChange={() => {
                                                        this.handleCompletedUpdate(service)
                                                    }} /></td>      
                                                                                           
                                <td> { <button onClick={() => {
                                                   this.handleRemove(service._id)
                                                    }}>Remove</button>}</td>                               
                            </tr>                 
                       )
                   }) 
                }
            </tbody>
        </table>
        
        <Link to={`/services/new`} ><u><strong>Add Service</strong></u></Link> <br/><br/>
        </div>
               ) : (
               
                <p> <img src="/images/load2.jpg" alt="" /></p>
               )}

        </div>
    )

 }

    
}
const mapStateToProps = (state) => {
    return {
        services:state.services,
        rooms: state.rooms,
        workers: state.workers
               
    }
}

export default connect(mapStateToProps)(ServicesList)