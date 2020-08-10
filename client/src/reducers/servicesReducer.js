const servicesInitialState = []

const servicesReducer = (state = servicesInitialState, action) => {
    switch(action.type) {
        case 'SET_SERVICES' : {
            return [].concat(action.payload)
        }
        default: {
            // return [...state]
            return [].concat(state)
        }
    }
}

export default servicesReducer