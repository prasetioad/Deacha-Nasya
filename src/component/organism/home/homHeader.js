import React from 'react'
import './style.css'
import Button from '../../atoms/button/Button'

function Index() {
    return (
        <div>
            <header className='homeHeader'>
                <div className="homeHeaderContent">
                    <div className="hContentLeft">
                        <div className="hContentLefttext">
                            <p>Chilldren <br/> books illustrator</p>
                        </div>
                        <div className="hContentLefttextBot">
                            <p>Draw your imagination with beautifull color together with me, found your amazing passion in colloring the world.</p>
                        </div>
                        <div className="hContentLeftSignUp">
                            <Button title="Sign up" border='none' backColor='#fa479a' height="40px" width='85px'/>
                        </div>
                    </div>
                    <div className="hContentRight">
                        
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Index
