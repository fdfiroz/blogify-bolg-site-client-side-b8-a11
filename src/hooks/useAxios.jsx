import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
const instance = axios.create({
    baseURL: 'https://http://localhost:5000/api/v1',
    withCredentials : true,
    
  });
const useAxios = () => {
  const {logout} = useAuth();
  useEffect(() => {
    instance.interceptors.response.use((response)=> {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      
      return response;
    },  (error) =>{
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if(error.response.status === 401 || error.response.status === 403){
        logout();
      }
      return Promise.reject(error);
    });
  }, []);
  return instance;
}

export default useAxios