import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

import {
  Bars3Icon,
  XMarkIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
}

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

export function HeroSectionTwo() {
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
            Astro Ecommerce
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
      <header className="h-full w-screen place-items-center bg-white px-8 py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center rounded-full bg-dark/30 py-1 pl-1 pr-3">
              <Typography
                variant="small"
                className="mr-3 rounded-full bg-white py-0.5 px-3 font-medium text-dark-500"
              >
                New
              </Typography>
              <Typography
                color="dark"
                variant="small"
                className="!flex !items-center !font-semibold"
              >
                Personalized coaching in-app
                <ArrowSmallRightIcon
                  className="ml-1.5 h-4 w-4"
                  strokeWidth={3}
                />
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-6xl"
            >
              Our company mission is to lead the design apps
            </Typography>
            <Typography variant="lead" color="gray" className="lg:pr-20">
              It becomes harder for us to give others a hand. We get our heart
              broken by people we love, even that we give them all we have. Then
              we lose family over time.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button color="dark" className="flex items-center">
                <img
                  src="/logos/logo-ios.svg"
                  alt="ios"
                  className="-mt-1 mr-1.5 h-6 w-6"
                />
                Download Ios
              </Button>
              <Button color="dark" className="flex items-center">
                <img
                  src="/logos/logo-android.svg"
                  alt="ios"
                  className="-mt-0.5 mr-1.5 h-6 w-6"
                />
                Download Android
              </Button>
            </div>
          </div>
          <div className="hidden justify-end lg:flex">
            <img src="https://images.unsplash.com/photo-1591814540398-58332a4483a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" alt="iphone" className="w-full rounded-3xl" />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
