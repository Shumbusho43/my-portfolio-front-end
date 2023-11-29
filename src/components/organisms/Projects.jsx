import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Projects = ({ projectsData }) => {
    const [activeLink, setActiveLink] = useState(projectsData[0]._id);

    useEffect(() => {
        // Set the first project as active when the component mounts
        setActiveLink(projectsData[0]._id);
    }, [projectsData]);

    const handleLinkClick = (linkId) => {
        setActiveLink(() => (linkId));
    };

    return (
        <div className="md:flex w-[90%] md:w-[90%] xl:w-full">
            <div className="w-full md:w-[40%] xl:w-1/4">
                <ul className="p-0">
                    {projectsData.map((link, index) => (
                        <li
                            key={link._id}
                            className={`mb-2 p-2 text-lg cursor-pointer ${activeLink === link._id ? 'md:underline font-bold text-black' : 'border-b border-gray-200 md:border-0 dark:border-gray-700'
                                }`}
                        >
                            <button
                                type="button"
                                className="flex items-center justify-between w-full py-5"
                                onClick={() => handleLinkClick(link._id)}
                            >
                                <div className='flex w-full text-start justify-between items-center'>
                                    <div>
                                        <span className='text-gray-500 mr-2'>{`${(index + 1).toString().padStart(2, '0')}.`}</span>
                                        {link.title}
                                    </div>
                                    <div className='text-black md:hidden'>
                                        {activeLink === link._id ? <i className=" ri-arrow-down-s-line"></i> : <i className=" ri-arrow-up-s-line"></i>}
                                    </div>
                                </div>
                            </button>

                            {activeLink === link._id && (
                                <div className="md:hidden">
                                    {/* Display project details for small screens */}
                                    <img src={link.image} alt="project image" className="mt-2 mb-2 w-full" />
                                    <p className='text-sm leading-7'>{link.description}</p>
                                    <div className='my-6'>
                                        <a className='underline text-base font-medium' href={link.Link}>
                                            Follow Link
                                        </a>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full hidden md:block md:w-3/4 p-4">
                {projectsData.map((link) => (
                    <div key={link._id} className={activeLink === link._id ? 'block' : 'hidden'}>
                        {/* Display project details for larger screens */}
                        <div className='md:flex'>
                            <div className='hidden xl:block w-1/2 mx-8'>
                                <img src={link.image} alt="project image" className='w-full' />
                            </div>
                            <div className='w-[90%] xl:w-1/2 ml-auto xl:ml-0 pl-4'>
                                <h1 className="underline text-2xl font-medium">{link.title}</h1>
                                <p className='text-sm my-2 leading-7'>{link.description}</p>
                                <a className='my-2 underline text-base font-medium' href={link.Link}>
                                    Follow Link
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Projects.propTypes = {
    projectsData: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            Link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Projects;
