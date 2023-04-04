import { Typography } from "@material-tailwind/react";

const logos = [
  "amazon",
  "coinbase",
  "google",
  "netflix",
  "pinterest",
  "spotify",
];

export function LogoSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography
          color="blue-gray"
          className="mb-8 font-medium opacity-60"
        >
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
  );
}

export default LogoSectionOne;
