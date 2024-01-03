import { useDispatch, useSelector } from "react-redux"
import { changeDate } from "../../actions/actions"

const Date = () => {
    const order = useSelector(state => state.order)
    const  view = (order.seats) ? Object.keys(order.seats).map(item => {
        if (item === order.curDate) {
            return <View key={item} props={item} choose={true}/>
        }
        return <View key={item} props={item} choose={false}/>
    }) : null
    

    return (
        <div className="buy__date">
            <h2>Date</h2>
            <div className="buy__wrapper">
                {view}
            </div>
        </div>
    )
}

const View = ({props, choose}) => {
    const dispatch = useDispatch()
    return (
        <div className={choose ? 'buy__date-item selected' : 'buy__date-item'} onClick={() => dispatch(changeDate(props))}>{props}</div>
    )
}
export default Date