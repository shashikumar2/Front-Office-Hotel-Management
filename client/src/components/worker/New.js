import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startPostWorker } from '../../actions/workersAction'
import {Redirect } from 'react-router-dom'

class WorkersNew extends React.Component{
    constructor(){
        super()
        this.state= {
            name : '',            
            phone : '',
            available : false

        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleAvailable=(e)=>{
        this.setState(prevState=>{
            return{
                available : !prevState.available
            }
        })
    }

    handleSubmit = (e)=>{
     e.preventDefault()
     console.log(this.state)
    const redirect=()=>{
     
        return this.props.history.push('/workers')
    }
     this.props.dispatch(startPostWorker(this.state,redirect))
     
    
}



    render(){
        return (

            <div>
              <br/> <br/> <br/>
            
            <div className="row"> 
            <div className="col-md-6">
               <img src="/images/workers3.jpg" className="img-fluid float-left" alt="Responsive image" />
                </div>




              <div className="col-md-5 offset-md-1">
                <p className="h4 text-center">Add Worker </p><br/>

                <form onSubmit = {this.handleSubmit}>
                
                <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor= 'name'>Name</label>   
                    <div class="col-sm-10">  
                    <input className="form-control form-control-sm"  type ='text' id ='name' name ='name' value = { this.state.name} onChange= {this.handleChange}/>
                    </div>    
                </div>                   

                
                <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor= 'phone'>Phone</label>   
                    <div class="col-sm-10">  
                    <input className="form-control form-control-sm"  type ='text' id ='phone' name='phone' value = { this.state.phone} onChange= {this.handleChange}/>
                    </div>    
                </div> 
                    
                <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor='available'>Available</label> <br/> <br/>
                    <div class="col-sm-1 "> 
                    <input className=" form-control-sm" type='checkbox' id='available' name='available' value={this.state.available} onChange={this.handleAvailable}/>
                    </div>    
                </div>       

                <input className="btn btn-secondary btn-sm btn-block" type ='submit' value='Submit' /><br/><br/><br/>

                    </form>
                </div>
            </div>
         </div>
        )
    }
}
export default connect()(WorkersNew)

