import React from 'react'
import  './style.css'
import Logo from '../logo'
import { FaSearch } from 'react-icons/fa'
import Button from '../button/Button'

function Index() {
    return (
        <div>
            <div className="navbarMain">
                <div className="navbarBody">
                    <div className="navbarLeft">
                        <Logo color="#5a84b6" size="28px"/>
                    </div>
                    <div className="navbarRight">
                        <div className="navRightObjk">
                            <FaSearch />
                        </div>
                        <div className="navRightObjk">
                            <p>Sign in</p>
                        </div>
                        <div className="navRightObjk">
                            <Button title="Sign up" backColor="#fa479a" border="none" width="80px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
