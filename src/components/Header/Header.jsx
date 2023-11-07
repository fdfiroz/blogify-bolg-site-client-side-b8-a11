import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Carousel className="rounded-xl" autoplay="true" loop="true" autoplayDelay={5000} >
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/g33p2tb/nubelson-fernandes-g-Ts2w7bu3-Qo-unsplash.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Stay curious.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Discover stories, thinking, and expertise from writers on any topic.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to={"/all-blogs"}>
              <Button size="lg" color="white">
                Start reading
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/WHmVjwK/mitchell-luo-FWoq-ld-Wl-NQ-unsplash.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Write your own Blog
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Write your own Blog and help community. Share your knowledge and experience with others.

            </Typography>
            <div className="flex gap-2">
              <Link to={"/add-blog"}>
              <Button size="lg" color="white">
                Start Write
              </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/MBbdzsH/joshua-reddekopp-Sy-Ym-XSDn-J54-unsplash.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Link to={"/all-blogs"}>
              <Button size="lg" color="white">
                Start reading
              </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </div> */}
    </Carousel>
  )
}

export default Header