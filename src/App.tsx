import { RouterProvider } from "react-router-dom"
import router from "./router"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <div className="w-full p-16 text-sm">
          <RouterProvider router={router}/>
          <ToastContainer/>
      </div>
  )
}

export default App
