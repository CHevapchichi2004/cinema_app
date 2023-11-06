const initialState = {
    current: [],
    status: 'idle'
}

const currentReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_CURRENT":
            return {
                ...state,
                status: 'loading'
            }
        case 'LOADING_ERR_CURRENT': 
            return {
                ...state,
                status: 'error'
            }
        case 'LOADED_CURRENT':
            return {
                ...state,
                status: 'idle',
                current: action.payload
            }
        default:
            return state
    }
}

export default currentReducer