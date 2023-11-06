import { useParams } from "react-router-dom"
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Card, CardBody, CardFooter, CardHeader, IconButton, Input, Typography } from "@material-tailwind/react";
import useAuth from "../hooks/useAuth";
import { FaAngleRight } from "react-icons/fa";

const BlogDetails = () => {
  const param = useParams()
  const axios = useAxios()
  const { user } = useAuth()
  const id = param.id;
  const { data } = useQuery({
    queryKey: ['blog'],
    queryFn: async () => {
      const res = await axios.get(`blog/${id}`)
      return res.data
    }
  })
  console.log(data, user);
  return (
    <>
      <Card className="w-full">
        <CardHeader className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src={data?.image}
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {data?.title}
          </Typography>
          <Typography variant="h6">
            {data?.shortDescription}
          </Typography>
          <Typography>
            {data?.longDescription}
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter>
          {
            user?.email === data?.authorEmail ? (
              <div className="flex gap-4">
                <Input label="Comment" disabled/>
                <IconButton className="rounded-full" disabled>
                  <FaAngleRight ></FaAngleRight>
                </IconButton>
              </div>
            ) : (
              <div className="flex gap-4">
                <Input label="Comment" />
                <IconButton className="rounded-full">
                  <FaAngleRight ></FaAngleRight>
                </IconButton>
              </div>
            )
          }

        </CardFooter>
      </Card>
    </>
  )
}

export default BlogDetails