import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
  Input,
  Avatar,
  Card,
  CardBody,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  PlayCircleIcon,
  BoltIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import ThemeProvider from "./components/theme-provider";

const users = [
  {
    name: "John Michael",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Laurent Perrier",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Michael Levi",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Miriam Eric",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
  },
  {
    name: "Richard Gran",
    img: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
];

const members = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Olivia Rhye",
    title: "Founder & CEO",
    desc: "Former co-founder of Spotify. Early staff at Apple and Fitbit.",
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Phoenix Baker",
    title: "Engineering Manager",
    desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs",
  },
  {
    img: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Lana Steiner",
    title: "Product Manager",
    desc: "Former PM for Linear, Lambda School, and On Deck.",
  },
  {
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Demi Wilkinson",
    title: "Fronted Developer",
    desc: "Former frontend dev for Linear, Coinbase, and Postscript.",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Candice Wu",
    title: "Backend Developer",
    desc: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
  },
  {
    img: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Natali Craig",
    title: "Product Designer",
    desc: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
  },
];

const logos = [
  "amazon",
  "coinbase",
  "google",
  "netflix",
  "pinterest",
  "spotify",
];

const links = [
  {
    title: "Product",
    items: [
      "Overview",
      "Features",
      "Solutions",
      "Tutorials",
      "Pricing",
      "Releases",
    ],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
  },
  {
    title: "Resource",
    items: [
      "Blog",
      "Newsletter",
      "Events",
      "Help center",
      "Tutorials",
      "Support",
    ],
  },
];

const currentYear = new Date().getFullYear();

function NavItem({ children }) {
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

function Icon({ children }) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-blue-100/80 p-2.5 text-blue-500 ring-8 ring-blue-100/40">
      {children}
    </div>
  );
}

function TeamCard({ img, name, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody>
        <Avatar
          src={img}
          alt={name}
          variant="circular"
          size="xxl"
          className="mb-6 object-top"
        />
        <Typography variant="h5" color="blue-gray">
          {name}
        </Typography>
        <Typography color="blue" className="mb-2 font-normal">
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
      </CardBody>
    </Card>
  );
}

export default function ExampleCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <ThemeProvider>
      <Navbar
        className=" z-50 border-x-0 border-t-0 !border-b !border-blue-gray-50"
        shadow={false}
        fullWidth
      >
        <div className="container mx-auto flex items-center">
          <Typography color="blue-gray" className="!mb-0 !font-bold">
            Corporate UI
          </Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Resources</NavItem>
            <NavItem>Pricing</NavItem>
          </ul>
          <div className="ml-auto hidden gap-2 lg:flex">
            <Button className="text-dark" variant="text" size="sm">
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
              <Button size="sm" fullWidth>
                sign up
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
      <header className="h-full min-h-screen w-screen bg-white px-4 pt-24">
        <div className="container mx-auto flex flex-col-reverse items-center lg:flex-row">
          <div className="mr-0 lg:mr-16 xl:mr-24">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 text-4xl !leading-tight md:text-5xl"
            >
              Your work with Astro Ecommerce
            </Typography>
            <Typography
              variant="lead"
              className="mb-16 text-gray-700 md:pr-16 xl:pr-28"
            >
              The time is now for it to be okay to be great. People in this
              world shun people for being great.
            </Typography>
            <div className="mb-6 flex w-full flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Input label="Enter your email" size="lg" />
              <Button className="w-full px-4 md:w-[12rem]">get started</Button>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="inline-flex items-center"
            >
              We care about your data in our&nbsp;
              <Typography
                as="a"
                href="#"
                variant="small"
                className="underline decoration-gray-500 underline-offset-4"
              >
                privacy policy
              </Typography>
            </Typography>
            <div className="mt-16 mb-12 flex flex-col-reverse sm:flex-row sm:items-center lg:mb-0">
              <div className="flex items-center">
                {users.map(({ name, img }, index) => (
                  <Avatar
                    key={index}
                    src={img}
                    alt={name}
                    variant="circular"
                    className={`${
                      index === 0 ? "" : "-ml-4"
                    } cursor-pointer border-2 border-white`}
                  />
                ))}
              </div>
              <div className="mb-6 sm:mb-0 sm:ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((el, key) => (
                    <StarIcon key={key} className="h-6 w-6 text-yellow-700" />
                  ))}
                  <Typography color="blue-gray" className="ml-2 !font-semibold">
                    5.0
                  </Typography>
                </div>
                <Typography color="gray" className="mt-1 ml-0.5 font-normal">
                  from 200+ reviews
                </Typography>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1604328727766-a151d1045ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="team work"
            className="lg:0 mb-8 h-96 w-full rounded-xl object-cover lg:h-[40rem] lg:w-1/2"
          />
        </div>
      </header>

      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="mb-20 grid lg:grid-cols-2">
            <div className="lg:pr-10">
              <img
                src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2996&q=80"
                alt="background image"
                className="h-full min-h-[20rem] w-full rounded-xl object-cover"
              />
            </div>
            <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-20">
              <Icon>
                <BoltIcon className="h-6 w-6" strokeWidth={2} />
              </Icon>
              <Typography variant="h3" color="blue-gray" className="mb-2">
                See our projects
              </Typography>
              <Typography
                color="blue-gray"
                variant="lead"
                className="mb-10 font-normal text-gray-700"
              >
                People are so scared to lose that they don&apos;t even try.
                Like, one thing people can&apos;t say is that I&apos;m not
                trying, and I&apos;m not trying my hardest.
              </Typography>
              <div className="flex gap-2">
                <Button
                  variant="outlined"
                  size="lg"
                  color="blue-gray"
                  className="flex items-center"
                >
                  <PlayCircleIcon
                    className="-mt-0.5 mr-1.5 h-6 w-6"
                    strokeWidth={2}
                  />
                  demo
                </Button>
                <Button size="lg">learn more</Button>
              </div>
            </div>
          </div>
          <div className="mb-20 grid lg:grid-cols-2">
            <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-20">
              <Icon>
                <ArrowsPointingOutIcon className="h-6 w-6" strokeWidth={2} />
              </Icon>
              <Typography variant="h3" color="blue-gray" className="mb-2">
                Read More About Us
              </Typography>
              <Typography
                color="blue-gray"
                variant="lead"
                className="mb-10 font-normal text-gray-700"
              >
                Pain is what we go through as we become older. We get insulted
                by others, lose trust for those others. We get back stabbed by
                friends. It becomes harder for us to give others a hand.
              </Typography>
              <div className="flex gap-2">
                <Button
                  variant="outlined"
                  size="lg"
                  color="blue-gray"
                  className="flex items-center"
                >
                  <PlayCircleIcon
                    className="-mt-0.5 mr-1.5 h-6 w-6"
                    strokeWidth={2}
                  />
                  demo
                </Button>
                <Button size="lg">learn more</Button>
              </div>
            </div>
            <div className="row-start-1 lg:row-auto lg:pl-10">
              <img
                src="https://images.unsplash.com/photo-1601933513793-1252ce25d644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="background image"
                className="h-full min-h-[20rem] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-8 lg:py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-3">
          <div className="col-span-1">
            <Typography color="blue" className="mb-2 !font-semibold">
              Our Team
            </Typography>
            <Typography variant="h2" color="blue-gray" className="mb-4">
              Leadership team
            </Typography>
            <Typography variant="lead" color="gray" className="mb-10 lg:mr-16">
              They&apos;re slowed down by their perception of themselves. If
              you&apos;re taught you can&apos;t do anything, you won&apos;t do
              anything.
            </Typography>
            <div className="flex flex-wrap gap-3">
              <Button variant="outlined" size="lg" color="blue-gray">
                about us
              </Button>
              <Button size="lg">open position</Button>
            </div>
          </div>
          <div className="col-span-2 grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
            {members.map((props, key) => (
              <TeamCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-8 lg:py-20">
        <div className="container mx-auto">
          <Card
            color="blue"
            shadow={false}
            className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
          >
            <CardBody className="py-20 px-14 md:w-7/12">
              <div className="mb-6 flex items-center">
                {[...Array(5).keys()].map((el, key) => (
                  <StarIcon className="h-6 w-6 text-yellow-600" key={key} />
                ))}
              </div>
              <Typography
                variant="h2"
                color="white"
                className="mb-10 font-normal"
              >
                &quot;We&apos;re not always in the position that we want to be
                at. We&apos;re constantly growing.
              </Typography>
              <Typography variant="lead" color="white">
                &#8212; Renee Wells
              </Typography>
              <Typography color="white" className="font-normal opacity-70">
                Product Designer, Quotient
              </Typography>
            </CardBody>
            <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                alt="testimonial image"
                className="h-full w-full object-cover md:absolute"
              />
            </div>
          </Card>
        </div>
      </section>

      <section className="py-8 px-8 lg:py-20">
        <div className="container mx-auto text-center">
          <Typography color="blue-gray" className="mb-8 font-medium opacity-60">
            Join 10K + companies already growing
          </Typography>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {logos.map((logo, key) => (
              <img
                key={key}
                src={`/logos/logo-${logo}.svg`}
                alt="logo"
                className="w-40"
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-10 px-8 pt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <Typography variant="h4" className="mb-6">
              Material Tailwind
            </Typography>
            <div className="grid grid-cols-3 justify-between gap-4">
              {links.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-3 font-medium opacity-40"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-end justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
            <div className="text-center md:text-start">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Move faster with Material Tailwind
              </Typography>
              <Typography color="gray" className="font-normal">
                Save countless hours of design and ship great looking designs
                faster.
              </Typography>
            </div>
            <Typography color="gray" className="text-center font-normal">
              &copy; {currentYear} Material Tailwind, All rights reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}
