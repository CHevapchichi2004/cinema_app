import { useDispatch, useSelector } from 'react-redux'
import './Congrats.css'
import { Link } from 'react-router-dom'
import { formClear } from '../../actions/actions'

const Congrats = () => {
    const form = useSelector(state => state.form)
    const dispatch = useDispatch()
    return (
        <>
            <div className="form_lay">
            </div>

            <div className="form_body form_congrats">
                {form.loading ? <div className="loader"></div> : null}
                {form.congrats ? <><h3 className="form_congr"> 
                    <span>Congrats!</span> <br/><br/>
                    Your’ve bought some tickets. Its my little React project. Thank you for attention!
                 </h3>

                 <Link to='/' onClick={() => {dispatch(formClear(dispatch))}}>
                        <h3 className="form_linkBack">Go to start page</h3>
                 </Link>
                 
                 
                  </> : null}
            </div> 
        </>
    )
}
export default Congrats