import { useState } from 'react'

function BoxesComponent(props) {
  const styles = {
    backgroundColor: props.on ? '#222222' : '#0000ff',
  }

  const [inputText, setInputText] = useState({
    firstName: '',
    lastName: '',
    comments: '',
    isFriendly: true,
    employment: '',
    expand: false,
  })

  function handleChange(event) {
    const { name, value, checked, type } = event.target
    setInputText((curInput) => {
      return { ...curInput, [name]: type === 'checkbox' ? checked : value }
    })
    console.log(inputText)
  }

  function handleClick(event) {
    if (event.detail === 2) {
    }
  }

  return (
    <div className='box-component'>
      <div
        className='box-element'
        style={styles}
        onClick={() => props.clickHandler(props.id)}
      >
        {props.text.length > 0 ? (
          <p>{props.text}</p>
        ) : (
          <p>this is not some text</p>
        )}
        <form>
          <input
            name='firstName'
            type='text'
            placeholder='type first name'
            onChange={handleChange}
            value={inputText.firstName}
          />
          <input
            name='lastName'
            type='text'
            placeholder='type last name'
            onChange={handleChange}
            value={inputText.lastName}
          />
          <textarea
            name='comments'
            value={inputText.comments}
            onChange={handleChange}
            onClick={handleClick}
          />
          <input
            type='checkbox'
            id='isFriendly'
            name='isFriendly'
            value={inputText.isFriendly}
            onChange={handleChange}
          />
          <input
            type='radio'
            id='part-time'
            name='employment'
            value='part-time'
            onChange={handleChange}
            checked={inputText.employment === 'part-time'}
          />

          <input
            type='radio'
            id='full-time'
            name='employment'
            value='full-time'
            onChange={handleChange}
            checked={inputText.employment === 'full-time'}
          />
        </form>
      </div>
    </div>
  )
}

export default BoxesComponent
