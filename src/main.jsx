import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Intro from "./Pages/Intro.jsx"
import Email from "./Pages/Email.jsx"
import Skills from "./Pages/Skills.jsx"
import Project from "./Pages/Project.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Intro",
    element: <Intro/>,
  },
  {
    path: "/Email",
    element: <Email/>,
  },
  {
    path: "/Skills",
    element: <Skills/>,
  },
  {
    path: "/Project",
    element: <Project/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <RouterProvider router={router}/>
    </PrismicProvider>
  </React.StrictMode>,
)
