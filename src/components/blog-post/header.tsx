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
  PlayCircleIcon,
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

export function HeroSectionThree() {
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
      <header className="h-full min-h-screen w-screen bg-white pt-32">
        <div className="container mx-auto grid items-center text-center">
          <div className="mx-auto mb-8 inline-flex w-max items-center rounded-full bg-blue-50 py-1 pl-1 pr-3">
            <Typography
              variant="small"
              className="mr-3 rounded-full bg-white px-2.5 py-0.5 font-medium text-blue-500"
            >
              What&apos;s new?
            </Typography>
            <Typography
              color="blue"
              variant="small"
              className="!flex !items-center !font-semibold"
            >
              Get a new virtual card
              <ArrowSmallRightIcon className="ml-1.5 h-4 w-4" strokeWidth={3} />
            </Typography>
          </div>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-8 leading-tight lg:text-6xl"
          >
            Work with an amazing
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mx-auto mb-12 w-full px-8 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
          >
            People are so scared to lose that they don&apos;t even try. Like,
            one thing people can&apos;t say is that I&apos;m not trying, and
            I&apos;m not trying my hardest.
          </Typography>
          <div className="mb-20 flex justify-center gap-3">
            <Button
              variant="outlined"
              color="dark"
              size="lg"
              className="flex items-center"
            >
              <PlayCircleIcon
                className="mr-1.5 -mt-0.5 h-6 w-6"
                strokeWidth={2}
              />
              demo
            </Button>
            <Button color="dark" size="lg">sign up</Button>
          </div>
        </div>
        <div className="mx-0 pb-8 lg:container lg:mx-auto">
          <img
            src="https://images.unsplash.com/photo-1665690399857-9de8bbbeb108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="credit cards"
            className="h-96 w-full object-cover md:h-[34rem] lg:h-[44rem] lg:rounded-xl"
          />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionThree;
