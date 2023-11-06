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
} from "@material-tailwind/react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
    const {_id, title, shortDescription, image, category} = blog;
    return (
        <Card className="max-w-[24rem] overflow-hidden">
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
                <Typography variant="h4" color="blue-gray">
                    {title}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {shortDescription}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                    <IconButton variant="gradient">
                        <FaHeart className="fas fa-heart" />
                    </IconButton>
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