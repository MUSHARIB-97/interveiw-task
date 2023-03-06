import React, { useEffect, useState } from 'react'
import './../../src/sorces/home.css'
import less from './../../src/sorces/assets/less.png'
import greater from './../../src/sorces/assets/greater.png'
import event from './../../src/sorces/assets/event.jpg'
import saloon from './../../src/sorces/assets/saloon.jpg'
import catering from './../../src/sorces/assets/catering.jpg'
import designer from './../../src/sorces/assets/designer.jpg'
import hall from './../../src/sorces/assets/hall.jpg'
import stage from './../../src/sorces/assets/stage.jpg'
import light from './../../src/sorces/assets/light.jpg'
import rent from './../../src/sorces/assets/rent a car.jpg'
import search from './../../src/sorces/assets/search.png'
import request from './../../src/sorces/assets/request.png'
import booked from './../../src/sorces/assets/booked.png'
import video from './../../src/sorces/assets/video.jpg';
import customers from './../../src/sorces/assets/customers.png'
import owner from './../../src/sorces/assets/owner.png'
import neelam from './../../src/sorces/assets/neelam.jpg';
import fb from './../../src/sorces/assets/fb.png'
import twitter from './../../src/sorces/assets/twitter.png'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'


function Home() {
    const arr = [
        {
            id: 1,
            img: require('./../../src/sorces/assets/bgslider1.jpg'),
        },
        {
            id: 2,
            img: require('./../../src/sorces/assets/bgslider2.jpg'),
        },
        {
            id: 3,
            img: require('./../../src/sorces/assets/bg-start.jpg'),
        }
    ]

    const [index, setIndex] = useState(0)

    const nextImg = () => {
        setIndex((index + 1) % arr.length);
    }
    const prevImg = () => {
        setIndex((index - 1 + arr.length) % arr.length)
    }

    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const handleClose = () => setShow(false)
    const handleClose2 = () => setShow2(false)

    return (
        <>

            <div className='main'>
                <div className='slider-body'>
                    {/* <div className='slider-img'>
                    <img src={arr[index - 1].img} />
                </div>
                <div className='slider-btn' >
                    <button className='btn-1' onClick={() => setIndex(prev => prev >= arr.length ? prev : prev - 1)} > Previous </button>
                    <button className='btn-2' onClick={() => setIndex(prev => prev >= arr.length ? prev : prev + 1)} >Next</button>
                </div>
                <div className='text' >
                    <div className='head-1' >
                        <div className='heading' >
                            <h4>Event Management</h4>
                        </div>
                        <div className='head-btn' >
                            <p> Sign In</p>
                            <p> Sign Up</p>
                        </div>
                    </div>
                </div> */}

                    <div style={{
                        backgroundImage: `url(${arr[index].img})`,
                        backgroundSize: "cover", width: "100%", height: "60vh",
                        backgroundPosition: "center center",
                        overflow: "hidden",
                    }} />
                    <div className='slider-btn' >
                        <button onClick={prevImg} > Previous</button>
                        <button onClick={nextImg} >
                            Next
                        </button>
                    </div>
                    <div className='text' >
                        <div className='head-1' >
                            <div className='heading' >
                                <h4>Event Management</h4>
                            </div>
                            <div className='head-btn' >
                                <p onClick={() => setShow(true)}> Sign In</p>
                                <p onClick={() => setShow2(true)}> Sign Up</p>
                            </div>
                        </div>
                        <div className='head-2'>
                            <div className='main-1' >
                                <h3>Give Your Event a Royal Look</h3>
                                <button>See I know its work</button>
                            </div>
                            <div class="inpts">
                                <div class="input-1">
                                    <input placeholder="Find Location" />
                                </div>
                                <div class="input-2">
                                    <input placeholder="Search Service" />
                                </div>
                                <div class="btns-input">
                                    <button>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='services' >
                    <h3>Our Best Services For You</h3>
                </div>
                <div className='services-body' >
                    <div className='row body-detail' >
                        <div className='col-lg-3 col-md-3 col-xsm-6 card-1' >
                            <div className='img-1' >
                                <img src={hall} />
                            </div>
                            <div>
                                <h4>Party Halls</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xsm-6 card-2' >
                            <div className='img-2' >
                                <img src={saloon} />
                            </div>
                            <div>
                                <h4>Saloons</h4>
                            </div></div>
                        <div className='col-lg-3 col-md-3 col-xsm-6 card-3' >
                            <div className='img-3' >
                                <img src={catering} />
                            </div>
                            <div>
                                <h4>Catering Services</h4>
                            </div></div>
                        <div className='col-lg-3 col-md-3 col-xsm-6 card-4' >
                            <div className='img-4' >
                                <img src={designer} />
                            </div>
                            <div>
                                <h4>Dress Designer</h4>
                            </div></div>
                    </div>
                    <div className='row body-detail-2' >
                        <div className='col-lg-3 col-md-3 col-xsm-6 card-5' >
                            <div className='img-5' >
                                <img src={event} />
                            </div>
                            <div>
                                <h4>Event Organizers</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xsm-6 card-6' >
                            <div className='img-6' >
                                <img src={stage} />
                            </div>
                            <div>
                                <h4>Stage Decoration</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xsm-6 card-7' >
                            <div className='img-7' >
                                <img src={light} />
                            </div>
                            <div>
                                <h4>Lighting Decoration</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xsm-6 card-8' >
                            <div className='img-8' >
                                <img src={rent} />
                            </div>
                            <div>
                                <h4>Rent a Car</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-services' >
                <div className='row services-body' >
                    <div className='col-lg-8 col-md-6 col-sm-12 body-detail' >
                        <div className='row inner-detail' >
                            <h2>How Book Services</h2>
                            <div className='col-sm-4 inner-1 card' >
                                <img src={search} className="card-img" />
                                <div className='card-body'>
                                    <h4 className='card-title' >Search Service</h4>
                                    <p>Search,Service , Short list, Review and Share the Best Banquet Hall,
                                        Party Halls near You.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-4 inner-2 card' >
                                <img src={request} className="card-img" />
                                <div className='card-body'>
                                    <h4 className='card-title' >Request Qoute </h4>
                                    <p>Search,Service , Short list, Review and Share the Best Banquet Hall,
                                        Party Halls near You.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-4 inner-3 card' >
                                <img src={booked} className="card-img" />
                                <div className='card-body'>
                                    <h4 className='card-title' >Book a Service</h4>
                                    <p>Search,Service , Short list, Review and Share the Best Banquet Hall,
                                        Party Halls near You.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 body-detail-2' >
                        <div className='inner'>
                            <h3>Watch Video</h3>
                            <img src={video} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='comments'>
                <div className='row comments-body'>
                    <div className='col-md-8 col-xsm-12 body-detail' >
                        <div className='row inner'>
                            <div className='col-lg-12 col-xsm-12 card'>
                                <img src={customers} className='card-img' />
                                <div className='card-body'>
                                    <h4 className='card-title'>For Customers</h4>
                                    <p className='card-text'>A customer review is a reflection of a customer's experience with your company's products or services. Reviews can be found on sites such as Google Reviews, Amazon, Yelp, and Facebook. Consumers use customer reviews during the buyer's journey to understand how your product works and whether it's worth the investment. </p>
                                </div>
                            </div>
                            <div className='col-md-12 col-xsm-12 card'>
                                <img src={owner} className='card-img' />
                                <div className='card-body'>
                                    <h4 className='card-title'>For Customers</h4>
                                    <p className='card-text'>A customer review is a reflection of a customer's experience with your company's products or services. Reviews can be found on sites such as Google Reviews, Amazon, Yelp, and Facebook. Consumers use customer reviews during the buyer's journey to understand how your product works and whether it's worth the investment. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-xsm-12 body-detail-2'>
                        <h3>Love In Comments</h3>
                        <div className='card'>
                            <img src={neelam} className="card-img" />
                            <div className='card-body'>
                                <h4 className='card-title'>Neelum Muneer</h4>
                                <p className='card-text'>You can't be a good manager if you are doing everything yourself.” “A great event manager makes even the host feel like a guest.” “An event shouldn't be just an experiential thing, it should be an emotional thing.” “On the day of an event, a good event manager is always the first to arrive and last to leave.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fotter' >
                <div className='row fotter-body'>
                    <div className='col-md-6 col-sm-12 body-detail'>
                        <div className='body-1'>
                            <p>Contact with Us On</p>
                            <div className='icons' >
                                <img src={fb} />
                                <img src={twitter} style={{ marginLeft: "10px" }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12' >
                        <p>Call Us: 090078601</p>
                    </div>
                    <div className='col-md-3 col-sm-12' >
                        <p>eventmanagement@gmail.com</p>
                    </div>
                </div>
            </div>

            <Modal size="md" show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-detail'>
                        <div className='inpt-1' >
                            <input type={'email'} placeholder='Enter Your Email' />
                        </div>
                        <div className='inpt-2'>
                            <input type={'password'} placeholder='Enter Your Password' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} >Save</Button>
                </Modal.Footer>
            </Modal>

            <Modal size="md" centered show={show2} onHide={handleClose2}>
                <Modal.Header>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-detail'>
                        <div className='inpt-1' >
                            <input type={'email'} placeholder='Enter Your Email' />
                        </div>
                        <div className='inpt-2'>
                            <input type={'password'} placeholder='Enter Your Password' />
                        </div>
                        <div className='inpt-2'>
                            <input type={'password'} placeholder='Re-Enter Your Password' />
                        </div>
                        <div className='inpt-2'>
                            <input type={'number'} placeholder='Enter Your Phone Number' />
                        </div>
                    </div>
                    <div>
                        <p>Already have an accounct?</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn  bg-warning" onClick={handleClose2} >Save</button>
                    <button className='btn bg-success' onClick={handleClose2} >Sign In</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home