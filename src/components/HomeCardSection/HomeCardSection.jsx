import { useQuery } from "@tanstack/react-query"
import useAxios from "../../hooks/useAxios"
import HomeCard from "./HomeCard"
import { Typography } from "@material-tailwind/react"

const HomeCardSection = () => {
    const axios = useAxios()

    const {data, isSuccess} = useQuery({
        queryKey : ["recent-blogs"],
        queryFn : async () => {
            const response = await axios.get("/blogs?sortField=dateCreated&sortOrder=desc")
            return response.data?.slice(0, 6)
        }
    })
  return (
    <div>
        <Typography variant="h2" className="my-6 px-10 ">
            Recent Blogs
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {
           isSuccess && data?.map((blog) => (
                <HomeCard key={blog._id} blog={blog} />
            ))
        }
    </div>
    </div>
  )
}

export default HomeCardSection