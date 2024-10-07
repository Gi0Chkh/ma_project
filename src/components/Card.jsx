import React, { useState } from 'react'
import "./card.css"

function Card({ text }) {
  const [cardText, setCardText] = useState(null);

  function handleCardClick() {
    setCardText((prevText) => prevText === null ? <h1>{text}</h1> : null)
  }


  return (
    <div className='card-container' onClick={handleCardClick}>
      {cardText}
    </div>
  )
}

export default Card