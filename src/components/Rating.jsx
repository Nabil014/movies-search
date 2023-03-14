import React, { useState } from 'react'


export default function Rating ({ handleRating, rating }) {

  const handleClick = (value) => {
    handleRating(value)
  }

  return (
    <div className='rating'>
      <span>Rating:</span>
      {
        [...Array(5)].map((star, i) => {
          const ratingValue = i + 1
          return (
            <label key={i}>
              <input className='inputRating' type="radio" name='rating' value={ratingValue} onClick={() => handleClick(ratingValue)} />
              <span className={ratingValue <= rating ? 'filled' : ''}>&#9733;</span>
            </label>
          )
        })
      }
    </div>
  )
}
