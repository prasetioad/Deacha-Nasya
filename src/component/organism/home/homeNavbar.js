import React from 'react'
import './style.css'

function Index() {
    return (
        <div>
            <div className='homeBarContainer' style={{backgroundColor: '#b7f4ff'}}>
                <div className="homeNav">
                    <p>Galery</p>
                </div>
                <div className="homeNav">
                    <p>Blog</p>
                </div>
                <div className="homeNav">
                    <p>Shop</p>
                </div>
                <div className="homeNav">
                    <p>MyWork</p>
                </div>
            </div>
        </div>
    )
}

export default Index
