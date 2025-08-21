import { RouterProvider } from "react-router-dom"
import router from "./router"

function App() {

  return (
      <div className="w-full p-16 text-sm">
          <RouterProvider router={router}/>
      </div>
  )
}

export default App
