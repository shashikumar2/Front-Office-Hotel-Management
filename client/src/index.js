import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux' 
import configureStore from './store/configureStore'

import {startGetUser} from './actions/userAction'
import {startGetCustomers} from './actions/customersAction'
import {startGetRooms} from './actions/roomsAction'
import {startGetBookings} from './actions/bookingsAction'
import {startGetWorkers} from './actions/workersAction'
import {startGetServices} from './actions/servicesAction'
import {startGetBillings} from './actions/billingsAction'

const store = configureStore() 
console.log(store.getState())

store.subscribe(() => {
    console.log('index',store.getState())
})


if(localStorage.getItem('token')) {
    store.dispatch(startGetUser())
    store.dispatch(startGetCustomers())
    store.dispatch(startGetRooms())
    store.dispatch(startGetBookings())
    store.dispatch(startGetWorkers())
    store.dispatch(startGetServices())
    store.dispatch(startGetBillings())
}

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root') )