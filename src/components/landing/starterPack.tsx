import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function ContentSectionOne() {
  return (
    <ThemeProvider>
      <section className="py-16 px-8 lg:py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
            <Typography variant="h2" color="blue-gray" className="mb-6">
              Basic Starter Pack
            </Typography>
            <Typography variant="lead" color="gray" className="mb-12">
              I always felt like I could do anything. That&apos;s the main thing
              people are controlled by! They&apos;re slowed down by{" "}
              <a
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-blue-500"
              >
                their perception of themselves
              </a>
              . If you&apos;re taught you can&apos;t do anything, you won&apos;t
              do anything. I was taught I could do everything.
              <br />
              <br />
              The time is now for it to be okay to be great. For being a bright
              color. For standing out. But the time is now to be okay to{" "}
              <a
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-blue-500"
              >
                be the greatest you
              </a>
              . Would you believe in what you believe in, if you were the only one
              who believed it?
              <br />
              <br />
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </Typography>
            <div className="inline-flex flex-wrap gap-3">
              <Button variant="outlined" color="dark" size="lg">
                get in touch
              </Button>
              <Button color="dark" size="lg">our process</Button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1680285251132-e1c238bf5e75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="team work"
            className="max-h-[50vh] w-full rounded-xl object-cover object-center md:max-h-[75vh]"
          />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ContentSectionOne;
