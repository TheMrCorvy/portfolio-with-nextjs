import React from 'react'

import { useRouter } from "next/router";

import Img from "../../smallComp/image/Img";

import ExternalLink from "../../Icons/ExternalLink";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";

const ImageRight = () => {
    const router = useRouter();

    return (
        <>
            {/* // ?  Project 1 */}
            <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
                {/* Left image */}
                <div
                    className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
                >
                    <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                        <a href={"https://ubiquitous-bublanina-da84ec.netlify.app/"} target="_blank" rel="noreferrer">
                            <div
                                className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                            ></div>
                        </a>
                        <Img src={"/img/YPredict-v1.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
                    </div>
                </div>

                {/* right Content */}
                <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                    {/* background for text in mobile responsive */}
                    <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                        <div className="relative w-full h-full">
                            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                            <Img src={"/hackme.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
                        </div>
                    </div>

                    <div
                        className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
                    >
                        <div className="flex flex-col space-y-1  z-10">
                            <span className="text-AAsecondary text-base">Recent Project</span>
                            <a href="https://www.haircut.ma" target={"_blank"} rel="noreferrer">
                                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                                    Haircut Appointment
                                </span>
                            </a>
                        </div>
                        <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                            <p className="text-gray-300 md:text-gray-400 text-left ">
                                I had the opportunity to lead the development of a token project, which aimed to create a
                                decentralized ecosystem for peer-to-peer transactions. Overseeing the planning and development of the
                                project, including the <span className="text-AAsecondary"> design</span> and implementation of the{" "}
                                <span className="text-AAsecondary"> smart contract</span> and{" "}
                                <span className="text-AAsecondary"> blockchain technology</span>. Here i share with you{" "}
                                <span className="text-AAsecondary"> YPredict - v1 </span> for the private sale.
                            </p>
                        </div>
                        <ul
                            className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
                        >
                            <span className="pr-4 z-10">Token</span>
                            <span className="pr-4 z-10">Smart contract</span>
                            <span className="pr-4 z-10">Blockchain</span>
                            <span className="pr-4 z-10">Nextjs</span>
                            <span className="pr-4 z-10">Token tracking</span>
                        </ul>
                        <div className="z-10 flex fle-row space-x-5 ">
                            <GithubIcon link="https://github.com/hktitof/Ypredict" />
                            <a href="https://ubiquitous-bublanina-da84ec.netlify.app/" target={"_blank"} rel="noreferrer">
                                <ExternalLink url={""} router={router} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageRight