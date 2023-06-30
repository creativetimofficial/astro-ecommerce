import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function AstroSection() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="red"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="py-20 px-14 md:w-7/12">
            <Typography color="white" className="font-normal opacity-70">
              Open Source
            </Typography>
            <Typography
              variant="h2"
              color="white"
              className="mb-5 font-normal"
            >
              Let's join forces for a better web!
            </Typography>
            <Typography variant="lead" color="white">
              Astro Ecommerce is an open source and powerful design system that lets you create Ecommerce websites that your users will love.
            </Typography>
            <a href="https://github.com/creativetimofficial/astro-ecommerce">
              <Button color="white" size="sm" variant="outlined" className="flex items-center mt-5">
                Get Started
              </Button>
            </a>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            <img
              src="https://www.creative-tim.com/astro/assets/img/github.png"
              alt="github"
              className="h-full w-full object-cover md:absolute"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
