import axios from 'axios'

/************* Get Service *************/

// sync
export const setServices = (services) => {
    return { type: 'SET_SERVICES', payload: services}
}

// async 
export const startGetServices = () => {
    return (dispatch) => {
        axios.get('/services', {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('servicesAction',response.data)
                const services = response.data                 
                dispatch(setServices(services))                
            })
    }
}

/************* Post Service *************/

export const startPostService = (servicesdata, redirect) => {
    return (dispatch) => {
        axios.post('/services/new', servicesdata,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('serviceAddAction', response.data) 
                 redirect()              
                 dispatch(startGetServices())                
            })
    }
}


/*************Put service*************/


export const startPutService = (serviceId, servicedata) => {
    return (dispatch) => {
        axios.put(`/services/${serviceId}`, servicedata,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            
            .then(response => {
                 console.log('serviceEditAction', response.data)
           
                
                dispatch(startGetServices())
                
            })
    }
}



/************  Delete Service **************/

export const startDeleteService = (serviceId) => {
    return (dispatch) => {
        console.log('servicedelAction',serviceId)
        axios.delete(`/services/${serviceId}`, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('serviceDeleteAction', response.data)       
                dispatch(startGetServices())               
            })
    }
}