import React from 'react'
import './Input.css'

function Input() {
  return (
    <>
        <form className='form--container'>
            <div className='inputs--container'>
                <input type='text' className='input' placeholder='Top text'/>
                <input type='text' className='input' placeholder='Bottom text'/>
            </div>
            <button className='button'>
            Get a new meme image 🕺🏽
            </button>
        </form>
    </>
  )
}

export default Input