import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import NavbarContainer from "../containers/NavbarContainer";

export const Cart = (props) => {
  console.log(props.data);
  return (
    <div className='Cart'>
      <NavbarContainer />
      <div className="container animate__animated animate__fadeInUpBig">
        <h1 className='text-center pt-3'>Cart</h1>

        <div className='card-wrapper pt-3'>
          <div className="row justify-content-around gap-4">
            {
              props?.data?.map((data, index) => {
                return <div key={index} className="card col-12 md:col-6 lg:col-4">
                  <div className='title-bg'>
                    <h5 className="card-title">{data?.cardData.name}</h5>
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className='img-bg'>
                    <img src={data?.cardData.img} className="card-img-top w-50 h-100 mx-auto" alt="..." />
                  </div>
                  {/* <hr /> */}
                  <div className="card-body">
                    <p className="card-text">{data?.cardData.desc}</p>
                    <h4> <span>${data.cardData.price}</span> <strike>${data.cardData.oldprice}</strike></h4>
                    <div className="card-bottom d-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-outline-primary"
                      // onClick={() => props.addToCartHandler({ name: product.name, price: product.price, img: product.image })}
                      >
                        Add to cart
                      </button>
                      {/* <AiOutlineHeart className='heart-icon' /> */}
                      <i className="fa-regular fa-heart heart-icon"></i>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}
