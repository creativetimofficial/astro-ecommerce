import { Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function TestimonialSectionOne() {
  return (
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
              &quot;We&apos;sre not always in the position that we want to be
              at. We&apo;sre constantly growing.
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
  );
}

export default TestimonialSectionOne;
