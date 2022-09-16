import axios from 'axios'

async function getMemes() {
  const memes = await axios.get('https://api.imgflip.com/get_memes')

  if (memes.error) {
    console.log(memes.error)
    return 'this is an error'
  } else {
    const memesArray = memes.data.data.memes
    const randInt = Math.floor(memesArray.length * Math.random())

    return memesArray[randInt]
  }
}

export default getMemes
