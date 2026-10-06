import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, site } from "../../data/site";
import { stations } from "../../data/stations";
import logo from "../../assets/img/alfawhite.png";
import whatsapp from "../../assets/svg/whatsapp.svg";
import viber from "../../assets/svg/viber.svg";

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">{title}</h3>
    <ul className="mt-5 space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className="inline-block text-sm text-white/70 transition-[color,translate] duration-200 ease-out-expo hover:translate-x-1 hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-night-950 text-white">
    <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
      {/* Brand + contact */}
      <div>
        <Link to="/" className="flex items-center gap-3" aria-label="Alfa Trade — home">
          <img src={logo} alt="" className="h-10 w-10 object-contain" />
          <span className="text-lg font-extrabold uppercase tracking-[0.18em]">
            Alfa <span className="text-brand-500">Trade</span>
          </span>
        </Link>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
          Certified petroleum products, lubricants and bulk fuel distribution for businesses and
          industries — delivered safely and on time since 2014.
        </p>
        <ul className="mt-7 space-y-3 text-sm">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
            >
              <Mail size={15} className="shrink-0 text-brand-500" />
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
            >
              <Phone size={15} className="shrink-0 text-brand-500" />
              {site.phoneDisplay}
            </a>
          </li>
          <li className="flex items-start gap-3 text-white/70">
            <MapPin size={15} className="mt-0.5 shrink-0 text-brand-500" />
            {site.headquarters}
          </li>
        </ul>
        <div className="mt-7 flex items-center gap-3">
          <a
            href={site.facebook}
            aria-label="Alfa Trade on Facebook"
            className="ui-pressable grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 hover:scale-110 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
          >
            <Facebook size={16} />
          </a>
          <a
            href={site.instagram}
            aria-label="Alfa Trade on Instagram"
            className="ui-pressable grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 hover:scale-110 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
          >
            <Instagram size={16} />
          </a>
          <a
            href={site.whatsapp}
            aria-label="Chat on WhatsApp"
            className="ui-pressable grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:scale-110 hover:border-white/40 hover:bg-white/10"
          >
            <img src={whatsapp} alt="" className="h-4 w-4" />
          </a>
          <a
            href={site.viber}
            aria-label="Chat on Viber"
            className="ui-pressable grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:scale-110 hover:border-white/40 hover:bg-white/10"
          >
            <img src={viber} alt="" className="h-4 w-4" />
          </a>
        </div>
      </div>

      <FooterColumn title="Company" links={footerLinks.company} />
      <FooterColumn title="Services" links={footerLinks.services} />

      {/* Stations */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Our stations</h3>
        <ul className="mt-5 space-y-3">
          {stations.map((station) => (
            <li key={station.name}>
              <Link
                to="/locations"
                className="group block text-sm text-white/70 transition-[color,translate] duration-200 ease-out-expo hover:translate-x-1 hover:text-white"
              >
                <span className="font-semibold text-white/90 transition-colors duration-200 group-hover:text-brand-400">
                  {station.name}
                </span>
                <span className="block text-xs text-white/45">{station.address}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
        <p className="text-xs text-white/45">
          © {new Date().getFullYear()} Alfa Trade. All rights reserved.
        </p>
        <p className="text-xs text-white/45">{site.stationHours}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
