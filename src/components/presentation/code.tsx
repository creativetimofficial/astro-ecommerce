import React from "react";
import {
  Button,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export function CodePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              color="blue"
              variant="small"
              className="!flex !items-center !font-bold mb-5"
            >
              By developers, for entrepreneurs
            </Typography>

            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-5xl"
            >
              Don't write from scratch. Coded examples are included.
            </Typography>
            <Typography variant="lead" color="gray" className="lg:pr-20">
              Using our ecommerce starter template will save a lot of coding time , as it provides a solid foundation for the Online Store, allowing your team to focus on customizing and adding specific features to meet the needs of your particular project.
            </Typography>
            <Button variant="text" className="flex items-center gap-2 mt-4">
              Read More <ArrowRightIcon strokeWidth={2} className="h-5 w-5" />
            </Button>
          </div>
            <img src="../code.png" alt="iphone" className="max-w-2xl rounded-3xl mx-auto" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;
