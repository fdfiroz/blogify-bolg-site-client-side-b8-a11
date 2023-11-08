import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios"
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const AddBlog = () => {
 const axios = useAxios();
const {user} = useAuth()
const [title, setTitle] = useState("")
const [image, setImage] = useState("")
const [category, setCategory] = useState("")
const [shortDescription, setShortDescription] = useState("")
const [longDescription, setLongDescription] = useState("")

// console.log(title, image, category, shortDescription, longDescription);


const queryClient = useQueryClient()

  const {mutate} = useMutation({
    mutationKey:["addBlog"],
    mutationFn: (blog) => {
      return axios.post("/create-blog", blog)
    }, 
    onSuccess: () => {
      toast.success("Blog added successfully")
      queryClient.invalidateQueries({ queryKey: ['recent-blogs', 'blogs'] })
    }

  })
  const handelSubmit = (e) =>{
    e.preventDefault()
    
    if(!title || !image || !category || !shortDescription || !longDescription ){
      toast.error("Please fill all the fields")
      return 
    } 
    
  const blog ={
    title,
    image,
    category,
    shortDescription,
    longDescription,
    author: user?.displayName,
    authorEmail:user?.email,
    authorProfilePicture: user?.photoURL 
  }
    mutate(blog)
    e.target.reset()
  }
  return (
    <>
    <Helmet>
      <title>Add Blog</title>
    </Helmet>
    <div className=" my-6">
      <Card color="transparent" shadow={false} className="w-96 mx-auto">
    <Typography variant="h4" color="blue-gray">
      Add Blog
    </Typography>
    <Typography color="gray" className="mt-1 font-normal">
      Nice to meet you! Enter your blogs.
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        Blog Title
        </Typography>
        <Input
          onBlur={(e)=> setTitle(e.target.value.trim())}
          size="lg"
          placeholder="Blog Title"
          type="text"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        Image URL
        </Typography>
        <Input
          onBlur={(e)=> setImage(e.target.value.trim())}
          size="lg"
          type="url"
          placeholder="Image URL"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        Category
        </Typography>
        <Select
          onChange={(value) => setCategory(value)}
          variant="outlined"
          label="Category"
          
        >
          <Option value="html">HTML</Option>
          <Option value="css">CSS</Option>
          <Option value="javaScript">JavaScript</Option>
          <Option value="react">React</Option>
          <Option value="vue">Vue</Option>
          <Option value="angular">Angular</Option>
          <Option value="svelte">Svelte</Option>
        </Select>
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        Short Description 
        </Typography>
        <Input
          type="text"
          onBlur={(e)=> setShortDescription(e.target.value.trim())}
          size="lg"
          placeholder="Short Description"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        Long Description 
        </Typography>
        <div className="w-96">
      <Textarea   
        onBlur={(e)=> setLongDescription(e.target.value.trim())}        
        size="lg"
        type="text"
        placeholder="Long Description"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
         />
          </div>
        
      </div>
      
      <Button onClick={handelSubmit} className="mt-6" fullWidth>
        Add Blog
      </Button>
    </form>
  </Card>
    </div>
    </>
  )
}

export default AddBlog