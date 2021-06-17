import React from 'react'
import './style.css'
import Button from '../../atoms/button/Button'

function Index() {
    return (
        <div>
            {/* <!-- Modal --> */}
            <div class="modal fade bd-example-modal-lg" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                {/* <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="modalObjekContainer">
                                    <div className="modalObjekBodyTop">
                                        <div className="modalObjekBodyTopContent">
                                            <div>
                                                <Button backColor='#5a84b6' border='none' width="100px" height='50px' title="Iklan"/>
                                            </div>
                                            <div style={{width:'65%', marginLeft:'5px', fontSize: '14px'}}>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea odit repellat itaque a enim rerum?</p>
                                            </div>
                                        </div>
                                        <div className="modalObjekBodyTopContentbot">
                                            <Button backColor='white' border='none' width='auto' height='50px' title="Try now for free" color='black'/>
                                        </div>
                                    </div>
                                    <div className="modalObjekBodyMid">
                                        <div className="modalObjekBodyMidProfile">
                                            <div className="modalObjekBodyMidImgBody">
                                                <div className="modalObjekBodyMidImgProf">
                                                    <img src="./asset/127960657_712495226316302_7214114981172616892_n.png" alt="" />
                                                </div>
                                                <div className="modalObjekBodyMidTitle">
                                                    <span>Little Nasya: The Beautifull and sweetest girl from Ciamis</span>
                                                    <p>Deacha Nasya • Follow • Hire Us</p>
                                                </div>
                                            </div>
                                            <div className="modalObjekBodyMidSave">
                                                <Button backColor="#f4f4f4" color="black" title='Save' border='none'/>
                                                <Button backColor="#f4f4f4" color="black" title='Like' border='none'/>
                                            </div>
                                        </div>
                                        <div className="modalDetilBodyImg">
                                            <img src="./asset/127960657_712495226316302_7214114981172616892_n.png" alt="image" />
                                        </div>
                                        <div className="modalDetilBodyDesc">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto libero quam cumque facilis, corporis aperiam id ipsam nostrum dolor rerum reiciendis praesentium commodi hic eligendi consectetur. Expedita quidem facilis quisquam sequi cum. Consectetur nisi tempore veniam ad quod, adipisci soluta aliquid. Ut dolore atque est at minus reprehenderit adipisci voluptas, magnam ea sequi excepturi fugit ipsam repudiandae quaerat, ab quidem! Molestiae laudantium in voluptates perspiciatis est, enim saepe labore. Eum a omnis corrupti reiciendis doloremque itaque error animi nihil nam iste expedita tempore nemo delectus porro, nisi recusandae inventore neque possimus necessitatibus qui voluptate cumque debitis! Sed repellendus inventore suscipit mollitia porro. Illum ad illo temporibus! Ipsum fugit modi fugiat cumque at laboriosam tempore corporis repellendus a nemo animi ut debitis impedit, ipsa deserunt beatae pariatur quidem eligendi dignissimos blanditiis commodi. Illo expedita laudantium maiores, accusantium atque, quibusdam quod, minima necessitatibus ea provident vitae placeat error aperiam dolorem magnam sint temporibus distinctio ab eum laboriosam ratione enim! Deleniti vero enim, sunt perspiciatis deserunt, excepturi sint accusantium exercitationem neque voluptatibus officiis. Quae autem repellendus odit laborum facere explicabo, ut maiores suscipit labore dolorem! Eveniet rem iusto laborum mollitia corrupti inventore earum quam quo quae? Fugit, blanditiis. Architecto delectus tempora dolorum amet neque corporis, quo labore modi culpa, nesciunt animi est atque. Veniam sunt explicabo dolor, quas suscipit dignissimos quisquam molestiae maxime amet, perferendis vero fugit. Esse molestiae veniam, odio fuga aut aliquam suscipit quisquam. Dolore facere dolor fuga quia corrupti nihil fugiat similique unde aliquam? Atque eaque minus eos sapiente itaque.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Index
