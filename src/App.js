import './Box.css'
import { useState } from 'react'
import BoxesComponent from './components/BoxesComponent.js'
function App() {
  const boxesData = [
    { id: 1, on: true, text: ['this is some text'], hideText: true },
    { id: 2, on: true, text: ['this is some text'], hideText: false },
    { id: 3, on: true, text: ['this is some text'], hideText: false },
    { id: 4, on: true, text: ['this is some text'], hideText: false },
    { id: 5, on: true, text: ['this is some text'], hideText: false },
    { id: 6, on: false, text: [], hideText: false },
  ]

  const [boxes, setBoxes] = useState(boxesData)

  function toggle(id) {
    setBoxes((oldBoxes) => {
      const newBoxes = []

      for (let i = 0; i < oldBoxes.length; i++) {
        const oldBox = oldBoxes[i]
        if (oldBox.id === id) {
          newBoxes.push({
            ...oldBox,
            on: !oldBox.on,
          })
        } else {
          newBoxes.push({ ...oldBox })
        }
      }

      return newBoxes
    })
  }
  const boxElements = boxes.map((box) => (
    <BoxesComponent
      key={box.id}
      id={box.id}
      on={box.on}
      clickHandler={toggle}
      text={box.text}
      hideText={box.hideText}
    />
  ))

  return <div className='App'>{boxElements}</div>
}

export default App
