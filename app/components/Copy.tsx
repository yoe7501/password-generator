'use client'
import React from 'react'

interface Props {
  newPassword: string,
}
const Copy = ({newPassword} : Props) => {

  const password = newPassword;
  const copyStuff = () => {
    navigator.clipboard.writeText(password);
  }

  return (
    <div className='copy text-2xl'>
        <p>{password}</p>
        <button onClick={copyStuff}>
        <img src='/icon-copy.svg' alt='copy logo'/>
        </button>
    </div>
  )
}

export default Copy