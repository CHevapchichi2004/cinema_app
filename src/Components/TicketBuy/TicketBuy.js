import { useParams } from 'react-router'
import Date from '../Date/Date'
import SeatsArrow from '../SeatsArrow/SeatsArrow'
import Time from '../Time/Time'
import './TicketBuy.css'
import { useEffect, useState } from 'react'
import useHttp from '../../httpHook/httpHook'
import { seatsFetched } from '../../actions/actions'
import { useDispatch } from 'react-redux'
import Seats from '../Seats/Seats'
import Order from '../Order/Order'
const TicketBuy = () => {

    const params = useParams(),
            [ , , getMovieById, getSeats ] = useHttp(),
            [img, setImg] = useState(''),
            dispatch = useDispatch()

    useEffect(() => {
        getMovieById(params.id).then((data) => setImg('https://image.tmdb.org/t/p/original' + data.backdrop_path));
        getSeats(params.id).then(data => dispatch(seatsFetched(data.seats)))
    }, [])

    return (
        <section className='buy'>
            <div className="buy__poster">
                <img className='buy__img' src={img} alt="poster" />
                <Order/>    
            </div>


            <div className="buy__purchase">

                <Date/>
                <Time/>

                <div className="buy__hall">
                    <div className="buy__screen">
                        <svg xmlns="http://www.w3.org/2000/svg" width="347" height="27" viewBox="0 0 347 27" fill="none">
                            <path d="M1.479 25.576C1.479 25.576 83.5526 1 169.927 1C256.301 1 345.543 25.576 345.543 25.576" stroke="#B51111" strokeLinecap="square"/>
                        </svg>
                        <svg className='buy__grad' xmlns="http://www.w3.org/2000/svg" width="384" height="123" viewBox="0 0 384 123" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.48 24.576C20.48 24.576 105.626 0 192 0C278.374 0 364.544 24.576 364.544 24.576L384 122.88H0L20.48 24.576Z" fill="url(#paint0_linear_1_1790)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1_1790" x1="-233.492" y1="-214.436" x2="-233.492" y2="61.44" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B51111"/>
                                <stop offset="1" stopColor="#B51111" stopOpacity="0.01"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    </div>

                   <Seats/>

                    <div className="cinema__state">
                        <div className="cinema__state-item">
                            <div className="circle available"></div>
                            Available
                        </div>

                        <div className="cinema__state-item">
                            <div className="circle booked"></div>
                            Booked
                        </div>

                        <div className="cinema__state-item">
                            <div className="circle selected"></div>
                            Selected
                        </div>
                    </div>

                    

                </div>
            </div>
        </section>
    )
}
export default TicketBuy