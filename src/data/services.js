import {
  Fuel,
  Truck,
  Container,
  CreditCard,
  Factory,
  Droplets,
  Route,
  FileText,
  AlarmClockCheck,
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
      "A fuel programme for transport and logistics companies: fuel cards accepted across our network, consolidated invoicing and per-vehicle consumption reporting.",
    benefits: [
      "One monthly invoice for the whole fleet",
      "Per-vehicle and per-driver reporting",
      "Discounted contract pricing",
    ],
    process: [
      "We register your vehicles and issue fuel cards.",
      "Drivers refuel at any Alfa Trade station.",
      "You receive consolidated invoices and usage reports.",
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
    slug: "logistics",
    icon: Route,
    title: "Logistics Services",
    description:
      "Our own ADR-certified tanker fleet and experienced drivers move fuel safely between terminals, stations and customer sites across Kosovo and the region.",
    benefits: [
      "ADR-certified vehicles and drivers",
      "GPS-tracked deliveries",
      "Regional cross-border capability",
    ],
    process: [
      "Route and risk assessment for each lane.",
      "Scheduling integrated with terminal loading.",
      "Live tracking and delivery confirmation.",
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
    slug: "emergency-supply",
    icon: AlarmClockCheck,
    title: "Emergency Fuel Supply",
    description:
      "24/7 response for generator failures, unexpected demand and supply disruptions — because hospitals, data rooms and cold chains cannot wait until morning.",
    benefits: [
      "24/7 emergency dispatch line",
      "Priority response for critical infrastructure",
      "Standby agreements available",
    ],
    process: [
      "Call the emergency line at any hour.",
      "The nearest loaded tanker is dispatched.",
      "Root-cause review to prevent repeat events.",
    ],
  },
];

export const servicesIntro = {
  eyebrow: "Ways to buy",
  title: "From a single fill to a managed fuel programme",
  lead: "Refuel at our stations, schedule tanker deliveries, equip your drivers with fleet cards or build a contracted supply plan around your consumption.",
};
