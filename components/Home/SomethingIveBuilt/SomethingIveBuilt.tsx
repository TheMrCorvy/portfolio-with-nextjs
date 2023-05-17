import Link from "next/link";
import { useRouter } from "next/router";

import Img from "../../smallComp/image/Img";

import ArrowIcon from "../../Icons/ArrowIcon";
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
                            <Link href={"/userdatapuller"}>
                                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                                    YPredict - v1
                                </span>
                            </Link>
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

const ImageLeft = () => {
    const router = useRouter();

    return (
        <>
            {/* // ?  Project  2*/}
            <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
                {/* Left image */}
                <div
                    className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
                >
                    <div className="relative rounded w-full h-full col-span-7 ">
                        <Link href={"/typing"}>
                            <div
                                // onClick={}
                                className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                            ></div>
                        </Link>

                        <Img src={"/typing.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
                    </div>
                </div>

                {/* right Content */}
                <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                    {/* background for text in mobile responsive */}
                    <div className="absolute w-full h-full bg-opacity-70 z-0">
                        <div className="relative w-full h-full">
                            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                            <Img src={"/typing.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
                        </div>
                    </div>

                    <div
                        className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
                    >
                        <div className="flex flex-col space-y-1 md:items-end z-10">
                            <span className="text-AAsecondary text-base">Recent Project</span>
                            <Link href={"/typing"}>
                                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                                    Speed Typing
                                </span>
                            </Link>
                        </div>
                        <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                            <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                                This project aim to help you to improve your <span className="text-AAsecondary"> typing </span> by
                                tracking your progress in <span className="text-AAsecondary"> each round</span> and give you a{" "}
                                <span className="text-AAsecondary"> score</span> based on your typing speed and accuracy through a
                                table of <span className="text-AAsecondary"> statistics</span>.
                            </p>
                        </div>
                        <ul
                            className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
                        >
                            <span className="pr-4 z-10">Algorithms</span>
                            <span className="pr-4 z-10">Framer Motion</span>
                            <span className="pr-4 z-10">Tailwind CSS</span>
                            <span className="pr-4 z-10">TypeScript</span>
                        </ul>
                        <div className="z-10 flex fle-row space-x-5 ">
                            <GithubIcon link="https://github.com/hktitof/Typing" />
                            <ExternalLink url={"typing"} router={router} />
                        </div>
                    </div>
                </div>
            </div></>
    )
}


export default function SomethingIveBuilt() {

    const renderProjects = () => {
        const arr = [1, 2, 3, 4, 5]

        return arr.map((project, index) => {
            if (index % 2 === 0) {
                return <ImageRight key={'projects' + project + index} />
            }

            return <ImageLeft key={'projects' + project + index} />
        })
    }

    return (
        <div
            id="SomethingIveBuiltSection"
            className=" flex flex-col space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
        >
            {/* // ? Title  */}
            <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
                <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
                <div className="flex-none flex-row space-x-2 items-center pr-2">
                    <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
                    <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
                        {" "}
                        Some Things I&apos;ve Built
                    </span>
                </div>
                <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
            </div>

            <div className="flex flex-col space-y-8 md:space-y-28">
                {renderProjects()}
            </div>
        </div>
    );
}
