import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Ayuslider from "../components/Ayuslider";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/skills',
                element: <Skills/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/more',
                element: <Ayuslider/>
            }

        ]
    }
])

export default router