'use client'
import { useState } from "react";


const RoomsSuits=()=>{
    const imageUrls=[
        'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588112183376-413962HCHLI1A23QC1G3/cle_napoleon_01.png?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/4f697c3c-9c9a-4f24-90ee-0034363a8183/CLE-Floor-Plans-Deluxe.png?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588111939522-99W2VHFQI9UEOA3JTZB5/cle_queen-sq.png?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588113074123-1VZ3C0BECU9E9OBOD5OB/The+Grand+room+layout?format=2500w'
    ]

    const [amenties,setAmenties]=useState(false)
    function handleAmenties(){
        setAmenties(!amenties)
    }
    const [addons,setAddons]=useState(false)

    function handleAddons(){
        setAddons(!addons)
    }

    return (
      <>
        <section className="w-full bg-[#cee3d9] px-[65px] py-[60px]">
          <div className=" max-w-[1200px] mx-auto flex flex-col">
            <h2 className="text-center text-3xl">ROOMS &amp; SUITES</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 px-4 py-4">
                <div>
                  <img src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588111661327-B62A9INRM6T4BRV6LWYJ/CLE-A-301-064.jpg?format=2500w" />
                </div>
              </div>
              <div className="md:w-1/2 px-4 py-4">
                <h1 className="">
                  Each of our room types includes a king or queen-sized bed, an
                  en-suite tiled bathroom, a lounge chair and work desk,
                  and&nbsp;of course, views of our beloved neighborhood,
                  Poncey-Highland. Here, your dreams will be beautiful.{" "}
                </h1>
                <div className="py-4">
                  <h3 onClick={handleAmenties} className="cursor-pointer py-2">
                    <strong>+ AMENITIES</strong>
                  </h3>
                  {amenties && (
                    <ul>
                      <li>Crisp air conditioning</li>
                      <li>Pressed sheets</li>
                      <li>High-speed wireless internet</li>
                      <li>Color TV with cable</li>
                      <li>Modern Bluetooth speaker</li>
                      <li>Exclusive toiletries by La Bottega</li>
                      <li>In-room safe</li>
                    </ul>
                  )}
                  <h3 onClick={handleAddons} className="cursor-pointer py-2">
                    <strong>+ ADD-ONS</strong>
                  </h3>
                  {addons && (
                    <ul>
                      <li>Pet Fee</li>
                      <li>Bottle of Sparkling Wine</li>
                      <li>6 Pack of High Life Beer</li>
                      <li>Mini Champagne</li>
                      <li>Floral Arrangement</li>
                    </ul>
                  )}
                </div>
                <div>
                  <button className="bg-[#ba9d5a] hover:bg-[#e0b755] px-4 py-2 text-white font-medium">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#cee3d9] ">
          <div className=" max-w-[1200px] mx-auto flex flex-col py-4">
            <p className="text-center text-lg">
              Rooms shown from smallest to largest
            </p>
            <div className="container mx-auto p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {imageUrls.map((url, index) => (
                  <div key={index} className="mb-4 h-[323px]">
                    <img
                      src={url}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full  object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* 
        Suits starts here */}
        <section className="w-full bg-[#cee3d9] ">
          <div className=" max-w-[1200px] mx-auto flex flex-col">
            <h2 className="text-center text-3xl">SUITES</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 px-4 py-4">
                <div>
                  <img src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588111661327-B62A9INRM6T4BRV6LWYJ/CLE-A-301-064.jpg?format=2500w" />
                </div>
              </div>
              <div className="md:w-1/2 px-4 py-4">
                <h1 className="leading-8 text-lg">
                  HOTEL CLERMONT OFFERS TWO DIFFERENT LAVISH SUITES: THE RUBY
                  AND (EVEN LARGER) THE FLOSSIE. EACH FEATURES PLUMOSE
                  MATTRESSES, SOFT SHEETS, A LUXURIOUS EN SUITE BATHROOM WITH A
                  CLAW FOOT TUB, AN EXTRA POWDER ROOM, COFFEE MAKER, BAR AND
                  MINI FRIDGE, SLEEPER SOFA, COLOR TV, THE WHOLE BIT...
                </h1>
                <div className="py-4">
                  <h3 onClick={handleAmenties} className="cursor-pointer py-2">
                    <strong>+ AMENITIES</strong>
                  </h3>
                  {amenties && (
                    <ul>
                      <li>Crisp air conditioning</li>
                      <li>Pressed sheets</li>
                      <li>High-speed wireless internet</li>
                      <li>Color TV with cable</li>
                      <li>Modern Bluetooth speaker</li>
                      <li>Exclusive toiletries by La Bottega</li>
                      <li>In-room safe</li>
                    </ul>
                  )}
                  <h3 onClick={handleAddons} className="cursor-pointer py-2">
                    <strong>+ ADD-ONS</strong>
                  </h3>
                  {addons && (
                    <ul>
                      <li>Pet Fee</li>
                      <li>Bottle of Sparkling Wine</li>
                      <li>6 Pack of High Life Beer</li>
                      <li>Mini Champagne</li>
                      <li>Floral Arrangement</li>
                    </ul>
                  )}
                </div>
                <div>
                  <button className="bg-[#ba9d5a] hover:bg-[#e0b755] px-4 py-2 text-white font-medium">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
        Suits ends here */}

        <section className="w-full bg-[#cee3d9] ">
          <div className=" max-w-[1200px] mx-auto flex flex-col py-4">
            <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 px-4 h-[350px]">
              <img className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588176753363-700WCTMVOC5LBHO24G81/cle_flossie_01.png?format=2500w" />
            </div>
            <div className="md:w-1/2 px-4 h-[350px]">
              <img className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588176766051-8URBKG2ZQAGAKTUGUSHS/The+Ruby+suite+layout?format=2500w" />
            </div>
            </div>
     
          </div>
        </section>


        {/* Accessible rooms */}
        <section className="w-full bg-[#cee3d9] px-[65px] py-[60px]">
          <div className=" max-w-[1200px] mx-auto flex flex-col">
          <h2 className="text-center text-3xl uppercase py-4">Accessible Rooms</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 px-4 py-4">
                <div>
                  <img src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588111661327-B62A9INRM6T4BRV6LWYJ/CLE-A-301-064.jpg?format=2500w" />
                </div>
              </div>
              <div className="md:w-1/2 px-4 py-4">
              <p className="leading-8 py-2">HOTEL CLERMONT OFFERS TWO TYPES OF ACCESSIBLE ROOMS AT OUR PROPERTY. ACCESSIBILITY FEATURES INCLUDE:</p>
                <div className="py-4">
         
                    <ul className="list-disc px-2">
                      <li className="py-2"><p>AUDIO-VISUAL DOORBELL FOR HEARING IMPAIRED</p></li>
                      <li className="py-2"><p >ROLL IN AND TRANSFER SHOWER</p></li>
                      <li className="py-2"><p >ACCESSIBLE BATH DISPENSERS AND WATER TURN ON VALVE</p></li>
                      <li className="py-2"><p >32” INCH DOORWAYS</p></li>
                  
                    </ul>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#ba9d5a] hover:bg-[#e0b755] px-4 py-2 text-white font-medium">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
            {/* Accessible rooms */}
      </>
    );
}
export default RoomsSuits;