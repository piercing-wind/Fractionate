import Image from "next/image"
import Animator from "./animator"
import Link from "next/link"
import { FadeText } from "./ui/fade-text"
import { Facebook, Instagram, Linkedin, Mail, MapPinHouse, MapPinned, Phone, Twitter } from "lucide-react"
import Watermark from "./watermark"

const LinkList = ({ title, links } : { title : string, links : {href : string, text : string}[] }) => (
  <ul className="flex flex-col gap-4 flex-shrink-0">
    <li className="font-semibold">{title}</li>
    {links.map((link : {href : string, text : string}, index :  number) => (
      <li key={index} className="">
        <Link href={link.href} className="hover:text-yellow">
          <FadeText
            text={link.text}
            framerProps={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { type: 'spring', delay: 0.1 * (index + 1) },
              },
            }}
          />
        </Link>
      </li>
    ))}
  </ul>
);

export const Footer = () => {
  const quickLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
   //  { href: '/listing', text: 'Listings' },
    { href: '/how-it-works', text: 'How it works' },
    { href: '/register', text: 'Register' },
    { href: '/contact', text: 'Contact' },
  ];

  const legalLinks = [
    { href: '/privacy-policy', text: 'Privacy Policy' },
    { href: '/terms-and-condition', text: 'Terms and Condition' },
    { href: '/disclaimer', text: 'Disclaimer' },
  ];

  return (
    <footer className="w-full overflow-y-hidden px-8 relative">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-8 items-start justify-between relative">
        <div className="flex flex-col gap-4 flex-shrink-0">
          <Link href='/'>
            <Animator className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Fractionate Logo"
                width={200}
                height={50}
                priority
              />
            </Animator>
          </Link>
          <div className="flex items-center gap-2 mt-4 hover:text-yellow">
            <Phone size={20} />
            <Link href="tel:917700008725"><FadeText text="+91 77000-08725" /></Link>
          </div>
          <div className="flex items-center gap-2 hover:text-yellow">
            <Mail size={20} />
            <Link href="mailto:info@fractionate.in"><FadeText text="info@fractionate.in" /></Link>
          </div>
          <div className=" pl-2">
          <div className="flex items-center gap-4 mb-2"><FadeText text="Head Office :" className="font-semibold -ml-2"/><MapPinned color="#ffa014" size={18}/></div>
            <FadeText text="SCO-81 D Block " />
            <FadeText text="Ranjit Avenue, Amritsar 143001" />
          </div>

        </div>
        <Animator className="sm:hidden">
          <div className="mb-8 pl-2">
            <div className="flex items-center gap-4 mb-2"><FadeText text="Branch Office :" className="font-semibold -ml-2"/><MapPinHouse color="#ffa014" size={18}/></div>
            <FadeText text="Spaze i-Tech Park, A1 Tower, Badshahpur Sohna Rd Hwy, Block S," className="flex flex-wrap text-wrap max-w-72" />
            <FadeText text="Sector 49, Gurugram, Haryana 122018" />
          </div>
          <p className="font-semibold">Connect With Us</p>
          <ul className="flex gap-6 items-center mt-4">
            <li><Link target="_blank" href='https://www.facebook.com/profile.php?id=61567832651862'><Facebook color="#ffa014" /></Link></li>
            <li><Link target="_blank" href='https://www.instagram.com/fractionate.in'><Instagram color="#ffa014" /></Link></li>
            <li><Link target="_blank" href='https://x.com/Fractionate_in'><Twitter color="#ffa014" /></Link></li>
            <li><Link target="_blank" href="https://wa.me/917700008725?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20your%20real%20estate%20services.%20Can%20you%20please%20assist%20me%3F"><Image src='/whatsapp.svg' alt="WhatsApp" width={20} height={20} /></Link></li>
          </ul>
          <Watermark className="hidden md:flex mt-8" />
        </Animator>

        <LinkList title="Quick Links" links={quickLinks} />
        <LinkList title="Legal" links={legalLinks} />

        <Animator className="hidden sm:block">
          <p className="font-semibold">Connect With Us</p>
          <ul className="flex gap-6 items-center mt-4">
            <li><Link target="_blank" href='https://www.facebook.com/profile.php?id=61567832651862'><Facebook color="#ffa014" /></Link></li>
            <li><Link target="_blank" href='https://www.instagram.com/fractionate.in'><Instagram color="#ffa014" /></Link></li>
            <li><Link target="_blank" href='https://x.com/Fractionate_in'><Twitter color="#ffa014" /></Link></li>
            <li><Link target="_blank" href="https://wa.me/917700008725?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20your%20real%20estate%20services.%20Can%20you%20please%20assist%20me%3F"><Image src='/whatsapp.svg' alt="WhatsApp" width={20} height={20} /></Link></li>
          </ul>
          <div className="mt-8 pl-2">
            <div className="flex items-center gap-4 mb-2"><FadeText text="Branch Office :" className="font-semibold -ml-2"/><MapPinHouse color="#ffa014" size={18}/></div>
            <FadeText text="Spaze i-Tech Park, A1 Tower, Badshahpur Sohna Rd Hwy, Block S," className="flex flex-wrap text-wrap max-w-72" />
            <FadeText text="Sector 49, Gurugram, Haryana 122018" />
          </div>
          <Watermark className="hidden md:flex mt-8" />
        </Animator>
      </div>
      <div className="w-full flex items-center justify-center py-4 mt-4">
        <p className="text-xs">© 2024 Fractionate. All rights reserved</p>
      </div>
      <Watermark className="w-full border-t pt-2 md:hidden" />
    </footer>
  );
}