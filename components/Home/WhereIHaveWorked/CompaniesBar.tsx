import React, { useState } from 'react'

import { motion } from "framer-motion";

import experience from '../../../Data/experience.json'

const CompaniesBar = props => {
    const [barPosition, setBarPosition] = useState<number>(-8); // Green bar position by the default it's -20px
    const [barAbovePosition, setBarAbovePosition] = useState<number>(0);
    const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = useState<boolean[]>([
        true,
        false,
        false,
        false,
    ]);

    const exp = experience.experience

    const CompanyButton = props => {
        return (
            <button
                onClick={() => {
                    setBarPosition(props.BarPosition);
                    setBarAbovePosition(props.BarAvobePosition);
                    props.setDescriptionJob(props.DescriptionJob);
                    setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
                }}
                className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen]
                        ? "bg-ResumeButtonHover text-AAsecondary"
                        : "text-gray-500"
                    }`}
            >
                {props.CompanyName}
            </button>
        );
    };

    return (
        <div
            id="WhereIhaveWorkedSection"
            className=" flex flex-col md:flex-row  w-screen md:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
        >
            {/* // ? left bar Holder */}
            <div
                className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[172px] translate-y-1 md:w-0.5  
        rounded md:order-1 order-2  "
            >
                {/* // ? animated left bar */}
                <motion.div
                    animate={{ y: barPosition }}
                    // ref={barRef}
                    className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
                ></motion.div>
            </div>
            {/* // ? Companies name as buttons */}
            <div className="flex flex-col md:order-2 order-1 space-y-1 pl-0" >
                <div className="flex flex-row md:flex-col">
                    {exp.map((pos, index) => (
                        <CompanyButton
                            key={'button' + pos.key + index}
                            {...pos.buttonProps}
                            setDescriptionJob={props.setDescriptionJob}
                        />
                    ))}
                </div>
                <div className="block md:hidden w-[515px] h-0.5 rounded bg-gray-500">
                    <motion.div animate={{ x: barAbovePosition }} className="w-[128px] h-0.5 rounded bg-AAsecondary"></motion.div>
                </div>
            </div>
        </div>
    );
};

export default CompaniesBar