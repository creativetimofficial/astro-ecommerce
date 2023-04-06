import { Typography } from "@material-tailwind/react";

export function ContentSectionTwo() {
  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-md">
        <Typography variant="h2" color="blue-gray" className="mb-6">
          Introduction
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          It really matters and then like it really doesn&apos;t matter. What
          matters is the people who are sparked by it. And the people who are
          like offended by it, it doesn&apos;t matter. Because it&apos;s about
          motivating the doers. Because I&apos;m here to follow my dreams and
          inspire other people to follow their dreams, too.
          <br />
          <br />
          Society has put up so many boundaries, so many limitations on{" "}
          <a
            href="#"
            className="underline underline-offset-4 transition-colors hover:text-blue-500"
          >
            what&apos;s right and wrong
          </a>{" "}
          that it&apos;s almost impossible to get a pure thought out. It&apos;s
          like a little kid, a little boy, looking at colors, and no one told
          him what colors are good, before somebody tells you{" "}
          <a
            href="#"
            className="underline underline-offset-4 transition-colors hover:text-blue-500"
          >
            you shouldn&apos;t like pink
          </a>
          , because that&apos;s for girls, or you&apos;d instantly become a gay
          two-year-old.
        </Typography>
        <img
          src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="team work"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <Typography variant="small">
          Photo by Marvin Meyer on{" "}
          <a
            href="https://unsplash.com/s/photos/team?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-blue-500"
          >
            Unsplash
          </a>
        </Typography>
        <figure className="my-10 border-l-2 border-blue py-4 pl-6">
          <blockquote cite="#">
            <Typography
              variant="lead"
              color="blue-gray"
              className="mb-8 font-medium italic"
            >
              &quot;In a world older and more complete than ours they move
              finished and complete, gifted with extensions of the senses we
              have lost or never attained, living by voices we shall never
              hear.&quot;
            </Typography>
          </blockquote>
          <figcaption>
            <Typography color="gray" className="font-normal opacity-80">
              — Olivia Rhype, Product Designer
            </Typography>
          </figcaption>
        </figure>
        <Typography color="gray" className="font-normal">
          Why would anyone pick blue over pink? Pink is obviously a better
          color. Everyone&apos;s born confident, and everything&apos;s taken
          away from you{" "}
          <a
            href="#"
            className="underline underline-offset-4 transition-colors hover:text-blue-500"
          >
            If everything I did failed
          </a>{" "}
          which it doesn&apos;t, it actually succeeds - just the fact that
          I&apos;m willing to fail is an inspiration.
        </Typography>
      </div>
    </section>
  );
}

export default ContentSectionTwo;
