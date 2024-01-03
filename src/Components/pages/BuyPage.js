import { useSelector } from "react-redux"
import OrderForm from "../Form/Form"
import Header from "../Header/Header"
import TicketBuy from "../TicketBuy/TicketBuy"
import ErrBoundary from "../errBoundary/errBoundary"
import Congrats from "../Congrats/Congrats"

const BuyPage = () => {
    const form = useSelector(state => state.form)
    return (
        <>
            <Header/>
            <TicketBuy/>
            {form.show ? <ErrBoundary><OrderForm/></ErrBoundary> : null}
            {form.congrats || form.loading ? <Congrats/> : null}
        </>
    )
}
export default BuyPage