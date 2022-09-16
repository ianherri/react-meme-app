import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MemeApp from './MemeApp'
import reportWebVitals from './reportWebVitals'

const app = <MemeApp />

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
