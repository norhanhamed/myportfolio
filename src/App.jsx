import Hero from "../src/Components/Hero";
import Skills from "../src/Components/Skills";
import Projects from "./Components/Projects/Projects";
import {  createHashRouter, RouterProvider } from "react-router-dom";
import Layout from '../src/Components/Layout';
import ReactProjects from "./Components/Projects/ReactProjects";
import LandingProjects from "./Components/Projects/LandingProjects";
import Education from "./Components/Projects/Education";

const routing = createHashRouter ([
  { path: "/", element: <Layout />, children: [
      { index: true, element: <Hero /> },
      {
        path: "projects", element: <Projects />, children: [
          { index: true, element: <ReactProjects /> },
          { path: "landingProjects", element: <LandingProjects /> },
          { path: "education", element: <Education /> },
        ]
      },
      { path: "skills", element: <Skills /> },
    ]
  }
],
)
const App = () => {
  return <RouterProvider router={routing} />;
};

export default App
