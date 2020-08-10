import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import roomsReducer from '../reducers/roomsReducer'
import customersReducer from '../reducers/customersReducer'
import bookingsReducer from '../reducers/bookingsReducer'
import workersReducer from '../reducers/workersReducer'
import servicesReducer from '../reducers/servicesReducer'
import billingsReducer from '../reducers/billingsReducer'
import billingShowReducer from '../reducers/billingShowReducer'

const configureStore = () => {
    const store = createStore(combineReducers({  
        user: userReducer,         
        rooms: roomsReducer, 
        customers: customersReducer,  
        bookings : bookingsReducer,
        workers : workersReducer,
        services : servicesReducer,
        billings : billingsReducer,
        billing : billingShowReducer

    }), applyMiddleware(thunk))
    return store 
}

export default configureStore