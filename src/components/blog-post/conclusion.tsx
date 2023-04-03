import { Typography, Chip, Button, IconButton } from "@material-tailwind/react";
import { Square2StackIcon } from "@heroicons/react/24/outline";

export function ContentSectionThree() {
  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-md">
        <img
          src="https://images.unsplash.com/photo-1604328703693-18313fe20f3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
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
        <Typography color="gray" className="my-12 font-normal">
          The time is now for it to be okay to be great. People in this world
          shun people for being great. For being a bright color. For standing
          out. But the time is now to be okay to be the greatest you. Would you
          believe in what you believe in, if you were the only one who believed
          it?
          <br />
          <br />
          If everything I did failed - which it doesn&apos;t, it actually
          succeeds - just the fact that I&apos;m willing to fail is an
          inspiration. People are so scared to lose that they don&apos;t even
          try. Like, one thing people can&apos;t say is that I&apos;m not
          trying, and I&apos;m not trying my hardest, and I&apos;m not trying to
          do the best way I know how.
        </Typography>

        <Typography variant="h2" color="blue-gray" className="mb-6">
          Conclusion
        </Typography>
        <Typography color="gray" className="mb-10 font-normal">
          There&apos;s nothing I really wanted to do in life that I wasn&apos;t
          able to get good at. That&apos;s my skill. I&apos;m not really
          specifically talented at anything except for the ability to learn.
          That&apos;s what I do. That&apos;s what I&apos;m here for. Don&apos;t
          be afraid to be wrong because you can&apos;t learn anything from a
          compliment.
          <br />
          <br />
          It really matters and then like it really doesn&apos;t matter. What
          matters is the people who are sparked by it. And the people who are
          like offended by it, it doesn&apos;t matter. Because it&apos;s about
          motivating the doers. Because I&apos;m here to follow my dreams and
          inspire other people to follow their dreams, too.
          <br />
          <br />
          As we live, our hearts turn colder. Cause pain is what we go through
          as we become older. We get insulted by others, lose trust for those
          others. We get back stabbed by friends. It becomes harder for us to
          give others a hand. We get our heart broken by people we love, even
          that we give them all we have. Then we lose family over time. What
          else could rust the heart more over time? Blackgold.
          <br />
          <br />
          Society has put up so many boundaries, so many limitations on
          what&apos;s right and wrong that it&apos;s almost impossible to get a
          pure thought out.
        </Typography>
        <div className="flex flex-wrap justify-between gap-6 border-t border-blue-gray-50 py-4">
          <div className="inline-flex items-center gap-2">
            <Chip
              color="teal"
              value="product"
              className="!rounded-full !px-3 !py-1.5"
            />
            <Chip
              color="pink"
              value="tools"
              className="!rounded-full !px-3 !py-1.5"
            />
            <Chip
              color="red"
              value="saas"
              className="!rounded-full !px-3 !py-1.5"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              className="flex items-center"
            >
              <Square2StackIcon className="mr-2 h-5 w-5" strokeWidth={2} />
              copy link
            </Button>
            <IconButton variant="outlined" color="blue-gray">
              <i className="fa-brands fa-twitter text-lg not-italic"></i>
            </IconButton>
            <IconButton variant="outlined" color="blue-gray">
              <i className="fa-brands fa-facebook text-lg not-italic"></i>
            </IconButton>
            <IconButton variant="outlined" color="blue-gray">
              <i className="fa-brands fa-linkedin text-lg not-italic"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSectionThree;
