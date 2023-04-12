import { 
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography, 
  Input
} from "@material-tailwind/react";
import Navbar from "./defaultNavbar"
import ThemeProvider from "./theme-provider";

export function Reset() {
  return (
    <ThemeProvider>
      <Navbar />
      <section className="h-screen w-full p-4">
        <div className="relative h-[50vh] w-full overflow-hidden rounded-xl mt-14">
          <img
            src="https://images.unsplash.com/photo-1651238029038-1922acc3abfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="background image"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/25" />
        </div>
        <div className="container mx-auto -mt-32 grid justify-center">
          <Card className="mx-4 md:w-[26rem]">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid place-items-center py-8 px-4 text-center"
            >
              <Typography variant="h3" color="white" className="mb-2">
                Reset Password
              </Typography>
              <Typography variant="small" color="white" className="font-normal">
                You will receive an e-mail in maximum 60 seconds
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                variant="static"
                label="Email"
                size="lg"
                placeholder="john@example.com"
              />
              <Button className="mt-4" fullWidth>
                Reset
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
    
    </ThemeProvider>
  );
}

export default Reset;
