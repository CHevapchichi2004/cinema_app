import { useDispatch, useSelector } from "react-redux"
import useHttp from "../../httpHook/httpHook"
import { useEffect, useState } from "react";
import { soonLoading, soonErr, soonLoaded } from "../../actions/actions";
import Card from "../Card/Card";

const ComingSoon = () => {

    const soon = useSelector(state => state.soon),
          dispatch = useDispatch(),
          [,getComingSoon] = useHttp(),
          [more, setMore] = useState(false)


    useEffect(() => {
        dispatch(soonLoading())
        getComingSoon().then(res => dispatch(soonLoaded(res))).catch(() => dispatch(soonErr()))
    }, [])

    const view = soon.cards ? soon.cards.map(item => <Card title={item.title} poster_path={item.poster_path} release={item.release_date} key={item.id}/>) : null

    return (
        <div className="cards">
                <h2 className="cards__title">Coming Soon</h2>
                <div className="cards__more" onClick={() => setMore(!more)}>
                    See more
                    <i className="fa-solid fa-arrow-right"/>
                </div>
                <div className={`cards__wrapper ${(more) ? 'cards__wrapper_all' : ''}`}>
                    {view}
                </div>
            </div>
    )
}
export default ComingSoon