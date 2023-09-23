import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import { CounterApp } from './useState/CounterApp'
//import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
//import { HooksApp } from './HooksApp.jsx'
//import { SimpleForm } from './useEffect/SimpleForm'
//import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
import { UseRef } from './useRef/UseRef'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseRef />
  </React.StrictMode>,
)
