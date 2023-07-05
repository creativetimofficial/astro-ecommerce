import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  desc: string;
}

function TeamCard({ img, name, title, desc }: TeamCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} shadow={false} className="!m-0 !mb-6 h-64">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </CardHeader>
      <Typography variant="h4" color="blue-gray" className="mb-1">
        {name}
      </Typography>
      <Typography color="gray" className="mb-3 font-normal">
        {title}
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        {desc}
      </Typography>
      <div className="flex items-center">
        <IconButton variant="text" color="light-blue">
          <i className="fa-brands fa-twitter text-lg not-italic" />
        </IconButton>
        <IconButton variant="text" color="blue">
          <i className="fa-brands fa-linkedin text-lg not-italic" />
        </IconButton>
        <IconButton variant="text" color="pink">
          <i className="fa-brands fa-dribbble text-lg not-italic" />
        </IconButton>
      </div>
    </Card>
  );
}

const members = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Tina Andrew",
    title: "Founder & CEO",
    desc: "Today you are you! That is truer than true! There is no one alive!",
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Phoenix Baker",
    title: "Engineering Manager",
    desc: "And I love you like Kanye loves Kanye. We need to restart that.",
  },
  {
    img: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Lana Steiner",
    title: "Product Manager",
    desc: "Artist is a term applied to a person who engages in an activity",
  },
  {
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Demi Wilkinson",
    title: "Fronted Developer",
    desc: "Success is not final, failure is not fatal: it is the courage to continue",
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg">
            Our Team
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            You are into a great company
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto lg:w-8/12 lg:px-20 text-blue-gray-800"
          >
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </Typography>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
