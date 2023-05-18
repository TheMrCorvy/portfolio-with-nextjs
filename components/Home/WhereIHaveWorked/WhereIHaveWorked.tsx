import { useState } from "react";

import ArrowIcon from "../../Icons/ArrowIcon";

import ShowPosition from "./ShowPosition";
// import { experience } from './Descriptions/experience'
import experience from './../../../Data/experience.json'
import CompaniesBar from './CompaniesBar'

export default function WhereIHaveWorked() {

    // ? INFORMATIONAL control the green position using px,
    // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
    const exp = experience.experience
    const [positionKey, setpositionKey] = useState(exp[0].key);

    const GetDescription = () => {

        const pos = exp.map(e => e.key).indexOf(positionKey)

        return <ShowPosition position={exp[pos]} />
    };

    return (
        <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
            {/* // ? Title "Where I've Worked" */}
            <section className="flex flex-row items-center">
                <div className="flex flex-row items-center">
                    <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
                    <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 02.</span>
                </div>

                <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
                    Where I&apos;ve Worked
                </span>
                <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
            </section>
            {/* // ? Where I've Worked Content section */}
            <section
                className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center md:justify-center items-center md:items-start"
            >
                {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
                <CompaniesBar setDescriptionJob={setpositionKey} />
                {/* // ? Description for The job */}
                {GetDescription()}
            </section>
        </div>
    );
}

