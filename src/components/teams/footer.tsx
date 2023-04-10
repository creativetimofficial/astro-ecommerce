import { Typography, Input, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

const links = ["Overview", "Features", "Pricing", "Careers", "Help", "Privacy"];
const links2 = ["Terms", "Privacy", "Cookies"];
const currentYear = new Date().getFullYear();

export function FooterOne() {
  return (
    <ThemeProvider>
      <footer className="mt-10 px-8 pt-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-end justify-center gap-8 md:justify-between">
            <div className="text-center md:text-left">
              <Typography variant="h4" className="mb-6">
                Astro Ecommerce
              </Typography>
              <ul className="flex flex-wrap items-center justify-center md:justify-start">
                {links.map((link, idx) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className={`py-1 font-normal transition-colors hover:text-blue-gray-900 ${
                        idx === 0 ? "pr-3" : "px-3"
                      }`}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-[24rem] sm:min-w-[24rem]">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Stay up to date
              </Typography>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input label="Enter your email" />
                <Button color="dark">subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
            <Typography color="gray" className="text-center font-normal">
              &copy; {currentYear} Astro Ecommerce, All rights reserved.
            </Typography>

            <ul className="flex items-center">
              {links2.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="gray"
                    className={`py-1 font-normal transition-colors hover:text-blue-gray-900 ${
                      idx === links2.length - 1 ? "pl-2" : "px-2"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default FooterOne;
