import React from 'react'
import "./article.css"

function Article({ imgSrc, imgAlt, thesis, date, text }) {
  return (
    <div className='article-container'>
      <img src={imgSrc} alt={imgAlt} />
      <div className='text-container'>
        <h2>{thesis}</h2>
        <h3>{date}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Article