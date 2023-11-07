import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";



const HomeCard = ({blog}) => {
  const {_id, title, image, author, authorProfilePicture } = blog;
  return (
    <Link to={`/blog-details/${_id}`}> 
    <Card
      shadow={false}
      className="relative grid h-[15rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{backgroundImage: `url(${image})`}} 
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-6 px-6 md:px-12">
        <Typography
          variant="h5"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {title}
        </Typography>
        <Typography variant="h6" className="mb-4 text-gray-400">
          {author}
        </Typography>
        <Avatar
          size="lg"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src={authorProfilePicture}
        />
      </CardBody>
    </Card>
    </Link>
  )
}

export default HomeCard