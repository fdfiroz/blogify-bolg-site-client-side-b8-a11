import { Outlet } from "react-router-dom"
import Mainlayout from "./layout/Mainlayout"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
      <Mainlayout>
      <Outlet />
      </Mainlayout>
      <Footer/>
    </>
  )
}

export default App