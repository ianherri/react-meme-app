require('dotenv').config()

const { Configuration, OpenAIApi } = require('openai')

const express = require('express')
const router = express.Router()

const configuration = new Configuration({})

const openai = new OpenAIApi(configuration)

router.get('/', async (req, res) => {
  const response = await openai.listModels()
  console.log(response)
  res.send(response.data)
})

/* router.post('/', async (req, res) => {
  console.log(apiKey)
  const text = req.body
  console.log(text)
  console.log(req.headers)
  const response = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: text,
    max_tokens: 6,
    temperature: 0,
  })
  console.log(response.error)
  res.send(response)
}) */

module.exports = router
