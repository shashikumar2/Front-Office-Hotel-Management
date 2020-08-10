import React from 'react'
import { connect } from 'react-redux'
import { startUserRegister } from '../../actions/userAction'


class Register extends React.Component{
    constructor(){
        super()
        this.state= {
            role : '',
            username : '',
            email : '',
            password : ''

        }
    }

    handleRole = (role) => {
        this.setState({role})
    }


    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e)=>{
     e.preventDefault()
    // console.log(this.state)
    const redirect=()=>{
     
        return this.props.history.push('/login')
    }
     this.props.dispatch(startUserRegister(this.state,redirect))    
}



    render(){
        return (

            <div>
              <br/> <br/> 
            <div className="row"> 
                 <div className="col-md-6">
              <img src="/images/register3.png" className="img-fluid float-left" alt="Responsive image" /> 
                  </div>
             

            <div className="col-md-5 offset-md-1">  

            
                 
                 <p  className="h3 text-center"><em><strong>Register</strong></em></p>               

                <form onSubmit = {this.handleSubmit}>
                <br/>

                <div className="form-group row">  
                <label  class="col-sm-2 col-form-label col-form-label-sm h3">Role? </label>
                <div class="col-sm-5">  

                    <div class="radio radio-danger">
                    <input  type="radio" id="owner" value={this.state.role} onChange={() => {this.handleRole('owner')}} checked={this.state.role == 'owner'} />
                    <label class=" col-sm-2"  >Owner  </label>
                    </div>
                    
                    <div class="radio radio-danger">
                    <input  type="radio" id="executive" value={this.state.role} onChange={() => {this.handleRole('executive')}} checked={this.state.role == 'executive'} />
                    <label class="col-sm-2" >Executive  </label>
                    </div>
                    
                    </div>    
                </div>

                {/*
                    <div className="form-group row">  
                <label  class="col-sm-2 col-form-label col-form-label-sm h3">Role? </label>
                <div class="col-sm-1">  

                    <div class="radio radio-danger">
                    <input  type="radio" id="owner" value={this.state.role} onChange={() => {this.handleRole('owner')}} checked={this.state.role == 'owner'} />
                    <label class="col-sm-2 " htmlFor="owner" value="owner" >Owner  </label>
                    </div>
                    
                    <div class="radio radio-danger">
                    <input  type="radio" id="executive" value={this.state.role} onChange={() => {this.handleRole('executive')}} checked={this.state.role == 'executive'} />
                    <label class="col-lg-2 col-form-label col-form-label-sm h3" htmlFor="executive" value="executive" >Executive  </label>
                    </div>
                    
                    </div>    
                </div>



                */}
               

                <div className="form-group row">  
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"   htmlFor= 'username'>Username</label>  
                    <div class="col-sm-10">   
                    <input className="form-control form-control-sm" type ='text' id ='name' name ='username' value = { this.state.username} onChange= {this.handleChange}/>
                    </div>    
                </div><br/>


                <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'email'>Email</label> 
                    <div class="col-sm-10">   
                    <input className="form-control form-control-sm" type ='text' id ='email' name='email'value = { this.state.email} onChange= {this.handleChange}/>
                    </div>    
                </div><br/>

                <div className="form-group row">
                    <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'password'>Password</label> 
                    <div class="col-sm-10">   
                    <input className="form-control form-control-sm" type ='password' id ='password' name='password' value = { this.state.password} onChange= {this.handleChange}/>
                    </div>    
                </div><br/>


                <input className="btn btn-secondary btn-sm btn-block" type ='submit' value='Submit' />

                    </form>
                </div>
             </div><br/><br/>
             </div>
        )
    }
}
export default connect()(Register)

