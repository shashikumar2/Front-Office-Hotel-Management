import React from 'react'
import { connect } from 'react-redux'
import { startUserLogin } from '../../actions/userAction'


class Login extends React.Component{
    constructor(){
        super()
        this.state= {
            
            email : '',
            password : '',
    
        }
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
     
        return this.props.history.push('/')
        }    
        this.props.dispatch(startUserLogin(this.state,redirect))    
    }


    render(){
        return (
          <div>
              <br/> <br/> 
            <div className="row mt-4">   
              <div className="col-md-6">
               <img src="/images/login2.jpg" className="img-fluid float-left" alt="Responsive image" />
                </div>


              <div className="col-md-5 offset-md-1">             
                               
                
               
                <p  className="h3 text-center"><em><strong>Login</strong></em></p><br/> 

                <form onSubmit = {this.handleSubmit}>


                <div className="form-group row">    
                    <label class="col-sm-2 col-form-label col-form-label-sm h3"  htmlFor= 'email'>Email</label>   
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

                <input className="btn btn-secondary btn-sm btn-block" type ='submit' value='Submit' /><br/><br/><br/>

                    </form>
                </div>
            </div>
        </div> 
        )
    }
}
export default connect()(Login)