'use client'
import React, { useState } from "react";
import WhatsNew from "./whatnew";
import StudentCorner from "./studentcorner";

const NextIas=()=>{
    const[whatsnewactive,setWhatnewActive]=useState(false)
    const[studentcorner,setStudentcorner]=useState(false)

    function handleWhatsnew(){
        setWhatnewActive(true)
        setStudentcorner(false);
    }
    function handlestudentcorner(){
        setStudentcorner(true)
        setWhatnewActive(false);
    }

    const gridColum4=[
        {title:'Current Affairs Magazine',
        text:'UPSC relevant monthly news compilation with comprehensive...',
        btn:'Read More'
    },
    {title:'Editorial Analysis',
    text:'Simplify editorials for aspiring students, easing',
    btn:'Read More'
},
{title:'Headlines of the Day',
text:'Headlines from Top Sources for Civil Services Exam: THE HINDU,',
btn:'Read More'
},
{title:'Daily Current Affairs',
text:'Holistic one-stop solution for time-efficient daily current affairs',
btn:'Read More'
},
    ]
    return (
      <>
        <h1>next IAS Page</h1>
        <nav className="w-full bg-white h-16">
          <div className="max-w-[1400px] flex items-center justify-around">
            <div className="px-4 py-2" width="146" height="30">
              <img
                className="w-full h-full object-cover"
                src="https://cdnstatic.nextias.com/assets/images/logo/next-ias.png"
              />
            </div>
            <div className="flex py-2">
              <ul className="flex px-1" l>
                <li className="px-1">Home</li>
                <li className="px-1">About us</li>
                <li className="px-1">Courses</li>
                <li className="px-1">Mentorship</li>
                <li className="px-1">Mentorship</li>
                <li className="px-1">Test Series</li>
                <li className="px-1">Current Affairs</li>
                <li className="px-1">Student Portal</li>
                <li className="px-1">Centers</li>
              </ul>
            </div>
            <div className="flex py-4 flex-wrap">
              <button className="px-2">MTS portal</button>
              <button className="px-2">Student Login</button>
            </div>
          </div>
        </nav>

        <section className="bg-green-100">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl bg-green-100 py-8">
            <h1 className="text-3xl py-2">Current Affairs</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-4  px-2 py-4 ">
              {gridColum4.map((item, index) => (
                <div key={index} className="flex flex-col  px-4 py-4 bg-white rounded-md ">
                  <div className="w-full flex justify-center bg-blue-800 mb-2 px-4 py-4 rounded-md text-white">
                    <button className="py-2 ">{item.title}</button>
                  </div>
                  <div className="mt-2">
                    <p className="px-2 ">{item.text}</p>
                  </div>
                  <div className="mt-auto underline">
                    <button className="underline px-2">{item.btn}</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col min-h-[280px] md:flex-row gap-4">
              <div className="md:w-1/2  bg-white px-4 py-2 rounded-md flex flex-col">
                <h1 className="px-2 text-3xl py-2">About NEXT IAS</h1>
                <p className="px-2">
                  NEXT IAS, an initiative of MADE EASY GROUP, is the next
                  generation institute for UPSC Civil Services Examination
                  preparation. We offer programmes to guide students in all the
                  three stages of the preparation - Preliminary examination,
                  Main Examination and Personality Test.
                </p>
                <div className="flex justify-end mt-auto py-2 px-2">
                  <button className="underline">Read More</button>
                </div>
              </div>
              <div className="md:w-1/2  bg-gray-300 px-4 rounded-md">2</div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  py-8">
          <h1 className="text-3xl py-2 text-center">Featured Courses</h1>
          <p className="text-center md:leading-8">Our comprehensive courses and test series have been designed to help aspirants<br/> in every stage of their Civil Services Exam preparation. We have curated the<br/> following options to cater to the varied needs of the aspirants.</p>
          <div className="grid md:grid-cols-2 gap-4  px-2 py-4">
          {gridColum4.map((item, index) => (
                <div key={index} className="flex flex-col  px-4 py-4 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white">
                  <div className="w-full flex items-center   mb-2 px-4 py-4 rounded-md ">
                    <span> <button className="py-2 text-2xl">{item.title}</button></span>
                    <span className="ml-auto"><svg data-name="Group 6134" height="50.424" id="Group_6134" viewBox="0 0 54.809 50.424" width="54.809" xmlns="http://www.w3.org/2000/svg"> <path d="M13.667.619A4.081,4.081,0,0,0,13.1,1c-.074-.069-.152-.137-.233-.2A4.094,4.094,0,0,0,10.344,0,4.914,4.914,0,0,0,7.6.828,3.171,3.171,0,0,0,6.143,3.466v.015L6.319,17.1A3.694,3.694,0,0,0,3.56,14.534,3.1,3.1,0,0,0,.721,15.68a2.878,2.878,0,0,0-.57,2.791l2.9,9.4a3.976,3.976,0,0,0,3.139,3.148,9.167,9.167,0,0,0,3.606-.33,8.814,8.814,0,0,1,1.325-.248,1.164,1.164,0,0,0,.2-.028,7.8,7.8,0,0,1,1.81-.187H13.2c2.669,0,3.578.729,5.376,2.169a30.446,30.446,0,0,0,4.6,3.156,3.843,3.843,0,0,0,2.9.42A3.386,3.386,0,0,0,28.128,34.4a3.274,3.274,0,0,0,.322-2.6,4.071,4.071,0,0,0-1.906-2.316l-7-5.385.3-20.61A3.211,3.211,0,0,0,18.231.537,4.292,4.292,0,0,0,16.086,0,4.97,4.97,0,0,0,13.667.619ZM14.1,14.83V3.685a1.134,1.134,0,0,0,.022-.219,1.076,1.076,0,0,1,.654-.923,2.559,2.559,0,0,1,2.314-.1A1.016,1.016,0,0,1,17.6,3.452L17.3,24.613a1.1,1.1,0,0,0,.432.89l7.49,5.764a1,1,0,0,0,.113.077c1.093.645,1.159,1.427.856,1.943a1.327,1.327,0,0,1-1.919.326,28.084,28.084,0,0,1-4.283-2.945c-1.856-1.487-3.325-2.663-6.8-2.663h-.072a10,10,0,0,0-2.216.225,11.213,11.213,0,0,0-1.622.3c-2.644.614-3.6.52-4.069-1.243L5.2,27.242,2.286,17.794a.663.663,0,0,0-.025-.07.725.725,0,0,1,.2-.644.874.874,0,0,1,.744-.357c.38.061.788.563,1.093,1.345l2.17,6.5a1.122,1.122,0,0,0,1.25.745A1.11,1.11,0,0,0,8.652,24.2L8.385,3.461c0-.744,1.015-1.244,1.958-1.244a1.872,1.872,0,0,1,1.131.324,1.093,1.093,0,0,1,.387.924V14.83a1.121,1.121,0,0,0,2.242,0Zm8.129-.209a1.108,1.108,0,1,0,0,2.216H52.567v31.37H12.205v-2.6a1.121,1.121,0,0,0-2.242,0v3.706a1.115,1.115,0,0,0,1.121,1.108h42.6a1.115,1.115,0,0,0,1.121-1.108V15.729a1.115,1.115,0,0,0-1.121-1.108Zm11.613,7.036a1.1,1.1,0,1,0,0,2.2H47.2a1.1,1.1,0,1,0,0-2.2Zm0,6.507a1.1,1.1,0,1,0,0,2.2H47.2a1.1,1.1,0,1,0,0-2.2ZM7.025,37.441a6.162,6.162,0,1,0,6.162-6.09A6.133,6.133,0,0,0,7.025,37.441Zm2.242,0a3.919,3.919,0,1,1,3.92,3.874A3.9,3.9,0,0,1,9.267,37.441Zm24.578-2.769a1.1,1.1,0,1,0,0,2.2H47.2a1.1,1.1,0,1,0,0-2.2Zm-10.47,6.508a1.1,1.1,0,1,0,0,2.2h23.74a1.1,1.1,0,1,0,0-2.2Z" data-name="Union 39" fill="#344767" id="Union_39" transform="translate(54.809 50.424) rotate(180)"></path> </svg></span>
                   
                  </div>
                  <div className="py-4 mb-2">
                    <p className="px-2 ">{item.text}</p>
                  </div>
                  <div className="mt-auto underline">
                    <button className="underline px-2 text-blue-500 font-normal">{item.btn}</button>
                  </div>
                </div>
              ))}
          </div>

          <div className="my-2 bg-green-400 px-2 py-4 h-[250px] rounded-md">
            <div className="flex gap-2 w-full h-full px-4">
                <div className=" w-1/3 h-full flex flex-col gap-2">
                    <div onClick={handleWhatsnew} className={`h-1/2 flex items-center px-4 ${whatsnewactive ?'bg-blue-600':'bg-blue-200'}  cursor-pointer`}>
                        <div className="px-2"><img src='https://cdnstatic.nextias.com/assets/images/what_new_icon.png'/></div>
                        <div className="px-2 text-white">WHAT S NEW</div>
                    </div>
                    <div onClick={handlestudentcorner} className={`h-1/2 flex items-center px-4 ${studentcorner ?'bg-blue-600':'bg-blue-200'} cursor-pointer`}>
                        <div className="px-2"><img src='https://cdnstatic.nextias.com/assets/images/student_corner_icon.png'/></div>
                        <div className="px-2 text-white">STUDENT CORNER</div>
                    </div>
                </div>
                <div className="w-2/3  bg-gray-300">
                    {whatsnewactive ? <WhatsNew/>:null}
                    {studentcorner ? <StudentCorner/>:null}
                </div>
            </div>
          </div>
          </div>
        </section>
        {/* Featured Courses */}
      </>
    );
}
export default NextIas;