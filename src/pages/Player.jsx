import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import back_arrow_icon from '@/assets/back_arrow_icon.png'

const Player = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODEwYWUwYTg3NTI1NzlmYTJhNzMyZDE3NzYwYzQ5NyIsIm5iZiI6MTcyMDU3NjY2MS4zNjE1NjgsInN1YiI6IjY2OGRkMzA0MzcwNDliOTE1ODBmYzY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lZPDoofUnNt25l865MhEh-LTYSYv-h_v9Iaw8JUHGtY'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, [])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='back_arrow_icon' onClick={() => { navigate(-1) }} />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
