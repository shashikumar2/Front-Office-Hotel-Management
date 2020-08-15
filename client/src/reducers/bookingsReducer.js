const bookingsInitialState = []

const bookingsReducer = (state = bookingsInitialState, action) => {
    switch(action.type) {
        case 'SET_BOOKINGS' : {
            return [].concat(action.payload)
        }
        default: {         
            return [].concat(state)
        }
    }
}
export default bookingsReducer