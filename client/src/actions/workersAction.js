import axios from 'axios'

/************* Get Worker *************/

// sync
export const setWorkers = (workers) => {
    return { type: 'SET_WORKERS', payload: workers}
}

// async 
export const startGetWorkers = () => {
    return (dispatch) => {
        axios.get('/workers', {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('workersAction',response.data)
                const workers = response.data                 
                dispatch(setWorkers(workers))                
            })
    }
}

/************* Post Worker *************/

export const startPostWorker = (workersdata, redirect) => {
    return (dispatch) => {
        axios.post('/workers/new', workersdata,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('workerAddAction', response.data) 
                 redirect()              
                 dispatch(startGetWorkers())                
            })
    }
}


/*************Put worker*************/


export const startPutWorker = (workerId, workerdata) => {
    return (dispatch) => {
        axios.put(`/workers/${workerId}`, workerdata,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })            
            .then(response => {
                 console.log('workerEditAction', response.data)
                const worker = response.data                 
                dispatch(startGetWorkers())                
            })
    }
}

/************  Delete Worker **************/

export const startDeleteWorker = (workerId) => {
    return (dispatch) => {
        console.log('workerdelAction',workerId)
        axios.delete(`/workers/${workerId}`, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('workerDeleteAction', response.data)       
                dispatch(startGetWorkers())                

            })
    }
}