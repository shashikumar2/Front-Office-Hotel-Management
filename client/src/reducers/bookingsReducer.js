const bookingsInitialState = []

const bookingsReducer = (state = bookingsInitialState, action) => {
    switch(action.type) {
        case 'SET_BOOKINGS' : {
            return [].concat(action.payload)
        }
        default: {
            // return [...state]
            return [].concat(state)
        }
    }
}

export default bookingsReducer