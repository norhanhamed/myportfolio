import Hero from "../src/Components/Hero";
import Skills from "../src/Components/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact";
import { createBrowserRouter, HashRouter, RouterProvider } from "react-router-dom";
import Layout from '../src/Components/Layout';
import ReactProjects from "./Components/Projects/ReactProjects";
import LandingProjects from "./Components/Projects/LandingProjects";
import Education from "./Components/Projects/Education";

const routing = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <Hero /> },
      {
        path: "projects", element: <Projects />, children: [
          { index: true, element: <ReactProjects /> },
          { path: "landingProjects", element: <LandingProjects /> },
          { path: "education", element: <Education /> },
        ]
      },
      { path: "contact", element: <Contact /> },
      { path: "skills", element: <Skills /> },
    ]
  }

],
  {
    basename: "/myportfolio",
  }
)
const App = () => {
  return(
  <HashRouter >
    <RouterProvider router={routing} />;
  </HashRouter>
  )
};

export default App
