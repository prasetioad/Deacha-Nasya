import React from 'react'
import './style.css'

function Index({onClick, title, backColor, width,height,border,borColor,color}) {
    return (
        <div className='button'>
            <button style={{backgroundColor: backColor, width:width, height: height, border: border, borderColor:borColor, color:color}} onClick={onClick}>{title}</button>
        </div>
    )
}

export default Index
