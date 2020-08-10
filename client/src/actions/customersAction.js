import axios from 'axios'

/************* Get Customer *************/

// sync
export const setCustomers = (customers) => {
    return { type: 'SET_CUSTOMERS', payload: customers}
}

// async 
export const startGetCustomers = () => {
    return (dispatch) => {
        axios.get('/customers', {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('customersAction',response.data)
                const customers = response.data 
                
                dispatch(setCustomers(customers))
                //redirect()
                
            })
    }
}

/************* Post Customer *************/

export const startPostCustomer = (customersdata, redirect) => {
    return (dispatch) => {
        axios.post('/customers/new', customersdata,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('customerAddAction', response.data) 
                 redirect()              
                 dispatch(startGetCustomers())                
            })
    }
}


/************  Delete Customer **************/

export const startDeleteCustomer = (customerId) => {
    return (dispatch) => {
        console.log('custdelAction',customerId)
        axios.delete(`/customers/${customerId}`, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('customerDeleteAction', response.data)       
                dispatch(startGetCustomers())                

            })
    }
}