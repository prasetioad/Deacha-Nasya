import React from 'react'
import './style.css'
import  Logo from '../../atoms/logo'
import {FaGoogle, FaTwitter} from 'react-icons/fa'
import InputNoBorder from '../../atoms/input/inputNoBorder'
import Button from '../../atoms/button/Button'
import { useHistory } from 'react-router-dom'

function Index() {
    const history = useHistory()
    return (
        <div>
            <div className="loginContainer">
                <div className="regisLeft">
                    <div className="loginLeftWrapper">
                        <div className="loginLogo">
                            <Logo size="32px" color='#5a84b6'/>
                        </div>
                        <div className="regisText">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ducimus reiciendis ratione, sunt maiores suscipit autem fugit dolorem repellendus mollitia commodi aperiam quo explicabo, ex sed ea, dolores natus! Provident, obcaecati, officiis pariatur ad id laudantium fugit error placeat illo deserunt dolores sequi magni. Rerum esse aspernatur ducimus incidunt dolor.</p>
                        </div>
                    </div>
                </div>
                <div className="loginRight">
                    <div className="loginRightMain">
                        <div className="alreadyAMember">
                            <p>Not a member?  <span onClick={()=>history.push('./register')}>Sign up now</span></p>
                        </div>
                        <div className="loginRightLogin">
                            <span className='loginspan'>Sign in to Deacha</span>
                            <div className="loginWith">
                                <div className="loginWithGoogle">
                                    <div style={{display: 'flex', marginLeft: '10px', justifyContent:'space-between', alignItems:'center'}}>
                                        <div className="loginWithGoogleImg">
                                            <img src="./asset/124656979_645161602829798_5679654567396878162_n.png" alt="image" />
                                        </div>
                                        <div className="loginWithGoogleMid">
                                            <span>Sign in as prasetioad</span>
                                            <p>waghupd@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="loginWithTwitt">
                                        <FaGoogle style={{color: '#5a84b6'}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="loginLineOr">
                                <hr /> <p>or</p> <hr />
                            </div>
                            <div className="loginFormEmail">
                                    <InputNoBorder text='Email' width='90%' padding='10px' type='email'/>
                            </div>
                            <div className="loginFormEmail">
                                    <InputNoBorder text='Password' width='90%' padding='10px'  type='password'/>
                            </div>
                            <div className="loginFormEmail">
                                  <Button title="Creat Account" backColor='#5a84b6' border='none' borColor='#5a84b6' width="50%"/>
                                  <Button title="Creat Account" backColor='#b7f4ff' border='none' borColor='#b7f4ff' width="50%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
