import ComingSoon from '../ComincSoon/ComingSoon'
import CurrentlyPlaying from '../CurrentlyPlayin/CurrentlyPlaying'
import './Info.css'
const Info = () => {
    return (
        <div className="info">
            <CurrentlyPlaying/>

            <ComingSoon/>

        </div>
        
    )
}

export default Info