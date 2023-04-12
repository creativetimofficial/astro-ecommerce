import React from "react";
import {


  Button,

  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroSectionTwo() {
 
  return (
    <ThemeProvider>
      <Navbar />
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
          <div className="hidden lg:flex">
            <img src="https://images.unsplash.com/photo-1650615567023-0721bceeecb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="iphone" className="max-w-md rounded-3xl ml-auto" />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
