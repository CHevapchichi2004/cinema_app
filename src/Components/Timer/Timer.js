import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteAllSeats } from "../../actions/actions"

const Timer = () => {

    const [time, setTime] = useState({
        seconds: '00',
        minutes: '07',

    })
    const dispatch = useDispatch()

    useEffect(() => {

        let left = 421000;

        const time = setTimeout(() => {
            dispatch(deleteAllSeats())
        }, 421000)


        const timer = setInterval(() => {
            left -= 1000
            setTime( {
                    seconds: Math.floor((left/1000) % 60) < 10 ? `0${Math.floor((left/1000) % 60)}` : Math.floor((left/1000) % 60),
                    minutes: Math.floor( (left/1000/60) % 60 ) < 10 ? `0${Math.floor( (left/1000/60) % 60 )}` : Math.floor( (left/1000/60) % 60 )
                
            })
        }, 1000)

        return () => {
            clearTimeout(time)
            clearInterval(timer)
        }
    }, [])


    return (
        <h2 className="order_timer">Time left to purchase: {time.minutes}:{time.seconds}</h2>
    )

}

export default Timer