import '../AirbnbApp.css'
import planet from '../assets/Fill 213.png'
function NavBar() {
  return (
    <div className='Navbar'>
      <div className='Logo'>
        <img src={planet} width='23px' height='23px' alt='react logo'></img>
        <h3>my travel journal</h3>
      </div>
    </div>
  )
}

export default NavBar
