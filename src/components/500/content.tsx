import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"

import {
  Button,
  Typography
} from "@material-tailwind/react";

export function HeroSectionFour() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        <div className="relative h-screen flex flex-col justify-end text-center bg-cover" style={{backgroundImage: `url('/public/error-500.png')`}}>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
              <a className="z-10" href="./">
                <Button color="dark" className="w-full px-4 mb-32">
                  Go Home
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
