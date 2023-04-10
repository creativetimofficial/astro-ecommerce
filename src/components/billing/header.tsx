import React from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  Typography,
  Navbar,
  MobileNav,
  IconButton,
  Button,
  Card,
  CardBody,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

import { Bars3Icon, XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="font-normal transition-colors hover:text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

function PricingCard({ price, desc, options }) {
  return (
    <ThemeProvider>
      <Card className="border border-blue-gray-50">
        <CardBody className="p-8 text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 py-1 pl-1 pr-3">
            <Typography
              variant="small"
              className="mr-3 rounded-full bg-white py-px px-3 font-medium text-blue-500"
            >
              Basic Plan
            </Typography>
            <Typography color="blue" variant="small" className="font-medium">
              Most Popular
            </Typography>
          </div>
          <Typography variant="h1" color="blue-gray" className="mb-2">
            {price}
          </Typography>
          <Typography color="gray" className="font-normal">
            {desc}
          </Typography>

          <ul className="my-8 flex flex-col gap-3 border-y border-blue-gray-50 py-6">
            {options.map((option, key) => (
              <li key={key} className="flex items-center gap-2">
                <CheckCircleIcon
                  className="h-6 w-6 text-blue-500"
                  strokeWidth={2}
                />
                <Typography color="gray" className="font-normal opacity-80">
                  {option}
                </Typography>
              </li>
            ))}
          </ul>
          <Button color="dark" fullWidth>
            get started
          </Button>
        </CardBody>
      </Card>
    </ThemeProvider>
  );
}

export function PricingSectionOne() {
  const [type, setType] = React.useState("monthly");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const cards = [
    {
      price: type === "monthly" ? "$10/mth" : "$100/yr",
      desc: "Our most popular plan.",
      options: [
        "Free entry to all repositories",
        "Working materials in Sketch",
        "Pro member accounts",
        "100GB cloud storage",
        "Support team full assist",
      ],
    },
    {
      price: type === "monthly" ? "$20/mth" : "$200/yr",
      desc: "Growing teams up to 20 users.",
      options: [
        "Free entry to all repositories",
        "Working materials in Sketch",
        "Pro member accounts",
        "200GB cloud storage",
        "Support team full assist",
      ],
    },
    {
      price: type === "monthly" ? "$40/mth" : "$400/yr",
      desc: "Advanced features + unlimited users.",
      options: [
        "Free entry to all repositories",
        "Working materials in Sketch",
        "Pro member accounts",
        "300GB cloud storage",
        "Support team full assist",
      ],
    },
  ];

  return (
    <ThemeProvider>
      <Navbar
        className="absolute z-50 border-0"
        shadow={false}
        fullWidth
      >
        <div className="container mx-auto flex items-center">
          <Typography color="blue-gray" className="!mb-0 !font-bold">
            Astro Ecommerce
          </Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Resources</NavItem>
            <NavItem>Pricing</NavItem>
          </ul>
          <div className="ml-auto hidden gap-2 lg:flex">
            <Button variant="text" size="sm">
              login
            </Button>
            <Button size="sm">sign up</Button>
          </div>
          <IconButton
            size="sm"
            variant="text"
            color="blue-gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <MobileNav open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Resources</NavItem>
              <NavItem>Pricing</NavItem>
            </ul>
            <div className="mt-8 mb-4 flex gap-2">
              <Button variant="outlined" size="sm" fullWidth>
                login
              </Button>
              <Button color="dark" size="sm" fullWidth>
                sign up
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
      <section>
        <div className="min-h-[50vh] px-8 py-24 flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('./bg-billing.jpg')`}}>
          <div className="container mx-auto text-center">
            <Typography
              color="white"
              className="mb-2 font-medium opacity-70"
            >
              Pricing
            </Typography>
            <Typography variant="h2" color="white" className="mb-2">
              See our pricing
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 opacity-70"
            >
              You have Free Unlimited Updates and Premium Support on each package.
            </Typography>

            <Tabs value="monthly" className="mx-auto w-72">
              <TabsHeader className="h-14 border border-white/25 bg-opacity-90">
                <Tab value="monthly" onClick={() => setType("monthly")}>
                  Monthly Billing
                </Tab>
                <Tab value="annual" onClick={() => setType("annual")}>
                  Annual Billing
                </Tab>
              </TabsHeader>
            </Tabs>
          </div>
        </div>
        <div className="-mt-32 px-8 pt-8 pb-16">
          <div className="container mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((props, key) => (
              <PricingCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default PricingSectionOne;
