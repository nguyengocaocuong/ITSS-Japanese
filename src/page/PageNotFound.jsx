import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const PageNotFound = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('user'))
      navigate('login')
    else
      navigate('user/home',{replace:true})
  }, [navigate])
  return (
    <div></div>
  )
}
