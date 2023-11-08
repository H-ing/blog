import React from 'react'
import { createRoot } from 'react-dom/client'
import Layout from '@/components/Layout'
import '@/styles/index.scss'


const App = () => {
    return  (
        <Layout />
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App/>)