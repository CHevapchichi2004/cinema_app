const initialState = {
    error: false,
    congrats: false,
    show: false,
    loading: false,
}

const formReducer = (state = initialState, action)=> {
    switch (action.type) {
        case "FORM_ERROR":
            return {
                congrats: false,
                error: true,
                show: false,
                loading: false,
            }
        case "FORM_LOADING": 
            return {
                congrats: false,
                error: false,
                show: false,
                loading: true,
            }
        case "FORM_SHOW": 
            return {
                congrats: false,
                error: false,
                show: !state.show,
                loading: false,
            }
        case "FORM_CONGRATS": 
            return {
                congrats: true,
                error: false,
                show: false,
                loading: false,
            }
        case "FORM_CLEAR":
            return {
                congrats: false,
                error: false,
                show: false,
                loading: false,
            }
        default:
            return {
                ...state
            }
        }

    }
export default formReducer