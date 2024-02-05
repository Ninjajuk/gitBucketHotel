

const Hotel=()=>{
    return (
      <>
        <div className="w-full bg-[#cee3d9]">
          <div className="max-w-[1200px] mx-auto py-8 ">
            <div className="w-[550px] h-[550px] overflow-hidden mx-auto">
              <img
                className="w-full h-full  object-cover"
                src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1587765440843-6F8UWTE06AZSMX5H03UY/cle_illo_07.gif?format=2500w"
              />
            </div>
            <h1 className="text-center font-serif font-medium py-4 text-3xl mb-4">EVERYONE IS WELCOME!</h1>
          </div>
        </div>


        <div className="w-full bg-[#c99a3b]">
            <div className="max-w-[1200px] mx-auto py-8 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <img src=''/>
                </div>
                <div  className="w-full md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-center leading-8 py-4">BUILT IN 1924, HOTEL CLERMONT HAS BEEN A HOST TO MANY CHARACTERS AND EVENTS — MOST GOOD, SOME BAD, ALL INTERESTING.</h1>
                    <div>
                    <img src='https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588016847932-NTIGGIRRXZCIHZPJA6KF/cle_history_01.jpg?format=2500w'/>
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto py-8 flex flex-col md:flex-row">
                <div className="md:w-1/2">
                <h1>A FEW YEARS BACK, THE PLACE WAS NEARLY RAZED UNTIL SOME VISIONARIES STEPPED IN AND LOVINGLY RESTORED IT, KEEPING ALL OF ITS MEMORIES AND HISTORY INTACT. </h1>
                <img src='https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588091108419-2RDLAJ18T7YK4PV5N0ST/cle_illo_09.png?format=2500w'/>
             
                </div>
               
             <div className="md:w-1/2">
                <div className="w-[300px] h-[250px] mx-auto">
                <img className="w-full h-full object-cover" src='https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588089316172-39VF792R1RUR3P1B4Q0R/cle_photo_03.jpg?format=2500w'/>
             
                </div>
          
             </div>
            </div>
        </div>
      </>
    );
}
export default Hotel;
