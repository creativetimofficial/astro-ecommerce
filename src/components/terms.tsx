import React from "react";
 
import { Navbar, Typography, IconButton, Input, MobileNav, Checkbox, Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="font-normal transition-colors hover:text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function TermsConditions() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar
        className="absolute z-50 border-x-0 border-t-0 !border-b !border-blue-gray-50"
        shadow={false}
        fullWidth
      >
        <div className="container mx-auto flex items-center">
          <Typography color="blue-gray" className="!mb-0 !font-bold">
            Corporate UI
          </Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Resources</NavItem>
            <NavItem>Pricing</NavItem>
          </ul>
          <div className="ml-auto hidden gap-2 lg:flex">
            <Button variant="text" size="sm">
              login
            </Button>
            <Button size="sm">sign up</Button>
          </div>
          <IconButton
            size="sm"
            variant="text"
            color="blue-gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <MobileNav open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Resources</NavItem>
              <NavItem>Pricing</NavItem>
            </ul>
            <div className="mt-8 mb-4 flex gap-2">
              <Button variant="outlined" size="sm" fullWidth>
                login
              </Button>
              <Button size="sm" fullWidth>
                sign up
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
      <section className="pt-24 pb-12 px-8">
        <div className="mx-auto max-w-screen-lg">
          <Typography variant="h2" color="blue-gray" className="mb-6">
            Terms & conditions
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Welcome to Creative Tim!
            <br/><br/>
            These terms and conditions outline the rules and regulations for the use of Creative Tim's Website, located here.
            <br/><br/>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Creative Tim if you do not agree to take all of the terms and conditions stated on this page.
            <br/><br/>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            <br /><br/>
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-6">
            Cookies
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            We employ the use of cookies. By accessing Creative Tim, you agreed to use cookies in agreement with the Creative Tim's Privacy Policy.
            <br/><br/>
            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-6">
            License
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Unless otherwise stated, Creative Tim and/or its licensors own the intellectual property rights for all material on Creative Tim. All intellectual property rights are reserved. You may access this from Creative Tim for your own personal use subjected to restrictions set in these terms and conditions.
            <br/><br/>
            You must not:
            <br/><br/>
            &#x2022; Republish material from Creative Tim <br/>
            &#x2022; Sell, rent or sub-license material from Creative Tim <br/>
            &#x2022; Reproduce, duplicate or copy material from Creative Tim <br/>
            &#x2022; Redistribute content from Creative Tim <br/><br/>
            This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Generator and the Privacy Policy Generator.
            <br/><br/>
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Creative Tim does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Creative Tim,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Creative Tim shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            <br/><br/>
            Creative Tim reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            <br/><br/>
            You warrant and represent that:
            <br/><br/>
            &#x2022; You are entitled to post the Comments on our website and have all necessary licenses and consents to do so; <br/>
            &#x2022; The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party; <br/>
            &#x2022; The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy <br/>
            &#x2022; The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity. <br/> <br/>
            You hereby grant Creative Tim a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
          </Typography>
        </div>
      </section>
    </>
  );
}

export default TermsConditions;

