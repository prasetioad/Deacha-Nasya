import React from 'react'
import {FaHeart} from 'react-icons/fa'
import Modals from '../../moleculs/modal/index'

function Index() {
    return (
        <div className='container'>
            <div className="homeBodyContainer row">
                <div>
                    <div className="homeCard col-3" data-toggle="modal" data-target="#exampleModalLong">
                        <div className="homeCardContent">
                            <img src="./asset/127960657_712495226316302_7214114981172616892_n.png" alt="image" />
                        </div>
                        <div className="homeCardContentBot">
                            <div className="homeCardContentBotItem">
                                <div>
                                    <img src="./asset/127960657_712495226316302_7214114981172616892_n.png" alt="image" />
                                </div>
                                <div className="homeCardContentBotItem">
                                    <span style={{ marginBottom:'0', marginLeft:'5px'}}>Asya Majdiyyah</span>
                                </div>
                            </div>
                            <div className="homeCardContentBotItem">
                                <FaHeart style={{color:'violet', fontSize: '21px'}}/>
                            </div>
                        </div>
                    </div>
                    <Modals />
                </div>
            </div>
        </div>
    )
}

export default Index
