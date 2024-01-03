import { Link } from 'react-router-dom'
import './PromoLI.css'
const PromoLI = ({image, name, id}) => {
    return  (
        
        <div className="cinema-list__item">
            <div className="grad"></div>
            <img src={image} alt="poster" className="cinema-list__poster" />
            <h2 className="cinema-list__title">{name}</h2>
            <Link to={`/buy/${id}`}><button className="cinema-list__button">Book Now</button></Link>
        </div>
        
    )
}

export default PromoLI