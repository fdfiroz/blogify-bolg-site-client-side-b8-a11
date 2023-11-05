import { IconButton } from '@material-tailwind/react'
import { FaGithub } from 'react-icons/fa'

const GithubAuth = () => {
  return (
    <>
    <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
      <FaGithub className="fab fa-github text-lg"></FaGithub>
      </IconButton>
      </>
  )
}

export default GithubAuth