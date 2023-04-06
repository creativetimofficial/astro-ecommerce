import { Typography, Card, CardBody } from "@material-tailwind/react";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody>
        <Typography variant="h1" color="blue" className="mb-4 text-6xl">
          {count}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="font-normal">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const stats = [
  {
    count: "300",
    title: "Projects completed",
    desc: "Of “high-performing” level are led by a certified manager",
  },
  {
    count: "600%",
    title: "Return on investment",
    desc: "Our customers have reported an average of ~600% ROI",
  },
  {
    count: "10k",
    title: "Working hours",
    desc: "That meets quality standards required by our users",
  },
  {
    count: "24/7",
    title: "Premium Support",
    desc: "Actively team members that finishes on time",
  },
];

export function StatsSectionOne() {
  return (
    <section className="px-8 py-8">
      <div className="container mx-auto">
        <div className="mb-20 flex flex-wrap items-center justify-between px-4">
          <div className="w-full lg:w-8/12">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 lg:mb-0"
            >
              Our products are built on top
            </Typography>
          </div>
          <Typography
            variant="lead"
            color="gray"
            className="w-full lg:w-4/12"
          >
            Learn more about the team behind the company.
          </Typography>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSectionOne;
