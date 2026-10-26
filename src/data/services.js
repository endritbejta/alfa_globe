import {
  Fuel,
  Container,
  CreditCard,
  Factory,
  Droplets,
  FileText,
  ClipboardCheck,
} from "lucide-react";

export const services = [
  {
    slug: "fuel-supply",
    icon: Fuel,
    title: "Fuel Supply",
    description:
      "Consistent, quality-certified diesel and petrol supply for retail stations, commercial sites and public institutions, backed by long-standing relationships with regional refineries and terminals.",
    benefits: [
      "EN 590 and EN 228 certified fuels",
      "Guaranteed volumes under contract",
      "Transparent, market-indexed pricing",
    ],
    process: [
      "We assess your consumption profile and storage capacity.",
      "We agree volumes, delivery windows and pricing structure.",
      "Scheduled deliveries begin with full quality documentation.",
    ],
  },
  {
    slug: "bulk-delivery",
    icon: Container,
    title: "Bulk Fuel Delivery",
    description:
      "Direct-to-site tanker deliveries for construction sites, farms, generators and storage tanks — metered, sealed and documented from terminal to your tank.",
    benefits: [
      "Calibrated, metered discharge on every drop",
      "Deliveries scheduled around your operations",
      "Sealed compartments with delivery notes",
    ],
    process: [
      "Order by phone or through your account manager.",
      "We confirm the delivery window and tanker size.",
      "Metered discharge with signed proof of delivery.",
    ],
  },
  {
    slug: "fleet-solutions",
    icon: CreditCard,
    title: "Fleet Fuel Solutions",
    description:
      "A simple fuel plan for businesses with several vehicles: agreed prices, one monthly invoice and a clear record of what each vehicle uses.",
    benefits: [
      "One monthly invoice for all your vehicles",
      "A clear record of fuel used per vehicle",
      "Agreed contract pricing",
    ],
    process: [
      "We note down your vehicles and agree a price with you.",
      "Your drivers refuel at our stations.",
      "You get one invoice and a summary of what was used.",
    ],
  },
  {
    slug: "industrial-energy",
    icon: Factory,
    title: "Industrial Fuel Supply",
    description:
      "Heating oil, generator diesel and process fuels for manufacturing plants, hospitals, greenhouses and facilities that cannot afford downtime.",
    benefits: [
      "Priority scheduling for critical facilities",
      "Storage tank monitoring and refill planning",
      "Technical support on fuel handling",
    ],
    process: [
      "Site survey of your storage and consumption.",
      "Automatic refill thresholds are agreed.",
      "We keep your tanks topped up — no stock-outs.",
    ],
  },
  {
    slug: "lubricants",
    icon: Droplets,
    title: "Lubricants & Oils",
    description:
      "Engine oils, hydraulic fluids, transmission oils and greases for passenger, commercial and heavy plant applications, supplied in packs, drums or IBCs.",
    benefits: [
      "OEM-approved specifications",
      "Application advice from trained staff",
      "Pack sizes from 1 L to 1,000 L IBC",
    ],
    process: [
      "Tell us your equipment and OEM requirements.",
      "We match the right specification and pack size.",
      "Delivery alongside your regular fuel drops.",
    ],
  },
  {
    slug: "commercial-contracts",
    icon: FileText,
    title: "Commercial Fuel Contracts",
    description:
      "Fixed-term supply agreements that protect your business from price volatility, with volume commitments matched to your annual consumption.",
    benefits: [
      "Budget certainty on fuel costs",
      "Flexible fixed or indexed pricing",
      "Dedicated account management",
    ],
    process: [
      "We review 12 months of consumption data.",
      "A pricing structure is tailored to your risk appetite.",
      "Quarterly reviews keep the contract fair.",
    ],
  },
  {
    slug: "vehicle-inspection",
    icon: ClipboardCheck,
    title: "Vehicle Technical Inspection",
    description:
      "Alfa Trade runs its own technical inspection centre for vehicles, so you can have your car or commercial vehicle checked in the same place you refuel.",
    benefits: [
      "Our own technical inspection centre",
      "Passenger and commercial vehicles",
      "Inspection and refuelling with one company",
    ],
    process: [
      "Call or visit us to book an inspection.",
      "Your vehicle is checked by our inspection team.",
      "You receive the result and any follow-up notes.",
    ],
  },
];

export const servicesIntro = {
  eyebrow: "Ways to buy",
  title: "From a single fill to a managed fuel programme",
  lead: "Refuel at our stations, have fuel delivered to your site, or set up a supply plan around how much you use.",
};
