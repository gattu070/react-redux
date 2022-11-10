import React from 'react';
import NavbarContainer from "../containers/NavbarContainer";

export const Wishlist = (props) => {
  console.log(props);
  return (
    <div className='Wishlist'>
      <NavbarContainer />
      <div className="container animate__animated animate__fadeInUpBig">
        <h1 className='text-center pt-3'>Wishlist</h1>

        <div className='card-wrapper pt-3'>
          <div className="row justify-content-around gap-4">
            {
              props?.wdata?.map((data, index) => {
                return <div key={index} className="card col-12 md:col-6 lg:col-4">
                  <div className='title-bg'>
                    <h5 className="card-title">{data?.wishData.name}</h5>
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className='merged'>
                    <div className='img-bg'>
                      <img src={data?.wishData.img} className="card-img-top w-50 h-100 mx-auto" alt="..." />
                    </div>

                    <div className="card-body">
                      <p className="card-text">{data?.wishData.desc}</p>
                      <h4> <span>${data.wishData.price}</span> <strike>${data.wishData.oldprice}</strike></h4>
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

                </div>
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}
