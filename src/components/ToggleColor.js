import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme'

const ToggleColor = () => {
    const [color, setColor] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
        <input 
            type="text" 
            onChange={(e) => {setColor(e.target.value)}}
        />
        <button
            onClick={() => {dispatch(changeColor(color))}}
        >Toggle Color</button>
    </div>
  )
}

export default ToggleColor
