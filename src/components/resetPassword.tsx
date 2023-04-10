import React from "react";
 
import { 
  Button,
  Card,
  CardHeader,
  CardBody,
  Navbar, 
  Typography, 
  IconButton, 
  Input, 
  MobileNav, 
  Checkbox
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeProvider from "./theme-provider";

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

export function Reset() {
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
        className="absolute z-50 border-x-0 border-t-0 !border-b !border-blue-gray-50"
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
      <section className="h-screen w-full p-4">
        <div className="relative h-[50vh] w-full overflow-hidden rounded-xl mt-14">
          <img
            src="https://images.unsplash.com/photo-1651238029038-1922acc3abfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="background image"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/25" />
        </div>
        <div className="container mx-auto -mt-32 grid justify-center">
          <Card className="mx-4 md:w-[26rem]">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid place-items-center py-8 px-4 text-center"
            >
              <Typography variant="h3" color="white" className="mb-2">
                Reset Password
              </Typography>
              <Typography variant="small" color="white" className="font-normal">
                You will receive an e-mail in maximum 60 seconds
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                variant="static"
                label="Email"
                size="lg"
                placeholder="john@example.com"
              />
              <Button className="mt-4" fullWidth>
                Reset
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
    
    </ThemeProvider>
  );
}

export default Reset;
