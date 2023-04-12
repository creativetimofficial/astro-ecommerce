import React from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  Typography,
  Button,
  Card,
  CardBody,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"

import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
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
      <Navbar />
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
