import './App.css'
import image from './assets/david.jpg'
import project1 from './assets/project-1.png'
import project2 from './assets/project-2.png'
import project3 from './assets/project-3.png'
import ProjectList from './components/molecules/ProjectsList'
import Tabs from './components/organisms/Tabs'
import Divider from './components/atoms/divider'
import Navbar from './components/organisms/navbar'

function App() {
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
      <div className="py-10" id='portifolio'>
        <h1 className='uppercase text-3xl text-center font-bold'>my portifolio</h1>
        <div className="flex justify-center">
          <Tabs tabsData={[
            {
              id: 1,
              label: 'Project (20)',
              content: <ProjectList projects={projects} />
            },
            {
              id: 2,
              label: 'Web Dev (2)',
              content: <ProjectList projects={projects} />
            },
            {
              id: 3,
              label: 'Mobile (3)',
              content: <ProjectList projects={projects} />
            },
          ]} />
        </div>
      </div>
      <Divider customClass={'my-16 border-black'} />

      {/* Contact me form */}
      <div className='mx-auto w-full md:w-1/2' id='contact'>
        <div className='text-center mb-16'>
          <h1 className='uppercase font-bold my-4 text-3xl'>Contact Me</h1>
          <p className='capitalize text-xl'>{`Let's Work Together`}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center my-4 w-full">
          <input type="text" placeholder='Full Names' className=' mx-auto border-gray-600 outline-0 p-4 lg:mr-2  border border-1 w-[80%] md:w-full lg:w-[48.5%]' />
          <input type="text" placeholder='Email address' className='mx-auto border-gray-600 outline-0 p-4 lg:ml-2 border border-1 w-[80%] mt-4 md:w-full lg:mt-0 lg:w-[48.5%]' />
        </div>
        <div className='w-[80%] md:w-full mx-auto'>
          <textarea name="message" placeholder='Write something ...' className='min-h-[10vh] outline-0 border-gray-600 p-4 border border-1 w-full h-[20vh] my-3' id="message"></textarea>
          <button type="submit" className="bg-black hover:bg-gray-900 text-center w-full px-4  py-6  my-4 text-xl text-white">Submit</button>
        </div>
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
