const initialState = {
    slides: [],
    currentSlide: null,
    loadingStatus: 'idle'
}

const slideReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SLIDES_LOADED":
            return {
                ...state,
                slides: action.payload,
                loadingStatus: 'idle',
                currentSlide: action.payload[0].backdrop_path
            }
        case "SLIDES_LOADING":
            return {
                ...state,
                loadingStatus: 'loading',
            }
        case "SLIDES_ERROR":
            return{
                ...state,
                loadingStatus: 'error',
            }
        
        case "CUR_SLIDE":
            return {
                ...state,
                currentSlide: state.slides[action.payload].backdrop_path
            }
    
        default: return state
    }
}

export default slideReducer