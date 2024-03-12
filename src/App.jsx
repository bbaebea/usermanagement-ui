
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserCreate from './pages/UserCreate'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <h1>Hello World</h1>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users/create',
          element: <UserCreate />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
