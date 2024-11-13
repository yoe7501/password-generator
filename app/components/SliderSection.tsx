import React from 'react'
interface Props{
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>,
}
const SliderSection = ({value, setValue}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(event.target?.valueAsNumber || 0);
  }
  return (
    <div className=''>
        <div className='flex flex-row justify-between'>
        <p>Character Length</p>
        <p className='text-xl text-green'>{value}</p>
        </div>
        <input className='slider' type='range' min={8} max={20} onChange={handleChange}/>
 
    </div>
  )
}

export default SliderSection