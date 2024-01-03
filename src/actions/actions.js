export const loadingSlides = () => {
    return {
        type: "SLIDES_LOADING"
    }
}

export const loadedSlides = (slides) => {
    return {
        type: "SLIDES_LOADED",
        payload: slides
    }
}

export const errorSlides = () => {
    return {
        type: "SLIDES_ERROR"
    }
}

export const curSlide = (n) => {
    return {
        type: "CUR_SLIDE",
        payload: n
    }
}

export const loadingCurrent = () => {
    return {
        type: 'LOADING_CURRENT'
    }
}

export const loadingErrCurrent  = () => {
    return {
        type: 'LOADING_ERR_CURRENT'
    }
}

export const loadedCurrent = (curr) => {
    return {
        type: 'LOADED_CURRENT',
        payload: curr

    }
}

export const soonLoading = () => {
    return {
        type: "SOON_LOADING"
    }
}
export const soonErr = () => {
    return {
        type: "SOON_LOADING_ERR"
    }
}
export const soonLoaded = (data) => {
    return {
        type: "SOON_LOADED",
        payload: data
    }
}
// export const soonLoading = () => {
//     return {
//         type: "SOON_LOADING"
//     }
// }

export const seatsFetched = (payload) => {
    return {
        type: 'SEATS_FETCHED',
        payload
    }
}

export const changeDate = (payload) => {
    return {
        type: 'CHANGE_DATE',
        payload
    }
}

export const changeTime = (payload) => {
    return {
        type: 'CHANGE_TIME',
        payload
    }
}

export const addSeat = (payload) => {
    return {
        type: 'SEAT_ADD',
        payload
    }
}

export const removeSeat = (payload) => {
    return {
        type: 'SEAT_REMOVE',
        payload
    }
}

export const deleteAllSeats = () => {
    return {
        type: "ALL_SEATS_REMOVE"
    }
}

export const formLoading = () => {
    return {
        type: "FORM_LOADING"
    }
}

export const formShow = () => {
    return {
        type: "FORM_SHOW",
    }
}


export const formError = () => {
    return {
        type: "FORM_ERROR"
    }
}


export const formCongrats = () => {
    return {
        type: "FORM_CONGRATS"
    }
}

export const formClear = (dispatch) => {
    dispatch(deleteAllSeats())
    return {
        type: "FORM_CLEAR"
    }
}


