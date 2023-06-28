import { Typography } from "@material-tailwind/react";

const logos = [
  "microsoft",
  "cisco",
  "ibm",
  "amazon",
  "salesforce",
  "vodafone",
];

export function LogoSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography
          color="blue-gray"
          className="text-lg font-bolder mb-8"
        >
          Trusted by the best companies
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
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
