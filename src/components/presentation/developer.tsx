import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              color="dark"
              className="!flex !items-center !font-bold text-lg justify-center lg:justify-start mb-5"
            >
              Attention to hiqh-quality code
            </Typography>

            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-5xl"
            >
              Develop consistenly using Astro architecture principles
            </Typography>
            <Typography variant="lead" color="gray" className="lg:pr-20">
              Using Astro Material React you get everything you need to start creating your fully functional and responsive Ecommerce website in days, not months.
            </Typography>
            
          </div>
          <img src="https://www.creative-tim.com/astro/assets/img/image-devs.png" alt="components" className="rounded-3xl ml-auto hidden md:flex lg:absolute top-0 -right-24" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
