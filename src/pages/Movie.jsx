/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'
import MovieCard from '../components/MovieCard'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import './Movie.css'

const Movie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async(url) => {
    const resp = await fetch(url);
    const data = await resp.json()

    setMovie(data);
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`

    getMovie(movieUrl)
  }, [])

  const converter = (minutos) => {
    const horas = Math.floor(minutos/ 60);          
    const min = minutos % 60;
    const textoHoras = (`0${horas}`).slice(-1);
    const textoMinutos = (`00${min}`).slice(-2);
    
    return `${textoHoras }h${textoMinutos}min`;
  };
  

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false}/>
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{movie.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{movie.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{converter(movie.runtime)}</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Movie