const customersInitialState = []

const customersReducer = (state = customersInitialState, action) => {
    switch(action.type) {
        case 'SET_CUSTOMERS' : {
            return [].concat(action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}
export default customersReducer