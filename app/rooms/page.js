'use client'
import { useState,useEffect  } from "react";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

const RoomsSuits=()=>{

  const images=[
    'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186173822-5B3AMW7AEQQ9EYPB9QMX/CLE-A-075-5b6867146d121.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186182749-PI37B2FX74Q7ESP4IADM/CLE-L-054-5b64af655b145-790x502.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186170535-Q8A0XGW8SBSYNLBXZZXZ/CLE-A-0024.jpg?format=1000w',
    'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186171111-KC69A7HCENE3Z5Q7QQYP/CLE-A-034.jpg?format=1000w',
  
  ]
    const imageUrls=[
        'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588112183376-413962HCHLI1A23QC1G3/cle_napoleon_01.png?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/4f697c3c-9c9a-4f24-90ee-0034363a8183/CLE-Floor-Plans-Deluxe.png?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588111939522-99W2VHFQI9UEOA3JTZB5/cle_queen-sq.png?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588113074123-1VZ3C0BECU9E9OBOD5OB/The+Grand+room+layout?format=2500w'
    
      ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === 0) {
          return images.length - 1;  // If at the first image, cycle to the last image
        } else {
          return prevIndex - 1;
        }
      });
    };
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        handleNextImage();
      }, 2000); // Adjust the interval time (in milliseconds) as needed
  
      return () => clearInterval(intervalId); // Clear the interval on component unmount
    }, [currentImageIndex]);
  

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
              <div className="md:w-1/2 px-4 py-4 relative">
                <div className="relative w-full  h-[450px] transition-opacity duration-500">
                  <img
                    src={images[currentImageIndex]}
                    className="h-full w-full object-cover transition-opacity duration-500"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                  {/* Left arrow icon */}
                  <div
                    onClick={handlePrevImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 ml-4 cursor-pointer transition-background-color duration-300"
                  >
                    <FaAngleLeft className="w-8 h-8" />
                  </div>

                  {/* Right arrow icon */}
                  <div
                    onClick={handleNextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 mr-4 cursor-pointer transition-background-color duration-300"
                  >
                    <FaAngleRight className="w-8 h-8" />
                  </div>
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
              <div className="md:w-1/2 px-4 py-4 relative">
                <div className="relative">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588111661327-B62A9INRM6T4BRV6LWYJ/CLE-A-301-064.jpg?format=2500w"
                    alt="Image"
                  />

                  {/* Left arrow icon */}
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 ml-4 cursor-pointer">
                    <FaAngleLeft className="w-8 h-8" />
                  </div>

                  {/* Right arrow icon */}
                  <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 mr-4 cursor-pointer">
                    <FaAngleRight className="w-8 h-8" />
                  </div>
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
                <img
                  className="w-full h-full object-cover"
                  src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588176753363-700WCTMVOC5LBHO24G81/cle_flossie_01.png?format=2500w"
                />
              </div>
              <div className="md:w-1/2 px-4 h-[350px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588176766051-8URBKG2ZQAGAKTUGUSHS/The+Ruby+suite+layout?format=2500w"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Accessible rooms */}
        <section className="w-full bg-[#cee3d9] px-[65px] py-[60px]">
          <div className=" max-w-[1200px] mx-auto flex flex-col">
            <h2 className="text-center text-3xl uppercase py-4">
              Accessible Rooms
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 px-4 py-4 relative">
                <div>
                  <img src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588111661327-B62A9INRM6T4BRV6LWYJ/CLE-A-301-064.jpg?format=2500w" />
                </div>
                {/* Left arrow icon */}
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 ml-4 cursor-pointer">
                  <FaAngleLeft className="w-8 h-8 fixed" />
                </div>

                {/* Right arrow icon */}
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 mr-4 cursor-pointer">
                  <FaAngleRight className="w-8 h-8" />
                </div>
              </div>
              <div className="md:w-1/2 px-4 py-4">
                <p className="leading-8 py-2">
                  HOTEL CLERMONT OFFERS TWO TYPES OF ACCESSIBLE ROOMS AT OUR
                  PROPERTY. ACCESSIBILITY FEATURES INCLUDE:
                </p>
                <div className="py-4">
                  <ul className="list-disc px-2">
                    <li className="py-2">
                      <p>AUDIO-VISUAL DOORBELL FOR HEARING IMPAIRED</p>
                    </li>
                    <li className="py-2">
                      <p>ROLL IN AND TRANSFER SHOWER</p>
                    </li>
                    <li className="py-2">
                      <p>ACCESSIBLE BATH DISPENSERS AND WATER TURN ON VALVE</p>
                    </li>
                    <li className="py-2">
                      <p>32” INCH DOORWAYS</p>
                    </li>
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