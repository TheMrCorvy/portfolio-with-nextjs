import ArrowIcon from "../../../components/Icons/ArrowIcon";

export default function AboutMe() {
    const technologies = [
        ["React JS", "React Native", "JavaScript (ES6+)", "Node.JS", 'PHP', 'MongoDB'],
        ["Next.JS", "Material UI", "TypeScript", "Express JS", 'Laravel', 'MySQL'],
    ];

    return (
        <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col justify-center text-center items-center py-20 bg-AAprimary">
            {/* // ? 0.1 About Me */}
            <div
                className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] justify-center"
            >
                <div className="flex flex-row items-center justify-center text-center">
                    <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
                    <div className="flex flex-row  items-center mr-4">
                        <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
                        <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
                        <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
                            About Me
                        </span>
                    </div>
                    <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
                </div>
                {/* // ? Paragraphs */}

                <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 justify-center">
                    <div className="w-full md:w-9/12 space-y-4 sm:text-base text-sm ">
                        <div className="font-Header ">
                            <span className="text-gray-400  tracking-wide">
                                Hello! My name is <span className="text-AAsecondary">Gonzalo</span> and I enjoy solving problems and
                                creating apps that live on the internet. My interest in computer science started with the
                                {' '}<span className="text-AAsecondary">curiosity</span>{' '}
                                of how the things work, that&apos;s what initially led me to study programming, and it&apos;s still what
                                motivates me to conitnue <span className="text-AAsecondary">investigating</span> about new technology.
                            </span>
                        </div>
                        <div className="font-Header tracking-wide">
                            <span className="text-gray-400  ">
                                Fast-forward to today, I&apos;ve learn and had the opportunity to use a lot of different technologies
                                from multiple areas of programming. I&apos;ve also been working as a{' '}
                                <span className="text-AAsecondary">freelance web developer</span> for almost
                                two years, and now I&apos;m looking for <span className="text-AAsecondary">new challenges</span>{' '}
                                and <span className="text-AAsecondary">opportunities</span> to continue growing as a professional and
                                acquire more experience in this field.
                            </span>
                        </div>

                        <div className="font-Header tracking-wide">
                            <span className="text-gray-400">Here are a few technologies I&apos;ve been working with recently:</span>
                        </div>
                        <div className="font-Header tracking-wide flex flex-row space-x-16 justify-center" style={{ flexWrap: 'wrap' }}>
                            <div className="flex flex-row space-x-2 items-center">
                                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                                    {technologies[0].map((tech, index) => {
                                        return (
                                            <div key={index} className="flex flex-row items-center space-x-2">
                                                <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                                                <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-row space-x-2 items-center">
                                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                                    {technologies[1].map((tech, index) => {
                                        return (
                                            <div key={index} className="flex flex-row items-center space-x-2">
                                                <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                                                <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
