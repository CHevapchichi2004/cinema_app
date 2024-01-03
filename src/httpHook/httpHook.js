import { useState } from "react"


const useHttp = () => { 
    const _makeRequset = async (url, method = 'GET', body) => {
        try {
            const  res = await fetch(url, {
                method: method,
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGFiMThjNmE2MjBjZWFkNmRkNTViYzQ3NWYwNDY0MSIsInN1YiI6IjY1M2Q5NmQwYmMyY2IzMDEwYjRhZjg1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KbnMjQMI35XkZH9ZCr42PU4waON84Iwcp5aKfSxNbl0',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            })

            if(!res.ok) {
                throw  new Error('cant make request')
            }

            const data = await res.json();
            return data
        } catch(e) {
            throw e
        }
    }

    const _changeData = (data) => {
        const changed = data.results.map(item => {
            const date = new Date(item.release_date)
            return {
                adult: item.adult,
                backdrop_path: 'https://image.tmdb.org/t/p/original' + item.backdrop_path,
                genre_ids: item.genre_ids,
                id: item.id,
                title: item.title,
                overview: item.overview,
                poster_path: "https://image.tmdb.org/t/p/original" + item.poster_path,
                release_date: date.toLocaleString('ru', { month: 'long' ,day: 'numeric'})
            }
        })
        return changed
    }

    const getPlayingNow = async (n=2) => {
        const res = await _makeRequset(`https://api.themoviedb.org/3/movie/now_playing?language=ru&page=${n}`)
        return _changeData(res)
    }

    const getComingSoon = async () => {
        const res = await _makeRequset('https://api.themoviedb.org/3/movie/upcoming?language=ru&page=1')
        return _changeData(res)
    }

    const getMovieById = async (id) => {
        const res = await _makeRequset(`https://api.themoviedb.org/3/movie/${id}?language=ru`)
        return res
    }

    const getSeats = async (id) => {
        const res = await _makeRequset(`http://localhost:8000/films/${id}`)
        return res
    }

    const postOrder = async (body) => {
        const res = await _makeRequset('http://localhost:8000/orders', 'POST', body)
        return res
    }

    return [getPlayingNow, getComingSoon, getMovieById, getSeats, postOrder]
}

export default useHttp