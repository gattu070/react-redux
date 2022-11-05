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
                return <div key={index} className="card col-12 md:col-6 lg:col-4 p-3 px-4">
                  <img src={data?.cardData.img} className="card-img-top w-50 h-50 mx-auto" alt="..." />
                  <hr />
                  <div className="card-body">
                    <h5 className="card-title">{data?.cardData.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h4> <b>${data.cardData.price}</b> </h4>
                    <div className="card-bottom d-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-outline-primary"
                        // onClick={() => props.addToCartHandler({ name: product.name, price: product.price })}
                      >
                        Add to cart
                      </button>
                      <AiOutlineHeart className='heart-icon' />
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
