import { Link, useParams } from "react-router-dom"
import useAxios from "../hooks/useAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, IconButton, Input, Typography } from "@material-tailwind/react";
import useAuth from "../hooks/useAuth";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../components/Loading/Loading";
const BlogDetails = () => {
  const param = useParams()
  const axios = useAxios()
  const { user } = useAuth()
  const queryClient = useQueryClient()

  const [comment, setComment] = useState("")
  const id = param.id;
  const { data, isLoading } = useQuery({
    queryKey: ['blog'],
    queryFn: async () => {
      const res = await axios.get(`blog/${id}`)
      return res.data
    }
  })

  const { mutate } = useMutation({
    mutationKey: ["comments"],
    mutationFn: (comment) => {
      return axios.patch(`/blogs/${id}/comments`, comment)
    },
    onSuccess: () => {
      queryClient.invalidateQueries('blog')
      toast.success("Comment added successfully")
    }
  })
  const handelSubimt = (e) => {
    e.preventDefault()
    if (!comment) {
      toast.error("Please input a comment")
      return
    }
    const commentData = {
      commentText: comment,
      commenterName: user?.displayName,
      commenterProfilePicture: user?.photoURL,

    }
    mutate(commentData)
    e.target.reset()
  }

  console.log(data?.comments, data, user);
  return (
    <>
      {
        isLoading ? <Loading /> : (<Card className="w-full">
          <CardHeader className="mb-12 overflow-hidden">
            <img
              alt="nature"
              className="h-[32rem] w-full object-cover object-center"
              src={data?.image}
            />
          </CardHeader>
          <CardBody>
          <div className="flex mb-2">
          <Chip variant="gradient" value={data?.category} />
          </div>
            <div className="flex items-center justify-between">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {data?.title}
            </Typography>
            {
              user?.email === data?.authorEmail&& <Link to={`/update-blog/${id}`}><Button variant="gradient" size="sm">Update Blog</Button></Link>
            }
            
            </div>
            <Typography variant="h6">
              {data?.shortDescription}
            </Typography>
            <p className="max-w-full">
              {data?.longDescription}
            </p>
          </CardBody>
          <CardFooter>
            <div>
              {
                user?.email === data?.authorEmail ? (
                  <div className="flex gap-4">
                    <Input label="Comment" disabled />
                    <IconButton className="rounded-full" disabled>
                      <FaAngleRight ></FaAngleRight>
                    </IconButton>
                  </div>
                ) : (
                  <form className="flex gap-4">
                    <Input onBlur={(e) => setComment(e.target.value)} name="comment" label="Comment" />
                    <IconButton onClick={handelSubimt} className="rounded-full">
                      <FaAngleRight ></FaAngleRight>
                    </IconButton>
                  </form>
                )
              }
            </div>
            <div className="flex flex-col gap-6 my-4 ">
            {
              data.comments?.map((comment, index) => (
                <Card key={index} className="flex flex-row items-center gap-6 p-4">
              <div>
                <Avatar src={comment.commenterProfilePicture} alt="avatar" withBorder className="object-cover overflow-hidden" />
                <Typography variant="small">
                  {comment.commenterName}
                </Typography>
              </div>
              <Typography>
                {comment.commentText}
              </Typography>
            </Card>
              ))
            }
            </div>
          </CardFooter>

        </Card>)
      }
    </>
  )
}

export default BlogDetails