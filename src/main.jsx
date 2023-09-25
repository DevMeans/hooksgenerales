import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import { CounterApp } from './useState/CounterApp'
//import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
//import { HooksApp } from './HooksApp.jsx'
//import { SimpleForm } from './useEffect/SimpleForm'
//import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
//import { UseRef } from './useRef/UseRef'
//import { Memorize } from './memos/Memorize'
//import { MemoHook } from './memos/MemoHook'
//import { CallbackHook } from './memos/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre'
import './useReducer/intro-reducer'
import { TodoApp } from './useReducer/TodoApp'
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <TodoApp />
 
)
