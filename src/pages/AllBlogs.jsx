import { useQuery } from "@tanstack/react-query"
import BlogCard from "../components/BlogCard/BlogCard"
import useAxios from "../hooks/useAxios"
import Loading from "../components/Loading/Loading"
const AllBlogs = () => {
  const axios = useAxios()
  const { isLoading, data } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () =>{
      const res = await axios.get('/blogs')
      return res.data
  }})
  console.log(data)
  return (
    <>
    {
      isLoading ? <Loading /> : (
        <div className="grid grid-cols-3 gap-6 mb-6 ">
      {
        data.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))
      }
    </div>
      )
    }
    </>
  )
}

export default AllBlogs