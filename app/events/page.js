'use-client'

export default function  Events(){
    return (
      <>
        <section className="bg-green-200 py-[120px] px-[65]">
          <div className="max-w-[1200px] mx-auto ">
            <div className="px-[17px] py-[17px] text-center">
              <h2 className="text-center text-3xl leading-8 tracking-widest">
                &nbsp;THINGS TO DO AT HOTEL CLERMONT
              </h2>
              <h3 className="text-center py-4 tracking-wider line-clamp-2">
                There’s always something exciting happening Hotel Clermont.
                Check out the calendar of events below and start
                <br /> building out your itinerary.
              </h3>
            </div>
            <div className="max-w-[1200px] mx-auto">
              <div className="max-w-2xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-4 relative ">
                <div className="absolute top-0 left-0 rounded-lg bg-[#ffc04f] text-white flex flex-col items-center justify-center w-14 h-14">
                  <span className="text-xl font-bold">Oct</span>
                  <span className="text-xl font-bold">19</span>
                </div>
                <div className="flex flex-col  w-full bg-[#ffc04f]  rounded-md">
                  <div className="w-full h-[210px] ">
                    <img
                      className="w-full h-full object-cover  rounded-md"
                      src="https://files.elfsightcdn.com/fbd42ea9-071b-462f-9213-94bcc840da8a/da48952d-bcd0-4352-b47b-1a384a0de858/Hotel-Clermont-Service-Industry-Night.jpg"
                    />
                  </div>
                  <div className="w-full h-[250px] bg-[#ffc04f] px-8 py-4 my-2">
                    <h1 className="py-1">S.I.N. - Service Industry Night</h1>
                    <h2>DRINK SPECIALS</h2>
                    <h2>SERVICE INDUSTRY</h2>
                    <ul className="list-disc pt-4">
                      <li>05:30 PM - 11:59 PM UTC-4</li>
                      <li>Hotel Clermont Rooftop</li>
                    </ul>
                  </div>
                </div>

                 <div className="absolute top-0 left-0 rounded-lg bg-[#ffc04f] text-white flex flex-col items-center justify-center w-14 h-14">
                  <span className="text-xl font-bold">Oct</span>
                  <span className="text-xl font-bold">19</span>
                </div>

          

                <div className=" flex flex-col bg-[#ffc04f]  rounded-md relative">
                <div className="absolute top-0 left-0 rounded-lg bg-[#ffc04f] text-white flex flex-col items-center justify-center w-14 h-14">
                  <span className="text-xl font-bold">sep</span>
                  <span className="text-xl font-bold">29</span>
                </div>
                  <div className="w-full h-[210px] ">
                    <img
                      className="w-full h-full object-cover  rounded-md"
                      src="https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/5310b198-7ecc-4d02-be5e-04e21d41573e/POSTER-B.png"
                    />
                  </div>
                  <div className="bg-[#ffc04f] px-8 py-4 w-full h-[250px] my-2">
                    <h1>S.I.N. - Service Industry Night</h1>
                    <h2>DRINK SPECIALS</h2>
                    <div className="w-full bg-red-500 hover:bg-red-800 mt-8 text-center text-white rounded-md">
                      <button className="py-2 px-4 text-center">RSVP</button>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col bg-[#ffc04f]  rounded-md relative">
                <div className="absolute top-0 left-0 rounded-lg bg-[#ffc04f] text-white flex flex-col items-center justify-center w-14 h-14">
                  <span className="text-xl font-bold">Oct</span>
                  <span className="text-xl font-bold">19</span>
                </div>
                  <div className="w-full h-[210px] ">
                    <img
                      className="w-full h-full object-cover  rounded-md"
                      src="https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/e1ea343c-f15a-4278-be15-d7f69da42c4e/CLE_Sug-After-Dark-Facebook-Event-Cover-.png"
                    />
                  </div>
                  <div className="bg-[#ffc04f] px-8 py-4 w-full h-[250px] my-2">
                    <h1>S.I.N. - Service Industry Night</h1>
                    <h2>DRINK SPECIALS</h2>
                    <div className="w-full bg-red-500 hover:bg-red-800 mt-8 text-center text-white rounded-md">
                      <button className="py-2 px-4 text-center">RSVP</button>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col bg-[#ffc04f]  rounded-md relative">
                <div className="absolute top-0 left-0 rounded-lg bg-[#ffc04f] text-white flex flex-col items-center justify-center w-14 h-14">
                  <span className="text-xl font-bold">Oct</span>
                  <span className="text-xl font-bold">19</span>
                </div>
                  <div className="w-full h-[210px] ">
                    <img
                      className="w-full h-full object-cover  rounded-md"
                      src="https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/9a4d2032-6443-4b8a-b7c9-0d25c438903d/INTNTN.jpg"
                    />
                  </div>
                  <div className="bg-[#ffc04f] px-8 py-4 w-full h-[250px] my-2">
                    <h1>S.I.N. - Service Industry Night</h1>
                    <h2>DRINK SPECIALS</h2>
                    <div className="w-full bg-red-500 hover:bg-red-800 mt-8 text-center text-white rounded-md">
                      <button className="py-2 px-4 text-center">RSVP</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </>
    );

}