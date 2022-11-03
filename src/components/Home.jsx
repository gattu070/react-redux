import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";

const productData = [
    {
        name: 'Iphone 11',
        price: '200',
        image: './assets/images/i11.jpg'
    },
    {
        name: 'Iphone 12',
        price: '300',
        image: './assets/images/i12.jpg'
    },
    {
        name: 'Iphone 13',
        price: '400',
        image: './assets/images/i13.jpg'
    },
]

export const Home = (props) => {
    // console.log(props.data.length);
    return (
        <div className='Home'>
            <div className="container">
                <h1 className='text-center pt-3'>Home</h1>

                <div className='card-wrapper pt-3'>
                    <div className="row justify-content-around gap-4">

                        {
                            productData.map((product,index) => {
                                return <div key={index} className="card col-12 md:col-6 lg:col-4 p-3 px-4">
                                    <img src={product.image} className="card-img-top w-50 h-50 mx-auto" alt="..." />
                                    <hr />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <h4> <b>${product.price}</b> </h4>
                                        <div className="card-bottom d-flex justify-content-between align-items-center">
                                            <button
                                                className="btn btn-outline-primary"
                                                onClick={() => props.addToCartHandler({ name: product.name, price: product.price })}
                                            >
                                                Add to cart
                                            </button>
                                            <AiOutlineHeart className='heart-icon' />
                                        </div>
                                    </div>
                                </div>

                            })
                        }


                        {/* <div className="card col-4 p-3 px-4">
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
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
