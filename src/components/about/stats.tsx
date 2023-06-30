import { Typography, Card } from "@material-tailwind/react";

function StatsCard({ count, title }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="mb-4 text-6xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "400+",
    title: "Projects completed",
  },
  {
    count: "600%",
    title: "Return on investment",
  },
  {
    count: "10k",
    title: "Working hours",
  },
  {
    count: "3.4K",
    title: "5-star reviews",
  },
];

export function StatsSectionTwo() {
  return (
    <section className="px-8 py-8 lg:py-40">
      <div className="container mx-auto grid items-center gap-y-8 gap-x-16 lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="background image"
          className="h-full w-full rounded-xl object-cover object-center"
        />
        <div className="p-2 lg:p-8">
          <Typography color="dark" className="mb-2 font-bold text-lg">
            Build better, launch faster
          </Typography>
          <Typography variant="h1" color="blue-gray" className="mb-20">
            They&apos;re slowed down by their perception.
          </Typography>
          <div className="grid gap-y-16 gap-x-8 md:grid-cols-2">
            {stats.map((props, key) => (
              <StatsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSectionTwo;
