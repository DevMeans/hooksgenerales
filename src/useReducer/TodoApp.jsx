import { useReducer } from "react";
import { todoReducer } from "./todo-reducer";

const initialState = [
  {
    id: 100,
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: 100 * 3,
    description: "Recolectar la piedra de alma",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  console.log(todos);
  return (
    <div className="container">
      <h2>TodoApp :10 , pendientes :2</h2>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {todos.map((todo) => 
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span>item 1</span>{" "}
                <button className="btn btn-danger">Borrar</button>
              </li>
            )}
          </ul>
        </div>
        <div className="col-5">
          <h4>AGREGAR TODO</h4>
          <hr />
          <form action="">
            <input
              type="text"
              className="form-control"
              placeholder="que hay que hacer"
            />
            <button type="submit" className="btn btn-outline-primary">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
