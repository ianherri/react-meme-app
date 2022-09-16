import '../AirbnbApp.css'

function Main(props) {
  console.log(props)
  const list = props.data.map((item) => {
    return (
      <>
        <div className='tile-container'>
          <img src={item.image} alt={item.location} className='tile-img' />
          <div className='text-container'>
            <div className='header'>
              <h4>{item.country.toUpperCase()}</h4>
              <a href={item.mapLink}>View on Google maps</a>
            </div>
            <h1>{item.location}</h1>
            <p>
              <span className='bold'>{item.dates}</span>
            </p>
            <p>{item.description}</p>
          </div>
        </div>
        <div className='spacer'></div>
      </>
    )
  })
  return (
    <div className='Main'>
      <div>{list}</div>
    </div>
  )
}

export default Main
