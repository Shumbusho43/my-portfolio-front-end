// SideLinks.js
import { useState } from 'react';
import PropTypes from 'prop-types';

const SideLinks = ({ linksData }) => {
    const [activeLink, setActiveLink] = useState(linksData[0].id);

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };

    return (
        <div className="flex">
            <div className="min-w-[25%] max-w-fit">
                <ol className="">
                    {linksData.map((link, index) => (
                        <li
                            key={link.id}
                            className={`p-2 text-2xl cursor-pointer font-medium ${link.id === activeLink ? 'underline' : ''}`}
                            onClick={() => handleLinkClick(link.id)}
                        >
                            <div className='flex items-center text-xl'>
                                <span className='text-gray-500 mr-2'> {`${(index + 1).toString().padStart(2, '0')}.`} </span>
                                {link.name}
                            </div>
                        </li>

                    ))}
                </ol>
            </div>
            <div className="w-3/4 p-4">
                {linksData.map((link) => (
                    <div key={link.id} className={link.id === activeLink ? 'flex justify-around items-center' : 'hidden'}>
                        <div className='w-[50%]'>
                            <img src={link.image} alt="project image" />
                        </div>
                        <div className='w-[40%]'>
                            <h1 className="underline text-2xl font-medium">{link.name}</h1>
                            <p className='text-sm my-2 leading-7'>{link.Description}</p>
                            <a className='my-2 underline text-base font-medium' href={link.Link}>Follow Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

SideLinks.propTypes = {
    linksData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
};

export default SideLinks;
