import React from 'react';
import NavbarContainer from "../containers/NavbarContainer";

const productData = [
    {
        id: '1',
        name: 'Iphone 11',
        price: '200.00',
        image: './assets/images/i11.jpg',
        oldprice: '400',
        desc: "1. Some quick example text to build on the card title and make up the bulk of the card's content.",
        quantity: 0,
    },
    {
        id: '2',
        name: 'Iphone 12',
        price: '300.00',
        image: './assets/images/i12.jpg',
        oldprice: '600',
        desc: "2. Some quick example text to build on the card title and make up the bulk of the card's content.",
        quantity: 0,
    },
    {
        id: '3',
        name: 'Iphone 13',
        price: '400.00',
        image: './assets/images/i13.jpg',
        oldprice: '700',
        desc: "3. Some quick example text to build on the card title and make up the bulk of the card's content.",
        quantity: 0,
    },
]

export const Home = (props) => {

    return (
        <div className='Home animate-in'>
            <NavbarContainer />
            <div className="container animate__animated animate__fadeInUp">
                <h1 className='text-center pt-3'>Home</h1>

                <div className='card-wrapper pt-3'>
                    <div className="row justify-content-around gap-4">

                        {
                            productData.map((product, id) => {
                                return <div key={id} className="card col-12 md:col-6 lg:col-4">
                                    <div className='title-bg'>
                                        <h5 className="card-title">{product.name}</h5>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                    <div className='img-bg'>
                                        <img src={product.image} className="card-img-top w-50 h-100 mx-auto" alt="..." />
                                    </div>
                                    {/* <hr /> */}
                                    <div className="card-body">
                                        <p className="card-text">{product.desc}</p>
                                        <h4> <span>${product.price}</span> <strike>${product.oldprice}</strike></h4>
                                        <div className="card-bottom d-flex justify-content-between align-items-center">
                                            <button
                                                className="btn btn-outline-primary"
                                                onClick={() => props.addToCartHandler({ name: product.name, price: product.price, img: product.image, oldprice: product.oldprice, desc: product.desc, quantity: product.quantity })}
                                            >
                                                Add to cart
                                            </button>
                                            {/* <AiOutlineHeart className='heart-icon' /> */}
                                            <i
                                                role='button'
                                                className="fa-regular fa-heart heart-icon"
                                                onClick={() => props.addToWishHandler({ name: product.name, price: product.price, img: product.image, oldprice: product.oldprice, desc: product.desc })}
                                            >
                                            </i>
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
