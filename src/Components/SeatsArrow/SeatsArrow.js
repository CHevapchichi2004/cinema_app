import { useDispatch, useSelector } from "react-redux"
import { addSeat, removeSeat } from "../../actions/actions";

 const SeatsArrow = ({arrName, seats}) => {
    
    const dispatch = useDispatch();
    const choosedSeats = useSelector(state => state.order.choosedSeats)

     const view = Object.keys(seats).map((item) => {
        if (seats[item] !== 'booked') {
            return <div className={ 'cinema__seat available ' + (choosedSeats.includes(arrName + item) ? ' selected' : '')} key={arrName + item} onClick={() => {
                    if (choosedSeats.includes(arrName+item)) {
                        dispatch(removeSeat(arrName+item))
                    } else {
                        dispatch(addSeat(arrName+item))
                    }
            }}></div>
        } else {
            return <div key={arrName + item} className={ 'cinema__seat booked'}></div>
        }
     })
    return (
        <div className="cinema__arrow">
            {view}
        </div>
    )
}

// Создал массив с 'A1' обозначением строки и номера места, необходимо диспэтчить и класс выбирать по условию, есть ли строка номера и строки места
//  в массиве в стэйте)
export default SeatsArrow