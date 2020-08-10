const workersInitialState = []

const workersReducer = (state = workersInitialState, action) => {
    switch(action.type) {
        case 'SET_WORKERS' : {
            return [].concat(action.payload)
        }
        default: {
            // return [...state]
            return [].concat(state)
        }
    }
}

export default workersReducer