import React from 'react'
interface Props{
    setChecked: React.Dispatch<React.SetStateAction<number[]>>;
    checked: number[],
    setDisabled: React.Dispatch<React.SetStateAction<number>>;
}



const CheckBox = ({setChecked, checked,setDisabled} : Props) => {
    const handleChecked = (x: number) => {
        if(checked[x] === 0) {
        setChecked((prevChecked) => 
            prevChecked.map((position,index)=> 
            (index === x ? 1: position)
            ))
            setDisabled((prev) => prev += 1)
        }
        else {
            setChecked((prevChecked) => 
                prevChecked.map((position,index)=> 
                (index === x ? 0: position)
                ))
            setDisabled((prev) => prev -= 1)
        }
    }




  return (
    <div className='checkBox'>
        <div className='inputField'>
        <input onChange={() => handleChecked(0)} className='inputCheck' type="checkbox" />
        <label>Include Uppercase Letters</label>
        </div>

        <div className='inputField'>
        <input onChange={() => handleChecked(1)} className='inputCheck' type="checkbox" />
        <label>Include Lowercase Letters</label>
        </div>

        <div className='inputField'>
        <input onChange={() => handleChecked(2)} className='inputCheck' type="checkbox" />
        <label>Include Numbers</label>
        </div>

        <div className='inputField'>
        <input onChange={() => handleChecked(3)} className='inputCheck' type="checkbox" />
        <label>Include Symbols</label>
        </div>
        


    </div>
  )
}

export default CheckBox