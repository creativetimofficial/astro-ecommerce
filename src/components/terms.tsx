import ThemeProvider from "./theme-provider";
import Navbar from "./defaultNavbar"
 
import { 
  Card,
  CardBody, 
  Typography,  
} from "@material-tailwind/react";


export function TermsConditions() {
  return (
    <ThemeProvider>
      <Navbar />
      <section className="flex pt-24 pb-12 px-44">
        <div className="w-1/4 ml-auto">
          <Card className="w-full">
            <CardBody>
              <a href="#general">
                <Typography variant="h6" className="mb-2">
                  General
                </Typography>
              </a>
              <a href="#cookies">
                <Typography variant="h6" className="mb-2">
                  Cookies
                </Typography>
              </a>
              <a href="#license">
                <Typography variant="h6" className="mb-2">
                  License
                </Typography>
              </a>
              <a href="#hyperlink">
                <Typography variant="h6" className="mb-2">
                  Hyperlink
                </Typography>
              </a>
              <a href="#iframes">
                <Typography variant="h6" className="mb-2">
                  iFrames
                </Typography>
              </a>
              <a href="#liability">
                <Typography variant="h6" className="mb-2">
                  Liability
                </Typography>
              </a>
              <a href="#disclaimer">
                <Typography variant="h6" className="mb-2">
                  Disclaimer
                </Typography>
              </a>
            </CardBody>
          </Card>
        </div>
        <div className="w-2/3 ml-12 mr-auto">
          <Card>
            <CardBody>
              <Typography id="general" variant="h2" color="blue-gray" className="mb-6">
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

              <Typography id="cookies" variant="h2" color="blue-gray" className="mb-6">
                Cookies
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                We employ the use of cookies. By accessing Creative Tim, you agreed to use cookies in agreement with the Creative Tim's Privacy Policy.
                <br/><br/>
                Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
              </Typography>

              <Typography id="license" variant="h2" color="blue-gray" className="mb-6">
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

              <Typography id="hyperlink" variant="h2" color="blue-gray" className="mb-6">
                Hyperlinking to our Content
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                The following organizations may link to our Website without prior written approval:
                <br/><br/>
                You must not:
                <br/><br/>
                &#x2022; Government agencies; <br/>
                &#x2022; Search engines; <br/>
                &#x2022; News organizations; <br/>
                &#x2022; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and <br/>
                &#x2022; System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site. <br/>
                <br/><br/>
                These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.     
              </Typography>

              <Typography id="iframes" variant="h2" color="blue-gray" className="mb-6">
                iFrames
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
              </Typography>

              <Typography id="liability" variant="h2" color="blue-gray" className="mb-6">
                Content Liability
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
              </Typography>

              <Typography variant="h2" color="blue-gray" className="mb-6">
                Your Privacy
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Please read Privacy Policy
              </Typography>

              <Typography variant="h2" color="blue-gray" className="mb-6">
                Reservation of Rights
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
              </Typography>

              <Typography variant="h2" color="blue-gray" className="mb-6">
                Removal of links from our website
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                <br/><br/>
                We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
              </Typography>

              <Typography id="disclaimer" variant="h2" color="blue-gray" className="mb-6">
                Disclaimer
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                <br/><br/>
                &#x2022; limit or exclude our or your liability for death or personal injury; <br/>
                &#x2022; limit or exclude our or your liability for fraud or fraudulent misrepresentation; <br/>
                &#x2022; limit any of our or your liabilities in any way that is not permitted under applicable law; or <br/>
                &#x2022; exclude any of our or your liabilities that may not be excluded under applicable law. <br/>
                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                <br/><br/>
                As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default TermsConditions;

