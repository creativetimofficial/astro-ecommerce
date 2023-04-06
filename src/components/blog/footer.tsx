import { Typography } from "@material-tailwind/react";

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

export function FooterTwo() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h4" className="mb-6">
            Astro Ecommerce
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
              Move faster with Astro Ecommerce
            </Typography>
            <Typography color="gray" className="font-normal">
              Save countless hours of design and ship great looking designs
              faster.
            </Typography>
          </div>
          <Typography color="gray" className="text-center font-normal">
            &copy; {currentYear} Astro Ecommerce, All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default FooterTwo;
