import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
      console.log('Menssage mounted')
    
      return () => {
        console.log('Message unmouted')
      }
    }, [])
    
  return (
    <> 
    <h3>usuario ya existe</h3>
    </>
   
  )
}
