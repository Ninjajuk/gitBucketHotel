
'use client'

import React from 'react';
import Footer from '../components/Footer';
import {offerdata} from '../components/data/offerpagedata'
const OfferPage = () => {


  return (
    <>
      <div className=" bg-[#cee3d9]">
        <div className=" max-w-[1200px] mx-auto ">
        <h1 className='text-center'>SPECIALS & OFFERS</h1>
        <p className='text-center leading-10'>Book direct on our website and select one of our many promotions for added benefits. Flexible cancelations, complimentary welcome beverage, and our best available rates are all benefits that the other booking sites just can’t offer. Want to be the first to know about our upcoming specials and events? </p>
          <p className='text-center mt-4'>Sign up for our email list to be an insider.</p>
          <div className="flex flex-col md:flex-row w-full py-[65px] lg:px-[80px]">


            {/* <div className='flex flex-col gap-8 md:flex-row'> */}
            
            {/* <div className='w-1/2 '><div className="flex flex-col  flex-wrap">
      <div className="w-full">
        <img src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/10f087ef-44cb-4fd8-9be3-adf28c5b3063/CLER+Witching+Hour+Promo.gif?format=1500w" alt="" className="w-full h-auto" />
      </div>
      <div className="w-full text-center">
        <div className="inner-column">
          <h1 className="text-3xl font-bold mb-4">
            Welcome To <span className="text-yellow-500">Yamifood Restaurant</span>
          </h1>
          <h4 className="text-base font-semibold mb-2">Little Story</h4>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque
            ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus
            erat et sem.
          </p>
          <p className="text-lg mb-4">
            Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus
            pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.
          </p>
          <a
            href="#"
            className="btn btn-lg btn-circle btn-outline-new-white text-yellow-500 hover:text-white"
          >
            Reservation
          </a>
        </div>
      </div>
    </div></div> */}

<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
  {offerdata.map((item, index) => (
    <div key={index} className="flex flex-col flex-wrap">
      <div className="w-full">
        <img src={item.img} alt="" className="w-full h-auto" />
      </div>
      <div className="w-full  my-4">
        <h1 className="text-3xl font-bold my-4 uppercase">
          {item.title}
        </h1>
        <p className="text-lg mb-4">
          {item.description}
        </p>
        <button
          href="#"
          className="p-2 text-center bg-yellow-500 text-white"
        >
          {item.btntext}
        </button>
      </div>
    </div>
  ))}
</div>



{/* 
    <div className='w-1/2 '>
        <div className="flex flex-col flex-wrap">
      <div className="w-full">
        <img src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/10f087ef-44cb-4fd8-9be3-adf28c5b3063/CLER+Witching+Hour+Promo.gif?format=1500w" alt="" className="w-full h-auto" />
      </div>
      <div className="w-full text-center my-4">
       
          <h1 className="text-3xl font-bold my-4">
          CLERMONT’S FINEST OFFER
          </h1>
          <p className="text-lg mb-4">
          Complimentary valet parking and a $25 nightly dining credit for Tiny Lou’s.
          </p>
          <a
            href="#"
            className="btn btn-lg btn-circle btn-outline-new-white text-yellow-500 hover:text-white"
          >
            LEARN MORE

          </a>
        </div>
      </div>
    </div> */}

            {/* </div> */}
        
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferPage;
