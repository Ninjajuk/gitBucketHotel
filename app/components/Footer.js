
const Footer = () => {
    return (
      <footer className="bg-[#f5e7cc] text-white py-4 w-full">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex flex-col items-center ">
            <div className="max-w-[250px] py-4">
                <img src='https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588285276443-RM1HDCIOL06BJJIXNHJ9/hotel-clermont_logo_footer_small.png?format=1500w'/>
            </div>
            <div className="text-center py-4">
                <h1 className="text-[#ba9d5a] font-medium">789 PONCE DE LEON AVE.</h1>
                <h1 className="text-[#ba9d5a] font-medium">ATLANTA, GA. 30306</h1>
                <h1 className="text-[#ba9d5a] font-medium">470-485-0485</h1>
            </div>
            <div className="max-w-[250px] py-4">
                <img src='https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/cc1ddb95-4ee1-460a-9579-6fbf693b1641/TC_2022_L_TRANSPARENT_BG_cle-gold-smaller.png?format=1500w'/>
            </div>
          </div>
          <div className=" ">
            <h1 className="pb-8 text-center text-[#ba9d5a] font-medium">SIGN UP FOR OUR THRILLING EMAIL LIST</h1>
            {/* Email subscription form */}
            <form className="flex flex-col px-4">
  <label className="py-2 text-[#ba9d5a]">Email</label>
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full p-2 border border-gray-300 rounded-l my-2"
  />
  <label className="flex items-center my-2 text-[#ba9d5a] font-medium">
    <input type="checkbox" className="mr-2 " />
    <span className="text-[#ba9d5a]">BY SUBMITTING YOU AGREE TO SUBSCRIBE</span>
  </label>
  <button
    type="submit"
    className="bg-blue-400 hover:bg-blue-800 text-white p-2 rounded-r w-full my-2"
  >
    Subscribe
  </button>
</form>

          </div>
          <div className="flex flex-col items-center">
          <h1 className="text-[#ba9d5a] font-medium">789 PONCE DE LEON AVE.</h1>
          <div className="max-w-[250px] py-2">
                <img src='https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588285108045-UTSXCCA3V807GYQ4KTMS/cle_footer_fairlane.png?format=1500w'/>
            </div>
            <div className="max-w-[250px] py-2">
                <img src='https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588285136192-VG1MQLNFD5U57NLBJDRP/cle_footer_the-oliver-hotel.png?format=1500w'/>
            </div>
            <div className="max-w-[250px] py-2">
                <img src='https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588285180677-A5QKWZPCET866ZCUNC6D/cle_footer_station-house-inn.png?format=1500w'/>
            </div>
            <div className="max-w-[250px] py-2">
                <img src='https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/e2882c3b-958a-4f14-b0d1-15789cbf7729/CH-OPTION1-outline-2.png?format=1500w'/>
            </div>
            <div className="max-w-[250px] py-2">
                <img src='https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/86cddf16-13fa-455e-af60-362384d9973d/MAR+logo+footer.png?format=1500w'/>
            </div>
          </div>

        </div>
        <div className="flex flex-wrap items-center justify-center pt-4 px-1 max-w-full text-[#ba9d5a]">
            <a href='#' className="px-2 ">FACEBOOK</a>
            <a href='#'className="px-2 ">INSTAGRAM  </a>
            <a href='#'className="px-2 ">TRIPADVISOR</a>
            <a href='#'className="px-2 ">PRESS</a>
            <a href='#'className="px-2 ">PRIVACY POLICY</a>
            <a href='#'className="px-2 ">HOTEL POLICY</a>
            <a href='#'className="px-2 ">ACCESSIBILITY </a>
            <a href='#'className="px-2 ">CAREERS</a>

          </div>
          <h1 className="text-center py-4 text-[#ba9d5a] font-medium">© HOTEL CLERMONT</h1>
      </footer>
    );
  };
  
  export default Footer;
  