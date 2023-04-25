import React, {useState} from 'react'
import './Meme.css'
import memesData from '../memesData'




function Meme() {

const [topText, setTopText] = useState('')
const [bottomText, setBottomText] = useState('')
const [image, setImage] = useState('https://i.imgflip.com/1ur9b0.jpg')



  function getMemeImage() {
      const memesArray = memesData.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      setImage(memesArray[randomNumber].url)
  }

  return (
        <div className='form--container'>
            <div className='inputs--container'>
                <input 
                    type='text' 
                    className='input' 
                    placeholder='Top text'
                    onChange= {(e) => setTopText(e.target.value)}


                />
                <input 
                    type='text' 
                    className='input' 
                    placeholder='Bottom text'
                    onChange= {(e) => setBottomText(e.target.value)}
                />
            </div>
                <button 
                    onClick={getMemeImage} 
                    className='button'>
                    Get a new meme image 🕺🏽
                </button>
            <div className='meme'>
                <img src={image} className='meme-image'/>
                <h2 className='meme-text top-text'>{topText}</h2>
                <h2 className='meme-text bottom-text'>{bottomText}</h2>
            </div>
        </div>
  )
}

export default Meme