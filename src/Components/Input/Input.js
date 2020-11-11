import React from 'react'
import './Input.scss'

const Input = () => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {
                label && 
            (<label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>{label}</label>)
            }
        </div>
    )
}

export default Input
