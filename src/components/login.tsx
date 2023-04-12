import ThemeProvider from "./theme-provider";
import Navbar from "./defaultNavbar"
 
import { Typography, Input, Checkbox, Button } from "@material-tailwind/react";

export function SignIn() {
  return (
    <ThemeProvider>
      <Navbar />
      <section className="grid h-screen items-center lg:grid-cols-2">
        <div className="my-auto p-8 text-center sm:p-10 md:p-20 xl:px-32 xl:py-24">
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Welcome back
          </Typography>
          <Typography color="gray" className="font-normal mb-16">
            Welcome back, please enter your details.
          </Typography>

          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <div className="mb-4">
              <Input size="lg" label="Email" type="email" name="email" />
            </div>
            <div className="mb-4">
              <Input size="lg" label="Password" type="password" name="password" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="-ml-3">
                <Checkbox
                  label="Remember for 30 days"
                  labelProps={{
                    className: "font-normal",
                  }}
                />
              </div>
              <Typography as="a" href="#" color="blue" className="font-medium">
                Forgot password
              </Typography>
            </div>
            <Button size="lg" className="mt-6" fullWidth>
              sign in
            </Button>
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
                className="-mt-0.5 h-7 w-7"
              />
              sign in with google
            </Button>
          </form>
        </div>
        <img
          src="https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="background image"
          className="hidden h-screen w-full object-cover lg:block"
        />
      </section>
    
    </ThemeProvider>
  );
}

export default SignIn;
