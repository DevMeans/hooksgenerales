import { useReducer } from "react"
import { todoReducer } from "./todo-reducer"

const  initialState = [
    {
      id:100,
      description:'Recolectar la piedra del alma',
      done : false
    },{
      id:100*3,
      description:'Recolectar la piedra de alma',
      done : false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer( todoReducer, initialState)
  return (
    <div className="container">
         <div>TodoApp</div>
         <hr />
         <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
         </ul>
    </div>
   
  )
}
