import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  EyeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: (
      <img className="w-40 mx-auto mb-4" src="icon1.png" />
    ),
    title: "For Designers",
    description:
      "This template comes packed with designer files based on Figma.",
  },
  {
    icon: (
      <img className="w-40 mx-auto mb-4" src="icon2.png" />
    ),
    title: "For Developers",
    description:
      "Save months of work when you use our fully coded components and pages.",
  },
  {
    icon: (
      <img className="w-40 mx-auto mb-4" src="icon3.png" />
    ),
    title: "For Store Owners",
    description:
      "Save time and money by helping your team focus on customization and features.",
  }
];

export function FeatureLanding() {
  return (
    <section className="px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue" className="mb-2 font-bold">
          Design & Code by Creative Tim
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Turn your idea into a startup
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;
