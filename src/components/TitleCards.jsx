import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([])

  const cardsRef = useRef()

  //api fetch từ TMDB
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODEwYWUwYTg3NTI1NzlmYTJhNzMyZDE3NzYwYzQ5NyIsIm5iZiI6MTcyMDU3NjY2MS4zNjE1NjgsInN1YiI6IjY2OGRkMzA0MzcwNDliOTE1ODBmYzY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lZPDoofUnNt25l865MhEh-LTYSYv-h_v9Iaw8JUHGtY'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index} >
            {/* img link vào https://image.tmdb.org/t/p/w500/ */}
            <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="card-image" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
