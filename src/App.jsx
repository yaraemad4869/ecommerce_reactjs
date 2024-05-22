import './App.css'
import routes from './routes';
import { RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
