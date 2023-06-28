import React from "react";
import {
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function CodePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto relative">
          <div className="text-center mx-64">
            <Typography
              color="blue"
              variant="small"
              className="!font-bold mb-5"
            >
              Powerful Ecommerce UI Tool
            </Typography>

            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-5xl"
            >
              Astro Ecommerce is the starting point for your next project!
            </Typography>
            <Typography variant="lead" color="gray" className="mb-5">
              Don’t spend hours reinventing the wheel! Our UI tool comes packed with everything you need for you Online Store.
            </Typography>
          </div>
            <img src="https://www.creative-tim.com/astro/assets/img/checkout.jpg" alt="iphone" className="w-full rounded-3xl mx-auto" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;
