import { IconButton } from '@material-tailwind/react'
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const GithubAuth = () => {
  const { githubLogin } = useAuth();
  const navigate = useNavigate()
  const handleGithubLogin = async () => {
    const toastId = toast.loading('Logging in ...');

    try {
      await githubLogin();
      toast.success('Logged in', { id: toastId });
      navigate('/');
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  }
  return (
    <>
    <IconButton onClick={handleGithubLogin} className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
      <FaGithub className="fab fa-github text-lg"></FaGithub>
      </IconButton>
      </>
  )
}

export default GithubAuth