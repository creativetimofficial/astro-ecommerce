import React from "react";

import {
  Avatar,
  Button,
  Card,
  IconButton,
  MobileNav,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Navbar,
  Typography,
  Input,
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";
import ThemeProvider from "./components/theme-provider";
import { Bars3Icon, XMarkIcon, ClockIcon, ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const menuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavItem({ children }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="font-normal transition-colors hover:text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export default function HeroSectionFour() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  
  const [openMenu, setOpenMenu] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  return (
    <ThemeProvider>
      <Navbar
        className="relative z-50 border-x-0 border-t-0 !border-b !border-blue-gray-50"
        shadow={false}
        fullWidth
      >
        <div className="container mx-auto flex items-center">
          <Typography color="blue-gray" className="!mb-0 !font-bold">
            Material Tailwind PRO
          </Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Resources</NavItem>
            <NavItem>Pricing</NavItem>
          </ul>
          <div className="ml-auto hidden gap-2 lg:flex">
            <Button variant="text" size="sm">
              login
            </Button>
            <Button size="sm">sign up</Button>
          </div>
          <IconButton
            size="sm"
            variant="text"
            color="blue-gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <MobileNav open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Resources</NavItem>
              <NavItem>Pricing</NavItem>
            </ul>
            <div className="mt-8 mb-4 flex gap-2">
              <Button variant="outlined" size="sm" fullWidth>
                login
              </Button>
              <Button size="sm" fullWidth>
                sign up
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
      <header className="h-full min-h-screen w-screen bg-white px-4">
        <div className="relative mx-auto grid place-items-center rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 py-24 text-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1680070568461-0342ba529988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')`}}>
          <span className="absolute top-0 left-0 w-full h-full rounded-3xl bg-center bg-cover opacity-60 bg-gradient-to-tl from-gray-900 to-slate-800"></span>
          <Typography
            variant="h1"
            color="white"
            className="!mb-8 !leading-tight"
          >
            Autumn Collection is here
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-10 w-full opacity-75 md:w-10/12 lg:w-7/12"
          >
            The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?
          </Typography>
          <div className="w-full md:w-8/12 lg:w-5/12">
            <div className="flex md:flex-row">
              <Button
                color="white"
                variant="outlined"
                className="w-full px-4 md:w-[12rem] z-50 mx-auto"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="my-12">
        <Navbar
          className="relative z-50 bg-dark !border-none !bg-opacity-100"
          shadow={false}
          fullWidth
        >
          <div className="container mx-auto flex items-center">
            <Typography color="white" className="text-2xl !mb-0 !font-bold">
              Corporate UI 
            </Typography>
            <div className="ml-auto hidden gap-3 lg:flex items-center">
              <IconButton
                size="sm"
                variant="text"
                color="blue-gray"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.33398 7.33331V13.3333C1.33398 13.8637 1.5447 14.3725 1.91977 14.7475C2.29484 15.1226 2.80355 15.3333 3.33398 15.3333H12.6673C13.1978 15.3333 13.7065 15.1226 14.0815 14.7475C14.4566 14.3725 14.6673 13.8637 14.6673 13.3333V7.33331H1.33398Z" fill="white"/>
                  <path d="M15.3333 4.66665H13.0533L10.5787 0.333313L9.42133 0.99998L11.518 4.66665H4.482L6.57867 0.99998L5.42133 0.333313L2.94667 4.66665H0.666667C0.489856 4.66665 0.320286 4.73688 0.195262 4.86191C0.0702379 4.98693 0 5.1565 0 5.33331C0 5.51012 0.0702379 5.67969 0.195262 5.80472C0.320286 5.92974 0.489856 5.99998 0.666667 5.99998H15.3333C15.5101 5.99998 15.6797 5.92974 15.8047 5.80472C15.9298 5.67969 16 5.51012 16 5.33331C16 5.1565 15.9298 4.98693 15.8047 4.86191C15.6797 4.73688 15.5101 4.66665 15.3333 4.66665Z" fill="white"/>
                </svg>
              </IconButton>
              <IconButton
                size="sm"
                variant="text"
                color="blue-gray"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0547 1.33331C10.4848 1.33648 9.92126 1.45286 9.39675 1.67568C8.87225 1.89851 8.39725 2.22334 7.99935 2.63131C7.40867 2.02067 6.64913 1.60028 5.81805 1.42399C4.98696 1.24769 4.12217 1.32352 3.33445 1.64176C2.54673 1.96 1.87195 2.50616 1.39655 3.21028C0.921146 3.91439 0.666774 4.7444 0.666016 5.59397C0.666016 9.48997 7.32868 14.9646 7.61268 15.194C7.72199 15.2828 7.85853 15.3312 7.99935 15.3312C8.14017 15.3312 8.2767 15.2828 8.38602 15.194C8.67002 14.9646 15.3327 9.48997 15.3327 5.59397C15.329 4.46211 14.8765 3.37792 14.0745 2.5792C13.2726 1.78047 12.1866 1.33242 11.0547 1.33331Z" fill="white"/>
                </svg>
              </IconButton>
              <Menu>
                <MenuHandler>
                  <IconButton color="white" variant="text">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99961 24.4C12.5342 24.4 15.3996 21.5346 15.3996 18C15.3996 14.4654 12.5342 11.6 8.99961 11.6C5.46499 11.6 2.59961 14.4654 2.59961 18C2.59961 21.5346 5.46499 24.4 8.99961 24.4ZM7.98854 15.5831C8.36595 14.9541 8.75655 14.8 8.99961 14.8C9.24265 14.8 9.63329 14.9541 10.0106 15.5831C10.238 15.962 10.7294 16.0849 11.1082 15.8575C11.4871 15.6302 11.61 15.1388 11.3826 14.76C10.8228 13.8269 9.98497 13.2 8.99961 13.2C8.01424 13.2 7.17641 13.8269 6.61656 14.76C6.38867 15.1398 6.21098 15.5595 6.08038 16H5.79961C5.35779 16 4.99961 16.3582 4.99961 16.8C4.99961 17.2418 5.35779 17.6 5.79961 17.6H5.81031C5.80315 17.7336 5.79961 17.8671 5.79961 18C5.79961 18.1329 5.80315 18.2664 5.81031 18.4H5.79961C5.35779 18.4 4.99961 18.7581 4.99961 19.2C4.99961 19.6418 5.35779 20 5.79961 20H6.08038C6.21098 20.4405 6.38867 20.8602 6.61656 21.24C7.17641 22.1731 8.01424 22.8 8.99961 22.8C9.98497 22.8 10.8228 22.1731 11.3826 21.24C11.61 20.8611 11.4871 20.3697 11.1082 20.1424C10.7294 19.9151 10.238 20.038 10.0106 20.4168C9.63329 21.0458 9.24265 21.2 8.99961 21.2C8.75655 21.2 8.36595 21.0458 7.98854 20.4168C7.91103 20.2876 7.84049 20.1481 7.77734 20H8.99961C9.44145 20 9.79961 19.6418 9.79961 19.2C9.79961 18.7581 9.44145 18.4 8.99961 18.4H7.41317C7.40418 18.268 7.39961 18.1345 7.39961 18C7.39961 17.8655 7.40418 17.732 7.41317 17.6H8.99961C9.44145 17.6 9.79961 17.2418 9.79961 16.8C9.79961 16.3582 9.44145 16 8.99961 16H7.77734C7.84049 15.8519 7.91103 15.7124 7.98854 15.5831Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2343 15.8343C23.5467 15.5219 24.0533 15.5219 24.3657 15.8343L27 18.4686L29.6343 15.8343C29.9467 15.5219 30.4533 15.5219 30.7657 15.8343C31.0781 16.1467 31.0781 16.6532 30.7657 16.9657L27.5657 20.1657C27.2533 20.4781 26.7467 20.4781 26.4343 20.1657L23.2343 16.9657C22.9219 16.6532 22.9219 16.1467 23.2343 15.8343Z" fill="white"/>
                    </svg>
                  </IconButton>
                </MenuHandler>
                <MenuList className="flex flex-col gap-2">
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <Avatar
                      variant="circular"
                      alt="candice wu"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <div className="flex flex-col gap-1">
                      <Typography variant="small" color="gray" className="font-normal">
                        <span className="font-medium text-blue-gray-900">Wu</span> send
                        you a message
                      </Typography>
                      <Typography
                        variant="small"
                        className="flex items-center gap-1 text-xs text-gray-600"
                      >
                        <ClockIcon className="h-3 w-3" />
                        13 minutes ago
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <Avatar
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                    />
                    <div className="flex flex-col gap-1">
                      <Typography variant="small" color="gray" className="font-normal">
                        <span className="font-medium text-blue-gray-900">Natali</span>{" "}
                        reply to your email
                      </Typography>
                      <Typography
                        variant="small"
                        className="flex items-center gap-1 text-xs text-gray-600"
                      >
                        <ClockIcon className="h-3 w-3" />a hour ago
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <Avatar
                      variant="circular"
                      alt="paypal"
                      src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
                    />
                    <div className="flex flex-col gap-1">
                      <Typography variant="small" color="gray" className="font-normal">
                        <span className="font-medium text-blue-gray-900">PayPal</span>{" "}
                        you&apos;ve received a payment.
                      </Typography>
                      <Typography
                        variant="small"
                        className="flex items-center gap-1 text-xs text-gray-600"
                      >
                        <ClockIcon className="h-3 w-3" />5 hours ago
                      </Typography>
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Avatar src="https://demos.creative-tim.com/corporate-ui-dashboard-pro/assets/img/team-1.jpg" alt="avatar" size="sm" />
            </div>
            <IconButton
              size="sm"
              variant="text"
              color="blue-gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <hr className="h-px my-4 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 border-0" />
          <div className="container mx-auto flex items-center">
            <ul className="hidden items-center gap-6 lg:flex">
              <NavItem>
              <Menu open={openMenu} handler={setOpenMenu}>
                <MenuHandler>
                  <Button
                    {...triggers}
                    variant="text"
                    className="flex items-center gap-3 text-base text-white font-normal capitalize tracking-normal"
                  >
                    Furniture{" "}
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform ${
                        openMenu ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </MenuHandler>
                <MenuList
                  {...triggers}
                  className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
                >
                  <Card
                    color="blue"
                    shadow={false}
                    variant="gradient"
                    className="col-span-3 grid h-full w-full place-items-center rounded-md"
                  >
                    <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
                  </Card>
                  <ul className="col-span-4 flex w-full flex-col gap-1">
                    {menuItems.map(({ title, description }) => (
                      <a href="#" key={title}>
                        <MenuItem>
                          <Typography variant="h6" color="blue-gray" className="mb-1">
                            {title}
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                          >
                            {description}
                          </Typography>
                        </MenuItem>
                      </a>
                    ))}
                  </ul>
                </MenuList>
              </Menu>
              </NavItem>
              <NavItem>Home Care</NavItem>
              <NavItem>Aromatherapy</NavItem>
            </ul>
            <div className="w-32 ml-auto">
              <Input label="Search" />
            </div>
            
          </div>

          <MobileNav open={open}>
            <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Resources</NavItem>
                <NavItem>Pricing</NavItem>
              </ul>
              <div className="mt-8 mb-4 flex gap-2">
                <Button variant="outlined" size="sm" fullWidth>
                  login
                </Button>
                <Button size="sm" fullWidth>
                  sign up
                </Button>
              </div>
            </div>
          </MobileNav>
        </Navbar>
        <header className="h-full min-h-screen w-screen bg-white">
          <div className="relative mx-auto grid place-items-center bg-gradient-to-tr from-blue-700 to-blue-500 py-24 text-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')`}}>
            <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-70 bg-dark"></span>
            <Typography
              variant="h1"
              color="white"
              className="!mb-8 !leading-tight z-50"
            >
              Autumn Collection is here
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-10 w-full opacity-75 md:w-10/12 lg:w-7/12"
            >
              The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?
            </Typography>
            <div className="w-full md:w-8/12 lg:w-5/12">
              <div className="flex md:flex-row">
                <Button
                  color="white"
                  variant="outlined"
                  className="w-full px-4 md:w-[12rem] z-50 mx-auto"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

