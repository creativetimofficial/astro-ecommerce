import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import ThemeProvider from "../theme-provider";
 
export default function DefaultSpeedDial() {
  return (
    <ThemeProvider>
      <div className="absolute bottom-5 right-5">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton color="dark" size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction>
              <HomeIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <CogIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <Square3Stack3DIcon className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </ThemeProvider>
  );
}