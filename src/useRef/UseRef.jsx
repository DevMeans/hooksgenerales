import { useRef } from "react"

export const UseRef = () => {
    const inputRef = useRef()
    console.log(inputRef)
    const seleccionarElemento=()=>{
        inputRef.current.select()
    }
  return (
    <div className='container'>
        <h1>Formulario para useRef</h1>
        <hr />
        <input ref={inputRef} type="text" className="form-control mb-2" />
        <button className="btn btn-outline-success" onClick={seleccionarElemento}>Seleccionar</button>
    </div>
  )
}
