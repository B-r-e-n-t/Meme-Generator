import React, {useState} from 'react'
import './Meme.css'
import memesData from '../memesData'




function Meme() {

const [topText, setTopText] = useState('This is the top text')
const [bottomText, setBottomText] = useState('bottom text')
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
            <p>{topText}</p>
            <img src={image} className='meme-image' />
            <p>{bottomText}</p>
        </div>
  )
}

export default Meme