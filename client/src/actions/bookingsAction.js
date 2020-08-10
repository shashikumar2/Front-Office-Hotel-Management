import axios from 'axios'

/************* GetBooking *************/

// sync
export const setBookings = (bookings) => {
    return { type: 'SET_BOOKINGS', payload: bookings}
}

// async 
export const startGetBookings = () => {
    return (dispatch) => {
        axios.get('/bookings', {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('bookingsAction',response.data)
                const bookings = response.data 
                
                dispatch(setBookings(bookings))
                //redirect()
                
            })
    }
}

/************* Post Booking *************/

export const startPostBooking = (bookingsdata, redirect) => {
    return (dispatch) => {
        axios.post('/bookings/new', bookingsdata,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('bookingAddAction', response.data) 
                 redirect()              
                 dispatch(startGetBookings())                
            })
    }
}


/************  Delete Booking **************/

export const startDeleteBooking = (bookingId) => {
    return (dispatch) => {
        console.log('bookingdelAction',bookingId)
        axios.delete(`/bookings/${bookingId}`, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('bookingDeleteAction', response.data)       
                dispatch(startGetBookings())                

            })
    }
}