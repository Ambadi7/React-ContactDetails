import React from 'react'

const Contact = (props) => {
  return (
    <div className=''>
       
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={props.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">Name : {props.name}</h2>
                        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">ph no :{props.phoneNo}</h2>
                        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">email : {props.email}</h2>
                        
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Contact