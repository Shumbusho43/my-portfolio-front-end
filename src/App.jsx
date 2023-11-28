import './App.css'
import { useState } from 'react';
import axios from 'axios';
import image from './assets/david.jpg'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import project1 from './assets/project-1.png'
import project2 from './assets/project-2.png'
import project3 from './assets/project-3.png'
import Divider from './components/atoms/divider'
import Navbar from './components/organisms/navbar'
import SideLinks from './components/organisms/SidebarLinks';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'your-api-endpoint' with the actual endpoint where you want to send the data
      const response = await axios.post('https://my-portfolio-dgjg.onrender.com/api/v1/contactMe', formData);
      // Show a success toast
      toast.success(`Message Sent: ${response.data.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // reset the form after successful submission
      setFormData({
        fullName: '',
        email: '',
        message: '',
      });
    } catch (error) {
      // Show an error toast
      toast.error(`Error: ${error.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const projects =
    [
      {
        id: 1,
        name: "Project 1",
        image: project1,
        Description: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Placeat perferendis aliquam, 
        aspernatur autem corrupti illo provident quia recusandae quis architecto,
        doloremque nulla impedit reprehenderit dolorum. Dicta pariatur
        hic eveniet rerum.
        `,
        Link: "https://remixicon.com/"
      },
      {
        id: 2,
        name: "Project 2",
        image: project2,
        Description: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Placeat perferendis aliquam, 
        aspernatur autem corrupti illo provident quia recusandae quis architecto,
        doloremque nulla impedit reprehenderit dolorum. Dicta pariatur
        hic eveniet rerum.
        `,
        Link: "https://remixicon.com/"
      },
      {
        id: 3,
        name: "Project 3",
        image: project3,
        Description: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Placeat perferendis aliquam, 
        aspernatur autem corrupti illo provident quia recusandae quis architecto,
        doloremque nulla impedit reprehenderit dolorum. Dicta pariatur
        hic eveniet rerum.
        `,
        Link: "https://remixicon.com/"
      }
    ]
  return (
    <div className='max-w-screen-xl mx-auto overflow-x-hidden'>
      <Navbar />
      <Divider customClass={'my-8 border-black'} />
      <div className='flex justify-center items-center py-5 w-[95%] xl:w-full mx-auto' id='home'>
        <div className='w-1/3 vh-30 pr-10 hidden lg:block '>
          <img src={image} className='' alt="david's image" />
        </div>
        <div className='w-[90%] lg:w-2/3 md:mx-6'>
          <p className='text-2xl my-6'>
            {'<'}Hi,my name is <strong>David Shumbusho</strong> /{'>'}
          </p>
          <p className='text-xl leading-9'>
            I am a senior software developer. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
            It has survived not only five centuries, but also the leap
            into electronic
            typesetting, remaining essentially unchanged.
          </p>

          <p className='mt-8 text-xl'>{`Don't take my word for it, check out`}
            <a href="#portifolio" className='underline font-bold mx-4'>my portifolio</a>
          </p>
          <div className='flex flex-col lg:flex-row bg-black py-8 text-white justify-between px-4 lg:px-12 mt-8 '>
            <div className='flex items-center'><h1 className='font-bold text-5xl mx-4'>5+</h1> <span className='text-xl'>Years of experience</span></div>
            <Divider customClass={'my-6 border-white xl:hidden'} />
            <div className='flex items-center'><h1 className='font-bold text-5xl mx-4'>10+</h1> <span className='text-xl'>successful projects</span></div>
          </div>
        </div>
      </div>
      <Divider customClass={'my-16 border-black'} />

      {/* My portifolio */}
      <div className="py-8" id='portifolio'>
        <h1 className='uppercase text-3xl mb-12 text-center font-bold'>my portifolio</h1>
        <div className="flex justify-center">
          <SideLinks linksData={projects} />
        </div>
      </div>
      <Divider customClass={'my-16 border-black'} />

      {/* Contact me form */}
      <div className='mx-auto w-full md:w-1/2' id='contact'>
        <div className='text-center mb-16'>
          <h1 className='uppercase font-bold my-4 text-3xl'>Contact Me</h1>
          <p className='capitalize text-xl'>{`Let's Work Together`}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row justify-center my-4 w-full">
            <input
              type="text"
              name="fullName"
              placeholder="Full Names"
              value={formData.fullName}
              onChange={handleChange}
              className="mx-auto border-gray-600 outline-0 p-4 lg:mr-2 border border-1 w-[80%] md:w-full lg:w-[48.5%]"
            />
            <input
              type="text"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="mx-auto border-gray-600 outline-0 p-4 lg:ml-2 border border-1 w-[80%] mt-4 md:w-full lg:mt-0 lg:w-[48.5%]"
            />
          </div>
          <div className="w-[80%] md:w-full mx-auto">
            <textarea
              name="message"
              placeholder="Write something ..."
              value={formData.message}
              onChange={handleChange}
              className="min-h-[10vh] outline-0 border-gray-600 p-4 border border-1 w-full h-[20vh] my-3"
              id="message"
            ></textarea>
            <button
              type="submit"
              className="bg-black hover:bg-gray-900 text-center w-full px-4 py-6 my-4 text-xl text-white"
            >
              Submit
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>

      {/* Footer */}

      <div className='text-center mt-28 p-4'>
        info@mistico.me &copy;
        David Shumbusho.
        All rights reserved
      </div>
    </div>
  )
}

export default App
