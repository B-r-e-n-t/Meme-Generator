import React from 'react'
import './Meme.css'
import memesData from '../memesData'

function Meme() {
    const [memeImage, setMemeImage] = React.useState('');
    
  function getMemeURL() {
      const memesArray = memesData.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      setMemeImage(memesArray[randomNumber].url)
  }

  return (
        <div className='form--container'>
            <div className='inputs--container'>
                <input 
                    type='text' 
                    className='input' 
                    placeholder='Top text'
                />
                <input 
                    type='text' 
                    className='input' 
                    placeholder='Bottom text'
                />
            </div>
                <button 
                    onClick={getMemeURL} 
                    className='button'>
                    Get a new meme image 🕺🏽
                </button>
            <img src={memeImage} />
        </div>
  )
}

export default Meme