import axios from "axios";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
const instance = axios.create({
    baseURL: 'https://b8a11-server-side-fdfiroz.vercel.app/api/v1',
    withCredentials : true,
    
  });
const useAxios = () => {
  const {logout} = useAuth();
  instance.interceptors.response.use((response)=> {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    
    return response;
  },  (error) =>{
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error);
    if(error?.response?.status === '401' || error?.response?.status ==='403'){
      toast.error('Unauthorized');
      logout();
    }
    return
  });
  return instance;
}

export default useAxios