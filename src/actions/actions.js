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


