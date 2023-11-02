import React from 'react'
import {createRoot } from 'react-dom'

import './index.css'

const App = () => {
    return <h1>Hello</h1>
}

const root = createRoot(document.getElementById('root'))
root.render(<App/>)