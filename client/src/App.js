import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'

import Home1 from './components/static/Home1'
import Home2 from './components/static/Home2'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import RoomsListAndAdd from './components/room/ListAndAdd'

import CustomersList from './components/customer/List'
import CustomersNew from './components/customer/New'

import BookingsList from './components/booking/List'
import BookingsNew from './components/booking/New'

import WorkersList from './components/worker/List'
import WorkersNew from './components/worker/New'

import ServicesList from './components/service/List'
import ServicesNew from './components/service/New'

import BillingsList from './components/billing/List'
import BillingsNew from './components/billing/New'
import BillingShow from './components/billing/Show'

import { startUserLogout } from './actions/userAction'

function App(props) {
  
  const handleLogout = () => {
    props.dispatch(startUserLogout())
  }

    return (
        
      <BrowserRouter>
        <div>
        <Navbar  light expand="md"  className="mb-1 navbar-dark bg-secondary">
        <NavbarBrand><strong>Front Office Hotel Management</strong></NavbarBrand>
        <Nav className="ml-auto navbar-dark "  navbar> 
        {(Object.keys(props.user).length>0)? (
                    
          <React.Fragment>
          
          <NavItem>
          <Link className="nav-link text-light" to="/"><strong>Home</strong></Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link text-light" to="/rooms"><strong>Rooms</strong> </Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link text-light"  to="/customers"><strong>Customers</strong> </Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link text-light" to="/bookings"><strong> Booking</strong></Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link text-light" to="/workers"><strong> Workers</strong></Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link text-light" to="/services"><strong> Services</strong></Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link text-light" to="/billings"><strong> Billing</strong></Link>      
          </NavItem> 
          <NavItem>
          <Link className="nav-link text-light" to="#"  onClick={handleLogout}><strong>Logout</strong> </Link>
          </NavItem>     

          </React.Fragment> 
          
          ):(
                       
            <React.Fragment>
            <NavItem>
            <Link className="nav-link text-light" to="/"><strong>Home</strong></Link>
            </NavItem>
            <NavItem>
            <Link className="nav-link text-light" to="/login"><strong>Login</strong></Link> 
            </NavItem>
            <NavItem>
            <Link className="nav-link text-light" to="/register"><strong>Register</strong></Link>
            </NavItem>
            </React.Fragment>
                        
            )
          }  
           </Nav>  
         </Navbar>   

         <div className="container" >

            <switch>

            {(Object.keys(props.user).length>0)? (
            <Route path="/" component={Home2} exact={true} />
            ):(
              <Route path="/" component={Home1} exact={true} /> 
            )}
            
            <Route path="/login" component={Login} exact={true} />
            <Route path="/register" component={Register} exact={true}/> 
            
            <Route path="/rooms" component={RoomsListAndAdd} exact={true} /> 

            <Route path="/customers" component={CustomersList} exact={true} /> 
            <Route path="/customers/new" component={CustomersNew} />

            <Route path="/bookings" component={BookingsList} exact={true} />
            <Route path="/bookings/new" component={BookingsNew} /> 

            <Route path="/workers" component={WorkersList} exact={true} />
            <Route path="/workers/new" component={WorkersNew} />

            <Route path="/services" component={ServicesList} exact={true} />
            <Route path="/services/new" component={ServicesNew} />

            <Route path="/billings" component={BillingsList} exact={true} /> 
            <Route path="/billings/new" component={BillingsNew} exact={true} /> 
            <Route path= "/billings/show/:id" component={BillingShow} exact={true} />

            </switch> 
            </div>
          </div>  
        </BrowserRouter>        
        )
}

const mapStateToProps = (state) => {
  return {
      user : state.user,         
  }
}
export default connect(mapStateToProps)(App)
       
           
            
          

                    
              
         



    


