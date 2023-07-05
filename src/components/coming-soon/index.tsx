import React from "react";
import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"

import {
  Button,
  Typography,
} from "@material-tailwind/react";

export function HeroSectionFour() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('https://images.unsplash.com/photo-1637317957434-16798e804fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2343&q=80')`}}>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-900"></span>
          <Typography
            color="white"
            className="mb-4 w-full opacity-80 md:w-10/12 lg:w-7/12 z-10 mx-auto"
          >
           Coming Soon
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="!leading-tight lg:text-7xl z-20 mb-12"
          >
            Virtual Store
          </Typography>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
              <a className="z-10" href="./">
                <Button color="white" className="w-full px-4 z-10">
                  Notify me
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionFour;
