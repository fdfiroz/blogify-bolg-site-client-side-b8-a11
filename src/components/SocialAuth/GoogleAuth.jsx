import { IconButton } from '@material-tailwind/react'
import { FaGoogle } from 'react-icons/fa'

const GoogleAuth = () => {
  return (
    <>
    <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
      <FaGoogle className="fab fa-github text-lg" ></FaGoogle>
      </IconButton>
      </>
  )
}

export default GoogleAuth