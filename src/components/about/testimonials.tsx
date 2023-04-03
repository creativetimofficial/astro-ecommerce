import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function TestimonialSectionTwo() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="transparent"
          shadow={false}
          className="grid grid-cols-5 items-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            className="col-span-full mr-8 mb-8 h-[24rem] lg:col-span-2 lg:mr-16 lg:mb-0 xl:mr-28"
          >
            <img
              src="https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
              alt="testimonial image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="col-span-full lg:col-span-3">
            <div className="mb-6 flex items-center">
              {[...Array(5).keys()].map((el, key) => (
                <StarIcon className="h-6 w-6 text-yellow-600" key={key} />
              ))}
            </div>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-10 font-medium"
            >
              Let the brain, muscles, nerves, every part of your body, be full
              of that idea, and just leave every other idea alone. This is the
              way to success.
            </Typography>
            <Typography
              variant="lead"
              color="blue-gray"
              className="font-medium"
            >
              &#8212; Candice Wu
            </Typography>
            <Typography color="gray" className="font-normal">
              Head of Design, Layers
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSectionTwo;
