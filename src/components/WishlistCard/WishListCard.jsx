/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { RiDeleteBin5Line } from "react-icons/ri";

import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const WishListCard = ({ wishlist }) => {
    const { _id, blog_id, title, shortDescription, image, category } = wishlist
    const axios = useAxios();
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ["wishlistDelete"],
        mutationFn: () => {
            return axios.delete(`/delete-wishlist/${_id}`)
        },
        onSuccess: () => {
            toast.success("Wishlist deleted successfully")
            queryClient.invalidateQueries('wishlists')
        }
    })


    return (
        <Card className="w-full max-w-[48rem] flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    {category}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    {shortDescription}
                </Typography>
                <div className="flex justify-between">
                    <Link to={`/blog-details/${blog_id}`} className="inline-block">
                        <Button variant="text" className="flex items-center gap-2">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
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
                    <Tooltip
                        content="Delete Form Wishlist"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <IconButton onClick={() => mutate()} variant="gradient" className="rounded-full">
                            <RiDeleteBin5Line />
                        </IconButton>
                    </Tooltip>

                </div>
            </CardBody>
        </Card>
    );
}



export default WishListCard