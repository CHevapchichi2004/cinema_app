import './Promo.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PromoLI from '../PromoLI/PromoLI'
import { useEffect } from 'react';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { loadedSlides, loadingSlides, errorSlides, curSlide } from '../../actions/actions';
import useHttp from '../../httpHook/httpHook';
import { useState } from 'react';

const Promo = () => {
    
    const dispatch = useDispatch()
    const slidesInfo = useSelector(state => state.slide)
    const [getPlayingNow] = useHttp()
    const [toggling, setToggling] = useState(false)

    useEffect(() => {
        dispatch(loadingSlides())
        getPlayingNow(1)
        .then((data)=> dispatch(loadedSlides(data)))
        .catch(dispatch(errorSlides()))
    }, [])



    const sliderSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 6,
        speed: 500,
        focusOnSelect: true,
        arrows: false,
        adaptiveHeight: true,
        variableWidth: true,
        beforeChange: (oldI, newI) => {
            if (oldI === newI) {
                return;
            } else {
                setToggling(true)
                dispatch(curSlide(newI))
                setTimeout(() => {
                    setToggling(false)
                }, 600)
            }
        }
    }
    console.log(slidesInfo)
    const sliderItems = (slidesInfo.loadingStatus === 'idle' && slidesInfo.slides.length !== 0) ? slidesInfo.slides.map(item => <PromoLI name={item.title} image={item.poster_path} key={item.id}/>) : null 
    return (
        <div className="promo">
            <img className={`promo__back-drop ${toggling ? 'toggle' : null}`} src={slidesInfo.currentSlide} alt="back_drop" />
            <Header/>
            <div className="slider-wrapper">
                <Slider {...sliderSettings}>
                    {sliderItems}
                </Slider>
            </div>
            </div>
        
    )
}
export default Promo