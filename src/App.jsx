import Hero from "../src/Components//Hero";
import Skills from "../src/Components/Skills";
import Projects from "./Projects/Projects";
import Contact from "../src/Components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../src/Components/Layout';
import ReactProjects from "./Projects/ReactProjects";
import LandingProjects from "./Projects/LandingProjects";
import Education from "./Projects/Education";


const App = ()=> {
   const routes = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Hero /> },
        { path: "Projects", element: <Projects /> , children:[
           {index:true , element: <ReactProjects />}, 
           {path: "landingProjects", element: <LandingProjects />},  
           {path: "education", element: <Education />},  

 
        ]},
        { path: "contact", element: <Contact /> },
        { path: "skills", element: <Skills /> },
      ]
    }
   ])
  

  return (
   
<>
        <RouterProvider router={routes} ></RouterProvider>
        </>

  )
}
export default App
