import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Disclaimer - Fractionate | Legal Information",
   description: "Read Fractionate's Disclaimer for legal information about our real estate services. Understand the limitations of liability and terms related to property transactions.",
   metadataBase: new URL("https://fractionate.in/disclaimer"),
}

export default function Disclaimer() {
  return (
    <main className="w-full">
      <Header />
      <div className="max-w-5xl mx-auto w-full p-8 my-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow mb-4">Disclaimer</h1>
        <p className="mb-4">
          Fractionate is a platform, and by accessing this website or any pages thereof, you agree to be bound by its terms of service and privacy policy. Fractionate does not prima facie endorse or promote any of the opportunities listed on this website nor make any specific recommendations to any investor. Prospective investors should not construe anything on the website as investment, business, legal, or tax advice. The content provided herein does not constitute an offer by Fractionate to sell or subscribe to any securities. Any information made available on the website, or links to other websites, does not represent a solicitation of an offer to buy or sell any property. It does not constitute an offer to provide investment advice, services, or assistance with a particular investment or transaction. Investing in real property, directly or indirectly, involves significant risks, including the potential loss of value. Such investments are not insured by any government agency nor guaranteed by Fractionate or any other entity. It is the sole responsibility of the user to verify the authenticity and accuracy of all information provided. Any historical returns, expected returns, or projected probabilities mentioned do not guarantee actual future performance. Investors must ensure they can afford the potential losses associated with any investment. Nothing on this website should be construed as authorization by the Securities and Exchange Board of India (&ldquo;SEBI&rdquo;) to solicit investments. This platform is not a SEBI-authorized crowdfunding platform, stock exchange, or equivalent. The website is solely intended to provide services to registered users and does not aim to solicit investments from the public at large. By using or accessing the website, you agree to this disclaimer without qualification or limitation. Fractionate reserves the right to terminate, revoke, modify, alter, or delete any terms and conditions on the website without prior notice. All information on this website is presented as general information only, and no representation or warranty, express or implied, is provided regarding its accuracy. Nothing on this website constitutes advertising, marketing, booking, selling, an offer for sale, or an invitation to purchase any unit or securities.
        </p>
      </div>
      <Footer />
    </main>
  );
}