import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";


const UpdateBlog = () => {
  const param = useParams()
  const { user } = useAuth()

  const id = param.id;
  const [blogUpdate, setBlogUpdate] = useState({
    title: "",
    image: "",
    category: "",
    shortDescription: "",
    longDescription: ""
  })
  




  const axios = useAxios()
  const { isSuccess, isLoading, data } = useQuery({
    queryKey: ['updateblog'],
    queryFn: async () => {
      const res = await axios.get(`/blog/${id}`)
      return res.data
    }
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ["updateBlog"],
    mutationFn: (blog) => {
      return axios.patch(`/update`, blog)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recent-blogs', 'blogs'] })
      toast.success("Blog added successfully")
    }

  })
  useEffect(()=>{
  
    },[])

  useEffect(() => {
    if (isSuccess) {
      const { author, authorEmail, authorProfilePicture, ...blog} = data
      setBlogUpdate(blog)
    }

  }, [isSuccess])
  const onChange = (e) => {
    setBlogUpdate({
      ...blogUpdate,
      [e.target.name]: e.target.value
    })
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    // console.log(title, image, category, shortDescription, longDescription)
    if (Object.values(blogUpdate).includes("")) {
      toast.error("Please fill all the fields")
      return
    }

    const blog = {
      ...blogUpdate,
      author: user?.displayName,
      authorEmail: user?.email,
      authorProfilePicture: user?.photoURL
    }
    mutate(blog)
  }

  return (
    <>
    <Helmet>
      <title>Update Blog</title>
    </Helmet>
    <Card color="transparent" shadow={false} className="w-96 mx-auto">
      <Typography variant="h4" color="blue-gray">
        Update Blog
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Update your blogs.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Blog Title
          </Typography>
          <Input
            onChange={onChange}
            value={blogUpdate?.title}
            type="text"
            name="title"
            size="lg"
            placeholder="Blog Title"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Image URL
          </Typography>
          <Input
            onChange={onChange}
            value={blogUpdate?.image}
            type="text"
            name="image"
            size="lg"
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
            onChange={(value) => {
              console.log(value)
              const e = {
                target: {
                  name: "category",
                  value: value
                }
              }
              onChange(e)
            }}
            value={blogUpdate?.category}
            name="category"
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
            onChange={onChange}
            value={blogUpdate?.shortDescription}
            type="text"
            name="shortDescription"
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
              onChange={onChange}
              value={blogUpdate?.longDescription}
              name="longDescription"
              size="lg"
              placeholder="Long Description"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

        </div>

        <Button onClick={handelSubmit} className="mt-6" fullWidth>
          Update Blog
        </Button>
      </form>
    </Card></>
  )
}

export default UpdateBlog