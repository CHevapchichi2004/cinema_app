import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import { useEffect, useState } from "react"
import useHttp from "../../httpHook/httpHook"
import { loadedCurrent, loadingErrCurrent } from "../../actions/actions"

const CurrentlyPlaying = () => {

    const [getPlayingNow] = useHttp(),
          curr = useSelector(state => state.current),
          [more, setMore] = useState(false),
          dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadedCurrent())
        getPlayingNow(2).then(res => dispatch(loadedCurrent(res))).then(loadingErrCurrent())
    }, [])

    console.log(curr.status)


    const view = (curr.status !== 'loading' && curr.current) ?  curr.current.map(item => <Card title={item.title} poster_path={item.poster_path} release={item.release_date} key={item.id}/>) : null
    // let view = curr.map(item => <Card title={item.original_title} poster_path={item.poster_path} release={item.release_date} />)
    // if (more && curr) {
    //     view = curr.slice(0,4).map(item => <Card title={item.original_title} poster_path={item.poster_path} release={item.release_date} />)
    // } else if (curr && !more) {
    //     view = curr.map(item => <Card title={item.original_title} poster_path={item.poster_path} release={item.release_date} />)
    // }

    return (
        <div className="cards">
                <h2 className="cards__title">Currently plaing</h2>
                <div onClick={() => {
                    setMore(!more)
                    console.log(more)
                }} className="cards__more">
                    See more
                    <i class="fa-solid fa-arrow-right"/>
                </div>
                <div className={'cards__wrapper' + ((more) ? ` cards__wrapper_all` : '')}>
                    {view}
                </div>
            </div>
    )
}
export default CurrentlyPlaying