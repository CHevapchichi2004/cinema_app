const initialState = {
    curTime: '',
    curDate: '',
    arrows: null,
    seats: null,
    choosedSeats: [],
}

const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHOOSE_DATE':
            return;
        case 'CHOOSE_TIME':
            return;
        case "SEATS_FETCHED":
            return {
                ...state,
                seats: action.payload,
                curDate: Object.keys(action.payload)[0],
                curTime: Object.keys(action.payload[Object.keys(action.payload)[0]])[0],
                arrows: action.payload[Object.keys(action.payload)[0]][Object.keys(action.payload[Object.keys(action.payload)[0]])[0]],
                choosedSeats: []
            }
        case "CHANGE_DATE":
            return {
                ...state,
                curDate: action.payload,
                curTime: Object.keys(state.seats[action.payload])[0],
                arrows: state.seats[action.payload][Object.keys(state.seats[action.payload])[0]],
                choosedSeats: []
            }

        case "CHANGE_TIME":
            return {
                ...state,
                curTime: action.payload,
                arrows: state.seats[state.curDate][action.payload],
                choosedSeats: []
            }
        case "SEAT_ADD":
            return {
                ...state,
                choosedSeats: [...state.choosedSeats, action.payload]
            }
        case "SEAT_REMOVE":
            return {
                ...state,
                choosedSeats: state.choosedSeats.filter((item) => {
                    return item !== action.payload
                })
            }
        case "ALL_SEATS_REMOVE":
            return {
                ...state,
                choosedSeats: []
            }
        default:
            return state;
    }
}
export default orderReducer