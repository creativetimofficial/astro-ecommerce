import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  CheckIcon,
  BoltIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";

function Icon({ children }) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white shadow">
      {children}
    </div>
  );
}

function ListItem({ children }) {
  return (
    <div className="flex items-center gap-3">
      <div className="inline-block rounded-full bg-dark p-1 text-white">
        <CheckIcon className="h-4 w-4" strokeWidth={3} />
      </div>
      <Typography color="blue-gray" className="font-normal text-gray-700">
        {children}
      </Typography>
    </div>
  );
}

export function FeatureSectionTwo() {
  return (
    <section className="py-10">
      <div className="mb-20 grid lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="delive instant answers"
          className="h-full w-full object-cover lg:rounded-tr-xl lg:rounded-br-xl"
        />
        <div className="grid w-full items-center p-10 md:p-20 xl:w-10/12">
          <Icon>
            <BoltIcon className="h-6 w-6" strokeWidth={2} />
          </Icon>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Get your own app
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 font-normal text-blue-gray-800"
          >
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever.
          </Typography>
          <ul className="flex flex-col gap-4 pl-2">
            <ListItem>Showcase and embed your work with</ListItem>
            <ListItem>Publish across social channels in a click</ListItem>
            <ListItem>Sell your videos worldwide with this app</ListItem>
          </ul>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="row-start-2 grid w-full items-center p-10 md:p-20 lg:row-auto xl:w-10/12">
          <Icon>
            <ArrowsPointingOutIcon className="h-6 w-6" strokeWidth={2} />
          </Icon>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Medium Length Headline
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 font-normal text-blue-gray-800"
          >
            Change the color to match your brand or vision, add your logo,
            choose the perfect thumbnail, remove the playbar, add controls.
          </Typography>
          <ul className="flex flex-col gap-4 pl-2">
            <ListItem>
              Creativity starts with an empty calendar and ends with a full one.
            </ListItem>
            <ListItem>
              We get insulted by others, lose trust for those We get back.
            </ListItem>
            <ListItem>
              When playing, surround yourself with people happier than you.
            </ListItem>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW0lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="manage your team with reports"
          className="h-full w-full object-cover lg:rounded-tl-xl lg:rounded-bl-xl"
        />
      </div>
    </section>
  );
}

export default FeatureSectionTwo;
