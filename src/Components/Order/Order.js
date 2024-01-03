import { useDispatch, useSelector } from 'react-redux'
import '../Order/Order.css'
import { deleteAllSeats, formShow, removeSeat,  } from '../../actions/actions'
import Timer from '../Timer/Timer'
const Order = () => {
    const choosedSeats = useSelector(state => state.order.choosedSeats)
    const dispatch = useDispatch()
    return (
        <div className={'order' + ((choosedSeats.length === 0) ? ' order_hidden' : '')}>
            <span className="close--two" onClick={() => {
                dispatch(deleteAllSeats())
            }}>✖</span>
            <h2>Selected Seats</h2>
            <ul className='order_list'      >
                {choosedSeats.map((item) => {
                    return <li key={item}>
                                <h2 className="order__rowSeat">{item[0]} row / {item.slice(1)} seat</h2>
                                <div className="order__deleteBTN" onClick={() => dispatch(removeSeat(item))}></div>
                                <div className="order__dot"></div>
                            </li>
                })}
            </ul>
            <button onClick={() => {
                dispatch(formShow())
            }}>Purchace({28*choosedSeats.length}$)</button>
            { (choosedSeats.length > 0) ? <Timer/> : null}
        </div>
    )
}

export default Order