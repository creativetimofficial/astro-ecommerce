import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import {
  ArrowUpRightIcon,
  ArrowSmallDownIcon,
} from "@heroicons/react/24/outline";

interface BlogPostCardPropsType {
  img: string;
  tag: string;
  title: string;
  desc: string;
  author: { name: string; img: string };
  date: string;
}

function BlogPostCard({
  img,
  tag,
  title,
  desc,
  author,
  date,
}: BlogPostCardPropsType) {
  return (
    <Card>
      <CardHeader className="h-64">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        <Typography
          variant="small"
          color="blue"
          className="mb-1 !font-semibold"
        >
          {tag}
        </Typography>
        <a
          href="#"
          className="mb-1 grid grid-cols-6 items-baseline gap-2 text-blue-gray-900 transition-colors hover:text-blue-500"
        >
          <div className="col-span-5">
            <Typography variant="h5" className="normal-case">
              {title}
            </Typography>
          </div>
          <ArrowUpRightIcon
            className="ml-auto -mt-0.5 h-5 w-5"
            strokeWidth={2.5}
          />
        </a>
        <Typography color="gray" className="mb-8 font-normal">
          {desc}
        </Typography>
        <div className="flex items-center gap-3">
          <Avatar
            variant="circular"
            size="sm"
            src={author.img}
            alt={author.name}
          />
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="!font-semibold"
            >
              {author.name}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-xs font-normal"
            >
              {date}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

const posts = [
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    tag: "Management",
    title: "Katie's management lessons",
    desc: "Finding temporary housing for your dog should be as easy as renting an Airbnb.",
    date: "17 Apr 2023",
    author: {
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      name: "Alec Whitten",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    tag: "Product",
    title: "Rover raised to $65 million",
    desc: "That's the idea behind Rover, which raised $65 million to expand its products sitting.",
    date: "16 Apr 2023",
    author: {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      name: "Demi Wilkinson",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1523132797263-747d5d0dbbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    tag: "Design",
    title: "What is Prototyping?",
    desc: "If you've ever wanted to train a machine learning model and integrate it with IFTTT.",
    date: "15 Apr 2023",
    author: {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      name: "Candice Wu",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tag: "Strategy",
    title: "US venture investment tricks",
    desc: "Venture investment in U.S. startups rose sequentially in the second quarter boosted.",
    date: "14 Apr 2023",
    author: {
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      name: "Natali Craig",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    tag: "Development",
    title: "MLabs mixes machine learning",
    desc: "MateVerse, a platform where novices can spin out machine learning and few outsized.",
    date: "13 Apr 2023",
    author: {
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      name: "Alec Whitten",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    tag: "Customer Support",
    title: "5 Ways to improve your App",
    desc: "Create first, edit second. Never do them at the same time.",
    date: "12 Apr 2023",
    author: {
      img: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      name: "Orlando Diggs",
    },
  },
];

export function BlogSectionOne() {
  return (
    <section>
      <div className="text-center mb-24 w-1/2 mx-auto">
        <Typography variant="h2" className="normal-case text-4xl mb-3">
          Check out what's new
        </Typography>
        <Typography variant="p" className="text-lg">
          The time is now for it to be okay to be great. People in this world should. We get back freezes every winter
        </Typography>
      </div>
      <div className="mx-auto grid grid-cols-1 items-start gap-y-24 gap-x-8 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ img, tag, title, desc, date, author }) => (
          <BlogPostCard
            key={title}
            img={img}
            tag={tag}
            title={title}
            desc={desc}
            date={date}
            author={{
              img: author.img,
              name: author.name,
            }}
          />
        ))}
      </div>
      <div className="px-12 pb-20 text-center">
        <Button variant="text" className="inline-flex items-center pl-4">
          <ArrowSmallDownIcon className="mr-2 h-5 w-5" strokeWidth={2} />
          load more
        </Button>
      </div>
    </section>
  );
}

export default BlogSectionOne;
