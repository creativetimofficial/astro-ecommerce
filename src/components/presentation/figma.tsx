import React from "react";
import {
  Button,
  Card,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" color="dark" className="mb-4 text-6xl">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography variant="p" color="gray">
        {desc}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "70+",
    title: "Coded Elements",
    desc: "From buttons, to inputs, navbars, alerts, tabels, cards or charts."
  },
  {
    count: "3",
    title: "Example Pages",
    desc: "Save months of work when you use our pre-made pages."
  },
  {
    count: "30+",
    title: "Design Blocks",
    desc: "Mix the already made sections and unleash your creativity."
  },
  {
    count: "40+",
    title: "Global Styles",
    desc: "Colors, typography system, shadows, and blur effects are ready to be used."
  },
];

export function FigmaPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              color="blue"
              variant="small"
              className="!font-bold mb-5"
            >
              High standards of UI & UX
            </Typography>

            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-4xl"
            >
              From idea to design. From design to code. From code to live.
            </Typography>
            <Typography color="gray" className="mb-5 w-[30rem]">
              All the sections and pages made with these elements will be fully responsive and will look beautiful on all types of screens, including phones, tables, or desktops.
            </Typography>
          </div>
          <div className="flex relative">
            <div className="w-1/2">
              <div className="p-2 lg:p-0 mb-5">
                <div className="grid gap-y-16 gap-x-8 md:grid-cols-2">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
              </div>
              <a href="https://www.figma.com/community/file/1201892214265868825">
                <Button color="dark" className="flex items-center">
                  Get Figma
                </Button>
              </a>
            </div>
            <img src="https://www.creative-tim.com/astro/assets/img/components.png" alt="iphone" className="w-1/2 rounded-3xl ml-auto absolute -right-32 -top-24" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
