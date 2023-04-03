import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

interface TestimonialCardPropsType {
  img: string;
  rating: number;
  feedback: string;
  client: string;
  title: string;
}

function TestimonialCard({
  img,
  rating,
  feedback,
  client,
  title,
}: TestimonialCardPropsType) {
  return (
    <Card color="transparent" shadow={false} className="p-8">
      <CardHeader floated={false} shadow={false} className="!m-0 !mb-8">
        <Avatar src={img} alt={client} size="xxl" className="h-48 w-48" />
      </CardHeader>
      <CardBody className="!p-0">
        <div className="mb-2 flex items-center">
          {[...Array(rating).keys()].map((el, key) => (
            <StarIcon className="h-5 w-5 text-yellow-600" key={key} />
          ))}
        </div>
        <Typography variant="h4" color="blue-gray" className="mb-6 font-bold">
          {feedback}
        </Typography>
        <Typography variant="lead" color="blue-gray" className="font-medium">
          &#8212; {client}
        </Typography>
        <Typography color="gray" className="font-normal">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    rating: 5,
    feedback:
      "The time is now for it to be okay to be great. People in this world shun people for being great.",
    client: "Renee Wells",
    title: "Product Designer, Quotient",
    img: "https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
  {
    rating: 4,
    feedback:
      "For being a bright color. For standing out. But the time is now to be okay to be the greatest you.",
    client: "Candice Wu",
    title: "Engineering Manager, Amazon",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    rating: 3,
    feedback:
      "Would you believe in what you believe in, if you were the only one who believed it?",
    client: "Olivia Rhye",
    title: "CEO & Founder, Quotient",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export function TestimonialSectionThree() {
  return (
    <section className="py-8 px-8 lg:py-10">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((props, key) => (
          <TestimonialCard key={key} {...props} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSectionThree;
