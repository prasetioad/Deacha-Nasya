import React from 'react'
import './style.css'

function inputNoBorder({text, title, onChange, width, height, padding, type}) {
    return (
        <div className="inputNoBorder">
            <p style={{marginBottom: '0'}}>{text}</p>
            <input type={type} name="" id="" placeholder={title} onChange={onChange} style={{height: height, width:width, padding: padding}}/>
        </div>
    )
}

export default inputNoBorder
