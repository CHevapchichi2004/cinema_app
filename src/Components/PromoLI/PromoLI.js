import './PromoLI.css'
const PromoLI = (props) => {
    return  (
        <div className="cinema-list__wrapper">
            <div className="cinema-list__item">
                <div className="grad"></div>
                <img src={props.image} alt="poster" className="cinema-list__poster" />
                <h2 className="cinema-list__title">{props.name}</h2>
                <button className="cinema-list__button">Book Now</button>
            </div>
        </div>
    )
}

export default PromoLI