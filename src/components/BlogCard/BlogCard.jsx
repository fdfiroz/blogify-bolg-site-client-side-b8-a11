/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Chip,
    Button,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const BlogCard = ({ blog }) => {
    const { _id, title, image, shortDescription, category } = blog;
    const axios = useAxios();
    const { user } = useAuth()
    const { mutate } = useMutation({
        mutationKey: ["wishlist"],
        mutationFn: (wishlist) => {
            return axios.post("/create-wishlist", wishlist)
        },
        onSuccess: () => {
            toast.success("Wishlist added successfully")
        }
    })
    const handelWishlist = () => {
        if (!user) {
            toast.error("Please login first")
            return
        }

        const wishlist = {
            blog_id: _id,
            title,
            shortDescription,
            image,
            category,
            user: user.email
        }
        mutate(wishlist)
    }

    return (
        <Card className="max-w-[24rem] overflow-hidden justify-around ">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={image}
                    alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <div className="flex mb-2">
                    <Chip variant="gradient" value={category} />
                </div>
                {title.length > 38 ? (
                    <Typography variant="h5" color="blue-gray" className="overflow-hidden">
                        {title.slice(0, 37)}
                    </Typography>
                ) : (<Typography variant="h5" color="blue-gray" className="overflow-hidden">
                    {title}
                </Typography>)
                }
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {shortDescription}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                    <Tooltip
                        content="Add to Your Wishlist"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <IconButton onClick={handelWishlist} variant="gradient">
                            <FaHeart className="fas fa-heart" />
                        </IconButton>
                    </Tooltip>

                </div>
                <Link to={`/blog-details/${_id}`} className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}


export default BlogCard;