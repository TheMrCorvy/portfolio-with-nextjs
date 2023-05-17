import React from 'react'

import { useRouter } from "next/router";

import Img from "../../smallComp/image/Img";

import ExternalLink from "../../Icons/ExternalLink";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";

const ImageLeft = () => {
    const router = useRouter();

    return (
        <>
            <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
                {/* Left image */}
                <div
                    className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
                >
                    <div className="relative rounded w-full h-full col-span-7 ">
                        <a href="https://www.haircut.ma" target={"_blank"} rel="noreferrer">
                            <div
                                // onClick={}
                                className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                            ></div>
                        </a>

                        <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 ">
                            <span className="text-AAsecondary text-xl">In initiation...</span>
                        </div>

                        <Img src={"/haircut.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
                    </div>
                </div>

                {/* right Content */}
                <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                    {/* background for text in mobile responsive */}
                    <div className="absolute w-full h-full bg-opacity-70 z-0">
                        <div className="relative w-full h-full">
                            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                            <Img src={"/haircut.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
                        </div>
                    </div>
                    <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
                        <div className="w-full"></div>
                        <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">In initiation...</span>
                    </div>
                    <div
                        className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
                    >
                        <div className="flex flex-col space-y-1 md:items-end z-10">
                            <span className="text-AAsecondary text-base">Recent Project</span>
                            <a href="https://www.haircut.ma" target={"_blank"} rel="noreferrer">
                                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                                    Haircut Appointment
                                </span>
                            </a>
                        </div>
                        <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                            <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                                It&apos; a barber shop <span className="text-AAsecondary">appointment scheduling</span> & management
                                software it provides <span className="text-AAsecondary">online scheduling</span>, appointment
                                reminders, <span className="text-AAsecondary">payments</span>, marketing, and much more! Currently in
                                the <span className="text-AAsecondary">Initiation phase</span>.
                            </p>
                        </div>
                        <ul
                            className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
                        >
                            <span className="pr-4 z-10">Appointment</span>
                            <span className="pr-4 z-10">Management</span>
                            <span className="pr-4 z-10">Scheduling</span>
                            <span className="pr-4 z-10">Booking</span>
                        </ul>
                        <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                            <GithubIcon link="https://github.com/hktitof/haircut" />
                            <a href="https://www.haircut.ma" target={"_blank"} rel="noreferrer">
                                <ExternalLink url={""} router={router} />
                            </a>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default ImageLeft