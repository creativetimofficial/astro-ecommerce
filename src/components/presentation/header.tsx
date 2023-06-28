import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 py-8">
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
                ASTRO STARTER TEMPLATE
                <ArrowSmallRightIcon
                  className="ml-1.5 h-4 w-4"
                  strokeWidth={3}
                />
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-5xl"
            >
              The perfect starting point for your <span className="text-blue">Astro Ecommerce</span>
            </Typography>
            <Typography variant="lead" color="gray" className="lg:pr-20">
            Astro Ecommerce is a free template designed to be both lightweight and feature-rich. It comes packed with everything you need to get your Online Store ready in no time.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button color="dark" className="flex items-center">
                <img
                  src=".//logos/logo-ios.svg"
                  alt="ios"
                  className="-mt-1 mr-1.5 h-6 w-6"
                />
                Get Started
              </Button>
              <Button color="blue" className="flex items-center">
                <img
                  src=".//logos/logo-android.svg"
                  alt="ios"
                  className="-mt-0.5 mr-1.5 h-6 w-6"
                />
                Get Figma
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img src="https://www.creative-tim.com/astro/assets/img/header-img.png" alt="iphone" className="max-w-md rounded-3xl ml-auto" />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
