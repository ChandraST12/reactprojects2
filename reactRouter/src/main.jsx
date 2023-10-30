import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import Contact from './components/Contact/Contact'
import './index.css'
import Github , { githubInfoLoader } from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {path:"",
//       element:<Home/>
//     },
//       {
//         path:'About',
//         element:<About/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={ <App/>}>
     <Route path='' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='user/:userid' element={<User/>}/>
     <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
