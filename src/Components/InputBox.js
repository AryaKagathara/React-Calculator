import React from 'react'
import './Style.css'

function InputBox({value, clear}) {
    return (
        <div className="inputcover">
            <input type="text" className="inputbox" value={value}  onDoubleClick={() => clear()}/>            
        </div>
    )
}

export default InputBox
