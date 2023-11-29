function Navbar() {
    return (
        <nav className="bg-white w-[95%] xl:w-full mx-auto">
            <div className="flex flex-wrap items-center justify-between mx-auto mt-16">
                <div className="w-full md:w-auto" id="navbar-default">
                    <ul className="font-medium flex justify-around p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:bg-white">
                        <li>
                            <a href="#home" className="uppercase text-base hover:underline hover:font-bold" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#portifolio" className="uppercase text-base hover:underline hover:font-bold ">portifolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="uppercase text-base hover:underline hover:font-bold ">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-auto" id="navbar-default">
                    <ul className="font-medium flex justify-around p-4 border-t md:p-0 mt-4 md:flex-row md:border-0 md:space-x-8 md:mt-0 md:bg-white items-center">
                        <li>
                            <a href="https://twitter.com/shumbushodavid" className="text-xl">
                                <i className="ri-twitter-x-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/shumbusho-david-71a244206" className="text-xl">
                                <i className="ri-linkedin-box-line"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Shumbusho43" className="text-xl">
                                <i className="ri-github-line"></i>
                            </a>
                        </li>
                        <li className='pl-10'>
                            <div className="bg-black px-4 h-10 flex items-center justify-center">
                                <i className="ri-moon-clear-line text-white"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
