import React from 'react'
import './style.css'

function Index({onClick, title, backColor, width,height,border,borColor,}) {
    return (
        <div className='button'>
            <button style={{backgroundColor: backColor, width:width, height: height, border: border, borderColor:borColor, }} onClick={onClick}>{title}</button>
        </div>
    )
}

export default Index
