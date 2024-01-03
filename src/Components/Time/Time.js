import { useDispatch, useSelector } from "react-redux"
import {  changeTime } from "../../actions/actions"

const Time = () => {

    const order = useSelector(state => state.order),
          dispatch = useDispatch()

    const view = order.seats ? Object.keys(order.seats[order.curDate]).map((item,i) => {
        if (item === order.curTime) {
            return <div key={i} className="buy__time-item selected">{item}</div>
        } 
        return <div key={i} className="buy__time-item" onClick={(e) => dispatch(changeTime(e.target.textContent))}>{item}</div>
    }) : null

    return (
        <div className="buy__time">
            <h2>Time</h2>
            <div className="buy__wrapper">
                {view}
            </div>
        </div>
    )
}
export default Time