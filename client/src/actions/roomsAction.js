import axios from 'axios'

/************* Get Customer *************/

// sync
export const setRooms = (rooms) => {
    return { type: 'SET_ROOMS', payload: rooms}
}

// async 
export const startGetRooms = () => {
    return (dispatch) => {
        axios.get('/rooms', {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('roomsAction',response.data)
                const rooms = response.data 
                
                dispatch(setRooms(rooms))
                //redirect()
                
            })
    }
}

/************* Post Customer *************/

export const startPostRoom = (roomsdata, redirect) => {
    return (dispatch) => {
        axios.post('/rooms/new', roomsdata,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('roomAddAction', response.data) 
               //  redirect()              
                 dispatch(startGetRooms())                
            })
    }
}


/*************Put room*************/


export const startPutRoom = (roomId, roomdata) => {
    return (dispatch) => {
        axios.put(`/rooms/${roomId}`, roomdata,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })            
            .then(response => {
                 console.log('roomEditAction', response.data)
                const room = response.data                 
                dispatch(startGetRooms())                
            })
    }
}


/************  Delete Customer **************/

export const startDeleteRoom = (roomId) => {
    return (dispatch) => {
        console.log('roomdelAction',roomId)
        axios.delete(`/rooms/${roomId}`, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('roomDeleteAction', response.data)       
                dispatch(startGetRooms())                

            })
    }
}