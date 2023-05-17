import React from 'react'

import { useRouter } from "next/router";

import Img from "../../smallComp/image/Img";

import ExternalLink from "../../Icons/ExternalLink";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";

import { Project } from '../../../Data/dataTypes'

const ImageRight = ({ project }: { project: Project }) => {
    const router = useRouter();

    const { name, imageUrl, isRecent, inProgress, description, tags, links } = project

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
                        <a href={links.webPage} target="_blank" rel="noreferrer">
                            <div
                                className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                            ></div>
                        </a>

                        {inProgress && (
                            <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 ">
                                <span className="text-AAsecondary text-xl">In progress...</span>
                            </div>
                        )}

                        <Img src={imageUrl} alt={name + " Screen shot"} className={`w-full rounded h-full `} />
                    </div>
                </div>

                {/* right Content */}
                <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                    {/* background for text in mobile responsive */}
                    <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                        <div className="relative w-full h-full">
                            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                            <Img src={imageUrl} alt={name + " Screen shot"} className={`w-full h-full`} />
                        </div>
                    </div>

                    {inProgress && (
                        <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
                            <div className="w-full"></div>
                            <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">In progress...</span>
                        </div>
                    )}

                    <div
                        className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
                    >
                        <div className="flex flex-col space-y-1  z-10">
                            {isRecent && <span className="text-AAsecondary text-base">Recent Project</span>}
                            <a href={links.webPage} target={"_blank"} rel="noreferrer">
                                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                                    {name}
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
                            {tags.map((tag, i) => (
                                <span className="pr-4 z-10" key={name + ' ' + tag + '-' + i}>{tag}</span>
                            ))}
                        </ul>
                        <div className="z-10 flex fle-row space-x-5 ">
                            <GithubIcon link={links.github} />
                            <a href={links.webPage} target={"_blank"} rel="noreferrer">
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