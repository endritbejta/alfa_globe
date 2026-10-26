import { Fuel, Zap, Droplets, FlaskConical, Container, Flame } from "lucide-react";
import gasolineNozzle from "../assets/img/gasolinenozzle.jpg";
import tanker from "../assets/img/tanker.jpg";
import highway from "../assets/img/highway.jpg";
import highway3 from "../assets/img/highway3.jpg";

export const products = [
  {
    slug: "diesel",
    name: "Diesel",
    category: "Fuel",
    icon: Fuel,
    image: tanker,
    summary:
      "Diesel to the EN 590 standard, for cars, trucks, tractors and generators.",
    description:
      "Our diesel meets the EN 590 standard that applies in Kosovo. It suits modern and older diesel engines, from passenger cars to trucks and farm machinery. Ask our team at any station or about a bulk order and we will help you with what you need.",
    applications: [
      "Commercial trucks and buses",
      "Agricultural machinery and tractors",
      "Construction equipment",
      "Diesel passenger vehicles",
      "Backup generators",
    ],
    advantages: [
      "Meets the EN 590 standard",
      "Available at our stations and in bulk",
      "Delivery note with every bulk delivery",
      "Advice from staff who know the product",
    ],
    specs: [
      { label: "Standard", value: "EN 590" },
    ],
  },
  {
    slug: "petrol",
    name: "Petrol",
    category: "Fuel",
    icon: Fuel,
    image: gasolineNozzle,
    summary:
      "Unleaded 95 petrol to the EN 228 standard, for cars, motorcycles and light vehicles.",
    description:
      "Our unleaded petrol meets the EN 228 standard used in Kosovo. It is the everyday fuel for petrol cars, motorcycles and small machinery, available at all four of our stations.",
    applications: [
      "Passenger cars and motorcycles",
      "Light commercial vehicles",
      "Small machinery and garden equipment",
    ],
    advantages: [
      "Meets the EN 228 standard",
      "95 octane unleaded",
      "Available at all four of our stations",
    ],
    specs: [
      { label: "Standard", value: "EN 228" },
      { label: "Octane", value: "95 (unleaded)" },
    ],
  },
  {
    slug: "premium-diesel",
    name: "Alfa Premium Diesel",
    category: "Premium fuel",
    icon: Zap,
    image: highway3,
    summary:
      "Our premium diesel with added additives, available at selected stations.",
    description:
      "Alfa Premium Diesel is EN 590 diesel with an additive package that helps keep injectors clean and the engine running smoothly. Ask our team at the station whether it suits your vehicle.",
    applications: [
      "Passenger and commercial diesel vehicles",
      "Drivers who cover many kilometres",
    ],
    advantages: [
      "Based on EN 590 diesel",
      "Additives to help keep the fuel system clean",
      "Available at selected stations",
    ],
    specs: [
      { label: "Base standard", value: "EN 590" },
      { label: "Availability", value: "Selected stations" },
    ],
  },
  {
    slug: "lubricants",
    name: "Lubricants",
    category: "Lubricants",
    icon: Droplets,
    image: null,
    summary:
      "Engine oils, gear oils and greases for cars, trucks and machinery.",
    description:
      "We supply a range of lubricants for passenger cars, commercial vehicles, and farm and construction machinery. Tell us your vehicle or equipment and our team will help you pick the right oil.",
    applications: [
      "Passenger car engines and gearboxes",
      "Commercial vehicle engines",
      "Agricultural and construction equipment",
    ],
    advantages: [
      "Advice from our staff",
      "Available in different pack sizes",
      "Can be added to your fuel order",
    ],
    specs: [
      { label: "Range", value: "Engine oils, gear oils, greases" },
      { label: "Packaging", value: "Ask us for sizes" },
    ],
  },
  {
    slug: "industrial-oils",
    name: "Industrial Oils",
    category: "Lubricants",
    icon: FlaskConical,
    image: null,
    summary:
      "Hydraulic, gear and compressor oils for workshops and industry.",
    description:
      "For workshops and industrial sites we can supply hydraulic, gear and compressor oils. Tell us the machine and the oil it needs, and we will confirm what we can supply and the pack size.",
    applications: [
      "Hydraulic systems",
      "Industrial gearboxes",
      "Compressors",
    ],
    advantages: [
      "Supplied to match your equipment",
      "Different pack sizes available",
      "Advice from our staff",
    ],
    specs: [
      { label: "Range", value: "Hydraulic, gear and compressor oils" },
      { label: "Packaging", value: "Ask us for sizes" },
    ],
  },
  {
    slug: "adblue",
    name: "AdBlue®",
    category: "Exhaust fluid",
    icon: Container,
    image: null,
    summary:
      "AdBlue® exhaust fluid for modern diesel vehicles, available at selected stations.",
    description:
      "AdBlue® is a urea solution that modern diesel vehicles with an SCR system need to meet emission rules. It is made to the ISO 22241 standard. Ask our team about pump and pack availability.",
    applications: [
      "Trucks and buses with SCR",
      "Diesel cars with SCR",
      "Agricultural machinery with SCR",
    ],
    advantages: [
      "Made to the ISO 22241 standard",
      "Available at selected stations",
      "Bulk supply on request",
    ],
    specs: [
      { label: "Standard", value: "ISO 22241" },
      { label: "Urea concentration", value: "32.5%" },
    ],
  },
  {
    slug: "lpg",
    name: "Gas (LPG)",
    category: "Fuel",
    icon: Flame,
    image: highway,
    summary:
      "Autogas (LPG) for vehicles converted to run on gas, a lower-cost alternative to petrol.",
    description:
      "LPG is a popular choice for drivers who cover a lot of kilometres and want to spend less on fuel. Ask our team at the station about availability and how to fill up safely.",
    applications: [
      "Passenger cars converted to LPG",
      "Light commercial vehicles",
      "Taxis and high-mileage drivers",
    ],
    advantages: [
      "Lower fuel cost than petrol",
      "Works alongside your existing petrol tank",
      "Staff on hand to help with first-time filling",
    ],
    specs: [
      { label: "Standard", value: "EN 589" },
      { label: "Use", value: "Vehicles converted to run on gas" },
    ],
  },
];

export const productsIntro = {
  eyebrow: "Products",
  title: "What we supply",
  lead: "Petrol, diesel, gas and AdBlue at our stations, plus lubricants and oils when you need them. Ask us about bulk orders.",
};
