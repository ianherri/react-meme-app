import './App.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import locationData from './data/jokes'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Main data={locationData} />
    </div>
  )
}

export default App
