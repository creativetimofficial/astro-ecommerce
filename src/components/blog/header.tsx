import React from "react";

import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
  Avatar,
  Input,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

interface NavItemPropsType {
  children: React.ReactNode;
}

const users = [
  {
    name: "John Michael",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Laurent Perrier",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Michael Levi",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Miriam Eric",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
  },
  {
    name: "Richard Gran",
    img: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
];

function NavItem({ children }: NavItemPropsType) {
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

export function HeroSectionOne() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <ThemeProvider>
      <Navbar
        className="fixed z-50 border-x-0 border-t-0 !border-b !border-blue-gray-50"
        shadow={false}
        fullWidth
      >
        <div className="container mx-auto flex items-center">
          <Typography color="blue-gray" className="!mb-0 !font-bold">
            Corporate UI
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
            <Button color="dark" size="sm">sign up</Button>
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
              <Button color="dark" size="sm" fullWidth>
                sign up
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
      <header className="h-full min-h-screen w-screen bg-white px-4 pt-24">
        <div className="container mx-auto flex flex-col-reverse items-center lg:flex-row">
          <div className="mr-0 lg:mr-16 xl:mr-24">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 text-4xl !leading-tight md:text-5xl"
            >
              Your work with Corporate UI Astro
            </Typography>
            <Typography
              variant="lead"
              className="mb-16 text-gray-700 md:pr-16 xl:pr-28"
            >
              The time is now for it to be okay to be great. People in this
              world shun people for being great.
            </Typography>
            <div className="mb-6 flex w-full flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Input label="Enter your email" size="lg" />
              <Button color="dark" className="w-full px-4 md:w-[12rem]">get started</Button>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="inline-flex items-center"
            >
              We care about your data in our&nbsp;
              <Typography
                as="a"
                href="#"
                variant="small"
                className="underline decoration-gray-500 underline-offset-4"
              >
                privacy policy
              </Typography>
            </Typography>
            <div className="mt-16 mb-12 flex flex-col-reverse sm:flex-row sm:items-center lg:mb-0">
              <div className="flex items-center">
                {users.map(({ name, img }, index) => (
                  <Avatar
                    key={index}
                    src={img}
                    alt={name}
                    variant="circular"
                    className={`${
                      index === 0 ? "" : "-ml-4"
                    } cursor-pointer border-2 border-white`}
                  />
                ))}
              </div>
              <div className="mb-6 sm:mb-0 sm:ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((el, key) => (
                    <StarIcon key={key} className="h-6 w-6 text-yellow-700" />
                  ))}
                  <Typography color="blue-gray" className="ml-2 !font-semibold">
                    5.0
                  </Typography>
                </div>
                <Typography color="gray" className="mt-1 ml-0.5 font-normal">
                  from 200+ reviews
                </Typography>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1464564531096-f0163633a18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1788&q=80"
            alt="team work"
            className="lg:0 mb-8 h-96 w-full rounded-xl object-cover lg:h-[40rem] lg:w-1/2"
          />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionOne;
