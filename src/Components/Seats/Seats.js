import { useSelector } from "react-redux"
import SeatsArrow from "../SeatsArrow/SeatsArrow"

const Seats = () => {
    const order = useSelector(state => state.order)
    const view = order.seats ? Object.keys(order.arrows).map(item => {
        return <SeatsArrow key={item} arrName={item} seats={order.arrows[item]}/>
    }) : null
    return (
        <div className="cinema__seats">
        <div className="letters letters_after">
            <h2>F</h2>
            <h2>E</h2>
            <h2>D</h2>
            <h2>C</h2>
            <h2>B</h2>
            <h2>A</h2>
        </div>

        <div className="letters letters_before">
            <h2>F</h2>
            <h2>E</h2>
            <h2>D</h2>
            <h2>C</h2>
            <h2>B</h2>
            <h2>A</h2>
        </div> 
            {view}
    </div>
    )
}

export default Seats