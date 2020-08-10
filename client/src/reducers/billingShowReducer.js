/*************Billing Show Reducer***************/

const billingInitialState = {}

const billingShowReducer = (state = billingInitialState, action) => {
    switch(action.type) {
        case 'SET_SHOW_BILLING' : {
            return Object.assign({},action.payload)
        }
        default: {
            
            return Object.assign({},state)
        }
    }
}

export default billingShowReducer