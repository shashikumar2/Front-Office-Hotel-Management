import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//import '../../App.css'

import {startGetWorkers, startPutWorker, startDeleteWorker} from '../../actions/workersAction'

class WorkersList extends React.Component{

    componentDidMount() {  
        if (this.props.workers.length === 0) {
            this.props.dispatch(startGetWorkers())
        }
    }
    
    
    handleAvailableUpdate=(worker)=>{                
        this.props.dispatch(startPutWorker(worker._id, {available:!worker.available}))   
    }


    handleRemove = (id) =>{
        this.props.dispatch(startDeleteWorker(id))        
    }
     
    render(){
        console.log('this.props.user', this.props.user)
      return(
    
        <div>

        <p className="h4 text-center"><em><strong>Workers</strong></em></p>
        <img src="/images/services7.jpeg" className="img-fluid col-md-12" alt="Responsive image" />
        <br/> <br/> 
        
        <div class="row"> 
                {
                   this.props.workers.map((worker,i) =>{
                       return( 
                        
                        <div class="col-sm-3">
                        <div class="card  border-secondary  mb-5" >
                            <div class="card-header text-white bg-secondary h6"><strong><em>
                              Worker
                              </em></strong>
                              </div>

                   <div class="card-body">
                      
                      <p class="card-text h6"><strong> <em>Name : {worker.name} </em></strong></p>                       
                      <p class="card-text h6"><strong> <em>Phone : {worker.phone}</em></strong></p>
                      <p class="card-text h6"><strong><input type="checkbox" checked={worker.available} onChange={() => {
                                                        this.handleAvailableUpdate(worker)
                                                    }} /> <em> Available </em></strong></p>
                   </div>

                   <div class="card-footer text-white bg-light  ">
                   <h6 class="btn btn-dark ">{ <button onClick={() => {
                                                   this.handleRemove(worker._id)
                                                    }}><em><strong>Remove</strong></em></button>}</h6>
                   </div>
                   </div>
                   </div>
                   
                  )
                }) 
             }
             </div>
        
        { (this.props.user.role == 'owner')?  <Link to={`/workers/new`} ><u><strong>Add Worker</strong></u></Link>  : (<div></div>)}
        <br/><br/>

        </div>
    )

 }

    
}
const mapStateToProps = (state) => {
    return {
        workers:state.workers,
        user:state.user
        
    }
}

export default connect(mapStateToProps)(WorkersList)