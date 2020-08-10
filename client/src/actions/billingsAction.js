import axios from 'axios'

/************* Get Billing *************/

// sync
export const setBillings = (billings) => {
    return { type: 'SET_BILLINGS', payload: billings}
}

// async 
export const startGetBillings = () => {
    return (dispatch) => {
        axios.get('/billings', {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('billingsAction',response.data)
                const billings = response.data 
                
                dispatch(setBillings(billings))
        
                
            })
    }
}

/************* Post Billing *************/

export const startPostBilling = (billingsdata, redirect) => {
    return (dispatch) => {
        axios.post('/billings/new', billingsdata,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('billingAddAction', response.data) 
                 redirect()              
                 dispatch(startGetBillings())                
            })
    }
}


/************  Delete Billing **************/

export const startDeleteBilling = (billingId) => {
    return (dispatch) => {
        console.log('billingdelAction', billingId)
        axios.delete(`/billings/${billingId}`, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('billingDeleteAction', response.data)       
                dispatch(startGetBillings())                
            })
    }
}




export const setShowBilling = (billing) => {
    return { type: 'SET_SHOW_BILLING', payload: billing}
}

// async 
export const startShowBilling = (billingId, redirect) => {
    return (dispatch) => {
        console.log('billingShowAction',billingId)
        axios.get(`/billings/show/${billingId}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('billingShowAction', response.data)
                const billing = response.data 
               
                dispatch(setShowBilling(billing))
                redirect()
                
                                
            })
    }
}