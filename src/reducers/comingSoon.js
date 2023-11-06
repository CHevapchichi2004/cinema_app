const initialState = {
    status: 'idle',
    cards: []
}

const soonReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SOON_LOADING": 
            return {
                ...state,
                status: 'loading'
            }
        case "SOON_LOADING_ERR":
            return {
                ...state,
                status: 'error'
            }
        case "SOON_LOADED":
            return {
                ...state,
                status: 'idle',
                cards: action.payload
            }
        default:
            return state
    }
}

export default soonReducer