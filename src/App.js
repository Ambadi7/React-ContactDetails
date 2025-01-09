import React from "react";
import Contact from "./components/Contact";
import { data } from "./data/data";

function App() {
  return (
    <div className="bg-sky-400 ">
      <div className="w-full flex justify-center  bg-black text-white h-20 items-center">
        <h1 className="text-2xl md:text-5xl text-semibold">Contact Details</h1>
      </div>
      
      <div className="flex flex-wrap gap-5 justify-center px-10 md:px-24">
      {
        data.map((item) => {
            return (
            <Contact name={item.name} email={item.email} phoneNo={item.phoneNo} image={item.img}/>
            )
          }
        )
      }
      
      </div>
    </div>
  );
}

export default App;
