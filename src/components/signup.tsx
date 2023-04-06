import React from "react";
 
import { Navbar, Typography, IconButton, Input, MobileNav, Checkbox, Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

export function SignUp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar
        className="absolute z-50 border-x-0 border-t-0 !border-b !border-blue-gray-50"
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
      <section className="grid h-screen items-center p-8">
        <div className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Create an account
          </Typography>
          <Typography color="gray" className="mb-12">
            Start your 30 days free trial.
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <Input size="lg" label="Email" type="email" name="email" />
            <Button size="lg" className="mt-4" fullWidth>
              get started
            </Button>
            <div className="my-6 flex w-full items-center gap-2">
              <hr className="w-full bg-blue-gray-50" />
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium opacity-50"
              >
                OR
              </Typography>
              <hr className="w-full bg-blue-gray-50" />
            </div>
            <Button
              variant="outlined"
              color="blue-gray"
              size="lg"
              className="mt-4 flex h-12 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src="/logos/logo-google.png"
                alt="google"
                className="h-6 w-6"
              />{" "}
              sign up with google
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="lg"
              className="mt-4 flex h-12 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src="/logos/logo-facebook.png"
                alt="facebook"
                className="-mt-0.5 h-7 w-7"
              />
              sign up with facebook
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="lg"
              className="mt-4 flex h-12 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src="/logos/logo-apple.png"
                alt="apple"
                className="-mt-1 h-7 w-7"
              />
              sign up with apple
            </Button>
            <Typography
              color="gray"
              className="mt-6 text-center font-normal"
            >
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Log in
              </a>
            </Typography>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUp;

