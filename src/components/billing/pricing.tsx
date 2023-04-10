import {
  Card,
  CardBody,
  Button,
  Typography,
  Chip,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

import { CheckIcon } from "@heroicons/react/24/outline";

function PricingCard({ title, desc, price, plan, options, marked }) {
  return (
    <ThemeProvider>
      <Card className="border border-blue-gray-50">
        <CardBody className="flex flex-wrap-reverse items-end justify-between gap-2 p-8">
          <div className="mt-1.5">
            <Typography
              variant="h3"
              color="blue-gray"
              className={marked ? "flex items-center gap-3" : ""}
            >
              {title}{" "}
              {marked && (
                <Chip
                  value="popular"
                  className="!rounded-full !py-1.5 !px-3"
                />
              )}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              {desc}
            </Typography>
          </div>
          <div className="flex">
            <Typography variant="h2" color="blue-gray" className="mt-1">
              $
            </Typography>
            <Typography variant="h1" color="blue-gray" className="text-7xl">
              {price}
            </Typography>
            <Typography
              color="gray"
              className="mt-auto mb-2 ml-1 font-medium"
            >
              per month
            </Typography>
          </div>
        </CardBody>
        <CardBody className="border-y border-blue-gray-50 p-8">
          <Typography variant="h5" color="blue-gray" className="uppercase">
            Features
          </Typography>
          <Typography color="gray" className="font-normal">
            Everthing in our <strong className="text-gray-700">{plan}</strong>{" "}
            plan plus...
          </Typography>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {options.map((option, key) => (
              <li key={key} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500/20 p-1 text-green-500">
                  <CheckIcon className="h-4 w-4" strokeWidth={3} />
                </div>
                <Typography color="gray" className="font-normal opacity-80">
                  {option}
                </Typography>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardBody className="p-8">
          <Button color="dark" fullWidth>
            get started
          </Button>
        </CardBody>
      </Card>
    </ThemeProvider>
  );
}

export function PricingSectionTwo() {
  return (
    <section className="py-8 px-8 lg:py-40">
      <div className="w-1/2 mb-12 mx-auto text-center">
        <Typography variant="h2" className="text-4xl mb-4">
          Choose a plan for your next project
        </Typography>
        <Typography variant="p" className="text-lg">
          You have Free Unlimited Updates and Premium Support on each package. You also have 20 days to request a refund.
        </Typography>
      </div>
      <div className="container mx-auto grid gap-10 lg:grid-cols-2">
        <PricingCard
          title="Basic Plan"
          desc="You have Unlimited Updates & Support."
          price={10}
          plan="free"
          options={[
            "Complete documentation",
            "Working materials in Sketch",
            "Basic reporting + analytics",
            "10 team members",
            "Integration help",
            "API Access",
            "20GB Cloud storage",
            "Premium support",
            "Private code access",
            "Pro member accounts",
          ]}
        />
        <PricingCard
          marked
          title="Lifetime"
          desc="Pay once, own it forever."
          price={59}
          plan="basic"
          options={[
            "Unlimited projects",
            "Advanced custom fields",
            "Advanced buttons",
            "Up to 100 team members",
            "Up to 20 admin users",
            "Backup your account",
            "10TB Cloud storage",
            "Support team full assist",
            "Priority chat support",
            "+ many more...",
          ]}
        />
      </div>
    </section>
  );
}

export default PricingSectionTwo;
