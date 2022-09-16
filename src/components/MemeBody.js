import getMemes from '../data/memes'
import { useState } from 'react'

function MemeBody() {
  const [allMemes, setAllMemes] = useState([])

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    image: '',
  })

  // const [loading, setLoading] = useState(false)

  async function handleGetMemes(e) {
    e.preventDefault()
    const result = await getMemes()

    console.log(result)

    setAllMemes(['ian', 'ian2'])
    console.log(allMemes)

    setMeme((oldMeme) => ({
      ...oldMeme,
      image: result.url,
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((curInput) => {
      return { ...curInput, [name]: value }
    })
    console.log(meme)
  }

  return (
    <div className='meme-component'>
      <div className='meme-form'>
        <input
          className='meme-input'
          type='text'
          name='topText'
          onChange={handleChange}
          value={meme.topText}
        ></input>
        <input
          className='meme-input'
          type='text'
          name='bottomText'
          onChange={handleChange}
          value={meme.bottomText}
        ></input>
        <button onClick={handleGetMemes} className='form-button'>
          get a new meme image
        </button>
      </div>
      <div className='meme'>
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>

        <img src={meme.image} alt={meme.image} className='meme-image'></img>
      </div>
    </div>
  )
}

export default MemeBody
