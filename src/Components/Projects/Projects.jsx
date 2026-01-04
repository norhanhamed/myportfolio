import { Link, Outlet } from 'react-router-dom';


export default function Projects() {
  return (
    <section className='flex flex-col items-center justify-between'>
      <h2 className="text-3xl font-semibold mb-10 "> All Projects </h2>
      <ul className='flex gap-4 items-center text-xl text-gray-100  '>
        <li className=' hover:scale- '>
          < Link to='' > React</Link>
        </li>
        <li>
          < Link to='landingProjects' > landing page</Link>
        </li>
        <li>
          < Link to='education' >  Education</Link>
        </li>
      </ul>
      <div className=' mt-20'>
        <Outlet />
      </div>



    </section>
  );
}
