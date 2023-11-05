import { Outlet } from "react-router-dom"
import Mainlayout from "./layout/Mainlayout"

const App = () => {
  return (
    <>
      <Mainlayout>
      <Outlet />
      </Mainlayout>
    
    </>
  )
}

export default App