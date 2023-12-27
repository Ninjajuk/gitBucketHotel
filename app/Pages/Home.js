
'use client'

import React from 'react';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import ResponsiveCarousel from '../components/Carousel';

const HomePage = () => {

    function handleClick(){
        alert("Hi Samsu")
    }
  return (
    <div className="flex flex-col ">
      <div className="relative max-w-screen ">
        <img
          id="slider-image"
          src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1587589749373-8NSSW0IEGFF6KWIQVD3I/CLE-A-508-129-5b68686514c15.jpg?format=2500w"
          className=" object-cover w-full h-full"
        />
      </div>

      {/* <div className="about-section-box py-8 bg-[#cee3d9]">
  <div className="container flex flex-col md:flex-row items-center gap-4">
    <div className="lg:w-1/2">
      <div className="max-w-[714px]">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1627428753077-LLE29FJ66ZNQQF9ITFLE/clermont_illo_02.png?format=2500w" // Replace with your image URL
          alt="Image"
          className="w-full"
        />
      </div>
    </div>
    <div className="lg:w-1/2 lg:px-4 py-2">
      <div className="flex flex-col text-center pr-4">
        <div className='flex-start'>
          <img src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1627428895061-7E5YWYM1BABPUOOSFXUJ/cle_writing_02.png?format=2500w" />
        </div>
        <div className='text-start'>
          <h2 className="text-xl font-bold mb-2">
            {" "}
            BOOK DIRECT for added perks
          </h2>
          <p className="py-1">Welcome BEVERAGE upon check-in</p>
          <p className="py-1">Complimentary in-room coffee</p>
          <p className="py-1">Priority access to Rooftop Bar +1 guest</p>
          <p className="py-1">
            Flexible check-in/check-out times + cancellation policy
          </p>
          <button
            onClick={handleClick}
            className="bg-gray-600 p-2 rounded-md mt-2 hover:bg-gray-800 cursor-pointer"
          >
            BOOK NOW
          </button>
          <div>
            <h1 className="py-2">789 PONCE DE LEON AVE N.E. </h1>
            <h1 className="py-2">ATLANTA, GA 30306</h1>
            <h1 className="py-2">
              <a href="tel:4704850485">(470) 485-0485</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

      <div className="flex flex-col lg:flex-row items-center justify-center py-[65px] bg-[#cee3d9] lg:px-[80px] ">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 h-[450px]">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1627428753077-LLE29FJ66ZNQQF9ITFLE/clermont_illo_02.png?format=2500w" // Replace with your image URL
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:w-1/2 lg:px-8 py-2  ">
            <div className="flex-start">
              <img src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1627428895061-7E5YWYM1BABPUOOSFXUJ/cle_writing_02.png?format=2500w" />
            </div>

            <p className="font-courier-std font-normal text-base tracking-wide leading-8 uppercase text-center">
              Located on the historic Ponce de Leon Avenue in the heart of
              Atlanta, Hotel Clermont boasts 94 carefully appointed rooms with
              modern conveniences and splendid views. We look forward to having
              you as our guest.
            </p>

            <div className="flex justify-center">
              <button
                onClick={handleClick}
                className="border-2 border-indigo-600 p-2 rounded-md mt-2 bg-[#ba9d5a] hover:bg-gray-600 hover:text-white cursor-pointer flex justify-center"
              >
                BOOK NOW
              </button>
            </div>
            <div className="text-center">
              <h1 className="py-2">789 PONCE DE LEON AVE N.E. </h1>
              <h1 className="py-2">ATLANTA, GA 30306</h1>
              <h1 className="py-2">
                <a href="tel:4704850485">(470) 485-0485</a>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center py-[65px] bg-[#f5e7cc] lg:px-[80px] ">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 lg:px-4 py-2 h-[450px] ">
            <h2 className="font-roboto font-normal text-4xl tracking-wide leading-relaxed text-center capitalize">
              {" "}
              BOOK DIRECT FOR ADDED PERKS
            </h2>
            <p className="my-4 text-center font-courier-std font-[18px] text-base tracking-wide leading-relaxed uppercase">
              Welcome BEVERAGE upon check-in
            </p>
            <p className="my-4 text-center font-courier-std font-[18px] text-base tracking-wide leading-relaxed uppercase">
              Complimentary in-room coffee
            </p>
            <p className="my-4 text-center font-courier-std font-[18px] text-base tracking-wide leading-relaxed uppercase">
              Priority access to Rooftop Bar +1 guest
            </p>
            <p className="my-4 text-center font-courier-std font-[18px] text-base tracking-wide leading-relaxed uppercase">
              Flexible check-in/check-out times + cancellation policy
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleClick}
                className="bg-gray-600 p-2 rounded-md mt-2 hover:bg-gray-800 cursor-pointer flex justify-center"
              >
                BOOK NOW
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 h-[450px]">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1587591598788-TR7K5YILU0GUCCGO2MFC/cle_illo_05.png?format=2500w" // Replace with your image URL
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* groups and events */}

      <div className="flex flex-col lg:flex-row items-center justify-center py-[65px] bg-[#cee3d9] lg:px-[80px] ">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 h-[450px]">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1591648003640-Q316VEOPALX7D7CGKBC5/cle_illo_22.png?format=2500w" // Replace with your image URL
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:w-1/2 lg:px-8 py-2 h-[450px] ">
            <h2 className="font-roboto font-normal text-4xl tracking-wide leading-8 text-center capitalize">
              GROUPS AND EVENTS
            </h2>
            <p className="my-4 text-center font-courier-std font-[18px] text-base tracking-wide leading-8 uppercase py-2">
              WITH AN ATMOSPHERE FULL OF POSITIVE ENERGY, HOTEL CLERMONT IS OPEN
              TO HOST YOUR GOOD TIMES AND YOUR NEXT BEST MEMORY.
            </p>
            <p className="my-4 text-center font-courier-std font-[18px] text-base tracking-wide leading-8 uppercase py-2">
              WHETHER YOU’RE TRAVELING IN A GROUP FOR WORK OR PLAY, PLANNING A
              CORPORATE RETREAT OR A WEDDING CELEBRATION, OUR GROUP ROOM BLOCKS,
              COMMUNAL SPACES, AND SEMI-PRIVATE AREAS ARE PERFECT FOR ANY
              OCCASION.
            </p>

            <div className="flex justify-center">
              <button
                onClick={handleClick}
                className="border-2 border-indigo-600 p-4 rounded-md mt-2 hover:bg-gray-600 hover:text-white cursor-pointer flex justify-center"
              >
                BOOK A CATHERING
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* groups and events */}

      {/* Eat and Drinks */}


      {/* <div className=" bg-[#0a663a] py-8">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="lg:w-1/2">
            <div className="max-w-[714px] max-h-[500px]">
              {" "}
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1627428753077-LLE29FJ66ZNQQF9ITFLE/clermont_illo_02.png?format=2500w" // Replace with your image URL
                alt="Image"
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:px-4 py-2">
            <div className="flex flex-col text-center">
              <div>
                <img src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1627428895061-7E5YWYM1BABPUOOSFXUJ/cle_writing_02.png?format=2500w" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">
                  {" "}
                  BOOK DIRECT for added perks
                </h2>
                <p className="py-1">Welcome BEVERAGE upon check-in</p>
                <p className="py-1">Complimentary in-room coffee</p>
                <p className="py-1">Priority access to Rooftop Bar +1 guest</p>
                <p className="py-1">
                  Flexible check-in/check-out times + cancellation policy
                </p>
                <button
                  onClick={handleClick}
                  className="bg-gray-600 p-2  rounded-md mt-2 hover:bg-gray-800 cursor-pointer"
                >
                  BOOK NOW
                </button>
                <div>
                  <h1 className="py-2">789 PONCE DE LEON AVE N.E. </h1>
                  <h1 className="py-2">ATLANTA, GA 30306</h1>
                  <h1 className="py-2">
                    <a href="tel:4704850485">(470) 485-0485</a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* 
 
{/* <Carousel/> */}

      <ResponsiveCarousel />

      <div className=" py-[65px] bg-[#cee3d9] lg:px-[80px] ">
        <div className="flex flex-col lg:flex-row items-center justify-center py-[65px] bg-[#cee3d9] lg:px-[80px] ">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row ">
            <div className="lg:w-1/2 lg:px-8 py-2 h-[450px] ">
              {/* <h2 className="font-roboto font-normal text-4xl tracking-wide leading-relaxed text-center capitalize">
                GROUPS AND EVENTS
              </h2> */}
              <p className="my-4 text-center font-courier-std font-[24px] text-base tracking-wide leading-10 uppercase py-2">
              START THE DAY SLOWLY IN OUR LOBBY CAFE, BREWING COFFEE AT 7 A.M. OUR FRENCH-AMERICAN BRASSERIE, TINY LOU’S, IS OPEN DAILY. HAVE A DRINK IN THE LOBBY OR HEAD UP TO THE ROOFTOP BAR FOR VIEWS OF ATLANTA’S SKYLINE.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={handleClick}
                  className="border-2 mt-8 border-indigo-600 p-2 rounded-md  hover:bg-gray-600 hover:text-white cursor-pointer flex justify-center"
                >
                  EAT AND DRINK

                </button>
              </div>
            </div>
            <div className="lg:w-1/2 h-[450px]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1587593294234-HQ93YB1VN6OSGW1IA1GD/CLE-A-023-5b6866f1b514c.jpg?format=2500w"
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


        <div className="w-full mx-auto flex flex-col ">
        <div className="flex flex-col md:flex-row">
          <div className="lg:w-1/2 h-[350px] object-center object-cover aspect-w-760 aspect-h-749">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1587593449314-08G3V2HOEBVPXM48PTIX/cle_illo_06.gif?format=2500w"
              className="w-full h-full "
            />
          </div>
          <div className="lg:w-1/2 h-[350px] object-center object-cover aspect-w-760 aspect-h-749 pl-8">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1587593320023-5N696NP5VOE31JVCWQOT/CLE-A-058-5b686715aecac.jpg?format=1500w"
              className="w-full h-full "
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-8">
          <div className="lg:w-1/2 h-[350px] object-center object-cover aspect-w-760 aspect-h-749">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1587593521678-WWQ8E3BMYRD6CFUG4ZES/CLE-A-013-5b6866ccc2097.jpg?format=2500w"
              className="w-full h-full "
            />
          </div>
          <div className="lg:w-1/2 h-[350px] object-center object-cover aspect-w-760 aspect-h-749">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1587596266407-N1Z03YRULUDO1S2WNWPP/cle_writing_03.png?format=2500w"
              className="w-full h-full "
            />
          </div>
        </div>
        </div>
 


      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
