import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { color } from "@material-tailwind/react/types/components/chip";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface BlogPostCardPropsType {
  img: string;
  tags: { color: color; value: string }[];
  title: string;
  desc: string;
  author: string;
  date: string;
}

function BlogPostCard({
  img,
  author,
  date,
  title,
  desc,
  tags,
}: BlogPostCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-8 h-56">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="p-0">
        <Typography
          variant="small"
          color="blue"
          className="mb-3 !font-semibold"
        >
          {author}&nbsp;&bull;&nbsp;{date}
        </Typography>
        <a
          href="#"
          className="grid grid-cols-6 items-baseline gap-2 text-blue-gray-900 transition-colors hover:text-blue-500"
        >
          <div className="col-span-5">
            <Typography variant="h4" className="normal-case">
              {title}
            </Typography>
          </div>
          <ArrowUpRightIcon className="ml-auto h-5 w-5" strokeWidth={3} />
        </a>
        <Typography color="gray" className="mb-6 font-normal">
          {desc}
        </Typography>
        <div className="flex items-center gap-2">
          {tags.map(({ color, value }) => (
            <Chip
              key={value}
              color={color}
              value={value}
              className="!rounded-full !px-3 !py-1.5"
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

const posts = [
  {
    img: "https://images.unsplash.com/photo-1486728297118-82a07bc48a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2429&q=80",
    author: "Alec Whitten",
    date: "17 Jan 2022",
    title: "Search and Discover",
    desc: "As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others.",
    tags: [
      { color: "blue", value: "lifestyle" },
      { color: "indigo", value: "research" },
      { color: "pink", value: "health" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
    author: "Demi Wilkinson",
    date: "16 Jan 2022",
    title: "US investment ticks up",
    desc: "Venture investment in U.S. startups rose sequentially in the second quarter of 2022, boosted by large, ate-stage financings.",
    tags: [
      { color: "teal", value: "product" },
      { color: "pink", value: "tools" },
      { color: "red", value: "sass" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1548611716-3000815a5803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    author: "Candice Wu",
    date: "15 Jan 2022",
    title: "Web3 startups $5M",
    desc: "Insticator is announcing that it has raised $5.2 million in Series A funding. The startup allows online publishers to add quizzes.",
    tags: [
      { color: "green", value: "software development" },
      { color: "pink", value: "tools" },
    ],
  },
];

export function BlogSectionThree() {
  return (
    <ThemeProvider>
      <section>
        <div className="container mx-auto px-8 py-10">
          <div className="mb-16 text-center">
            <Typography color="blue" className="mb-2 !font-semibold">
              Latest Posts
            </Typography>
            <Typography variant="h2" color="blue-gray">
              Astro Ecommerce
            </Typography>
            <Typography variant="lead" color="gray">
              Interviews, tips, guides, industry best practices, and news.
            </Typography>
          </div>

          <div className="grid grid-cols-1 items-start gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ img, author, date, title, desc, tags }: any) => (
              <BlogPostCard
                key={title}
                img={img}
                author={author}
                date={date}
                title={title}
                desc={desc}
                tags={tags}
              />
            ))}
          </div>
        </div>
        <div className="px-12 pb-20 text-center">
          <Button color="dark" size="lg">view all posts</Button>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default BlogSectionThree;
