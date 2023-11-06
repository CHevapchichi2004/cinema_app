import './Card.css'
const Card = ({poster_path, title, release, adult, }) => {
    return (
        <div className="card">
            <div className="grad"></div>
            <img src={poster_path} alt="poster" className="card__poster" />
            <div className="card__info">
                <h2 className="card__title">{title}</h2>
                <h3 className="card__date">{release}</h3>
                <h3 className="card__adult">+6</h3>
                <div className="card__languages">
                    <div className="card__language">RU</div>
                    <div className="card__language">EN</div>
                </div>
            </div>
        </div>
    )
}
export default Card