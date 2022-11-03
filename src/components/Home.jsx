import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";

export const Home = () => {
    return (
        <div className='Home'>
            <div className="container">
                <h1 className='text-center pt-3'>Home</h1>

                <div className='card-wrapper pt-3'>
                    <div className="row justify-content-between">
                        <div className="card col-4 p-3 px-4">
                            <img src="./assets/images/i11.jpg" className="card-img-top w-50 h-50 mx-auto" alt="..." />
                            <hr />
                            <div className="card-body">
                                <h5 className="card-title">iphone 11</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h4> <b>$200</b> </h4>
                                <div className="card-bottom d-flex justify-content-between align-items-center">
                                    <a href="#" className="btn btn-outline-primary">Add to cart</a>
                                    <AiOutlineHeart className='heart-icon' />
                                </div>
                            </div>
                        </div>

                        <div className="card col-4 p-3 px-4">
                            <img src="./assets/images/i12.jpg" className="card-img-top w-50 h-50 mx-auto" alt="..." />
                            <hr />
                            <div className="card-body">
                                <h5 className="card-title">iphone 12</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h4> <b>$200</b> </h4>
                                <div className="card-bottom d-flex justify-content-between align-items-center">
                                    <a href="#" className="btn btn-outline-primary">Add to cart</a>
                                    <AiOutlineHeart className='heart-icon' />
                                </div>
                            </div>
                        </div>

                        <div className="card col-4 p-3 px-4">
                            <img src="./assets/images/i13.jpg" className="card-img-top w-50 h-50 mx-auto" alt="..." />
                            <hr />
                            <div className="card-body">
                                <h5 className="card-title">iphone 13</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h4> <b>$200</b> </h4>
                                <div className="card-bottom d-flex justify-content-between align-items-center">
                                    <a href="#" className="btn btn-outline-primary">Add to cart</a>
                                    <AiOutlineHeart className='heart-icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
