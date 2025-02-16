import React from 'react'
import {education} from "../constants/index.js";

const Education = () => {
    return (
        <section className='c-space my-20'>
            <div className='w-full text-white-600 '>
                <h3 className='head-text text-center pb-5'>My Education</h3>
                <div className= 'flex flex-col justify-center items-center w-full'>
                    <div className="work-content w-full">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5 w-full">
                            {education.map((item, index) => (
                                <div
                                    key={index}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full" src={item.icon} alt="" />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.institution} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
export default Education
