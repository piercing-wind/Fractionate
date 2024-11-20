import { ClientReviews } from "@/components/clientReviews";
import { ContactBanner } from "@/components/contactBanner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import HeroSection from "@/components/herosection";
import { InvestmentOptions } from "@/components/investmentOptions";
import { OurListing } from "@/components/listing";
import { OurTeam } from "@/components/ourTeam";
import { Properties } from "@/components/properties";
import { WhoWeAre } from "@/components/whoweare";

export default function Home() {
  return (
    <div className="">
      <main className="w-full overflow-x-hidden" style={{scrollbarWidth : 'none'}}>
         <Header />
         <HeroSection/>
         <WhoWeAre/>
         <OurListing />
         <InvestmentOptions />
         <Properties />
         <OurTeam />
         <ClientReviews />
         <ContactBanner />
         <Footer />
      </main>
   
    </div>
  );
}
