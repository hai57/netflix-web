import React, { useRef, useEffect } from 'react'
import cards_data from '@/data/Cards_data.js'


const TitleCards = ({ title, category }) => {
  const cardsRef = useRef()

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {cards_data.map((card, index) => {
          return <div className="card" key={index} ref={cardsRef}>
            <img src={card.image} alt="card-image" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
