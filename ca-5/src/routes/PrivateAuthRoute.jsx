import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateAuthRoute = ({children ,  showBook}) => {

  const navigate = useNavigate();
  useLayoutEffect(()=>{
    if(showBook){
      navigate("/")
    }
  } , [])

  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateAuthRoute;