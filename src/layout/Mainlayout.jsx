import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import useAuth from "../hooks/useAuth";


const Mainlayout = ({ children }) => {
    const { user, logOut } = useAuth();
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        
            <NavLink to={"/"} >
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                    Home
            </Typography>
            </NavLink>
            <NavLink to={"/add-blog"}>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                    Add Blog
            </Typography>
            </NavLink>
            <NavLink to={"/all-blogs"}>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                    All blogs
            </Typography>
            </NavLink>
            <NavLink to={"/featured-blogs"}>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                    Featured Blogs
            </Typography>
            </NavLink>
            <NavLink to={"/wishlist"}>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                    Wishlist
            </Typography>
            </NavLink>
           
        </ul>
    );
    return (
        <div className="max-h-[768px] w-full ">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link to={"/"}>
                    <img
                        className="w-20 h-15"
                        src={logo}
                        alt="logo"
                    />
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        {
                            user?.email ? (
                            <div className="flex items-center">
                                <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                                onClick={logOut}
                            >
                                <span>Logout</span>
                            </Button>
                            </div>
                                ):(
                                    <div className="flex items-center gap-x-1">
                            <Link to={"/login"}>
                            <Button
                                variant="text"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Log In</span>
                            </Button>
                            </Link>
                            <Link to="/register">
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Register</span>
                            </Button>
                            </Link>
                        </div>
                                )
                        }
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    {
                        user?.email ? (
                            <div className="flex items-center">
                                <Button fullWidth variant="gradient" size="sm" className="" onClick={logOut}>
                            <span>Logout</span>
                        </Button>
                            </div>
                        )
                        :(
                        <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Register</span>
                        </Button>
                    </div>
                        )
                    }
                </Collapse>
            </Navbar>
            <div className="mx-auto max-w-screen-xl py-12">
                {children}
            </div>
        </div>
    )
}
Mainlayout.propTypes = {
    children: PropTypes.node
}

export default Mainlayout