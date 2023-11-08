import { useQuery } from "@tanstack/react-query"
import BlogCard from "../components/BlogCard/BlogCard"
import useAxios from "../hooks/useAxios"
import Loading from "../components/Loading/Loading"
import { Card, Input, Option, Select } from "@material-tailwind/react"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
const AllBlogs = () => {
  const axios = useAxios()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  
   console.log(category, search)
  const { isLoading, data } = useQuery({
    queryKey: ['blogs', search, category],
    queryFn: async () =>{
      const res = await axios.get(`/blogs?search=${search}&category=${category}`)
      return res.data
  }})
  console.log(data)
  return (
    <>
    <Helmet>
      <title>All Blogs</title>
    </Helmet>
    <div className="w-full mx-auto">
      <Card className="flex flex-col md:flex-row gap-10 justify-around items-center my-4 border  p-6">
        <form className="w-full">
        <Input label="Search" onChange={(e)=> setSearch(e.target.value)}  icon={<FaSearch  className="fas fa-heart" />} />
        </form>
      <Select onChange={(value) => setCategory(value)}
          
         variant="standard" 
         className="px-4" 
         label="Select Category">
          <Option value="html">HTML</Option>
          <Option value="css">CSS</Option>
          <Option value="javaScript">JavaScript</Option>
          <Option value="react">React</Option>
          <Option value="vue">Vue</Option>
          <Option value="angular">Angular</Option>
          <Option value="svelte">Svelte</Option>
      </Select>
      </Card>
    {
      isLoading ? <Loading /> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 justify-items-center ">
      {
        data.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))
      }
    </div>
      )
    }
    </div>
    </>
  )
}

export default AllBlogs