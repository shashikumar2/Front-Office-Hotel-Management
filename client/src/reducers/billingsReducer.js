const billingsInitialState = []

const billingsReducer = (state = billingsInitialState, action) => {
    switch(action.type) {
        case 'SET_BILLINGS' : {
            return [].concat(action.payload)
        }
        default: {
            
            return [].concat(state)
        }
    }
}

export default billingsReducer



