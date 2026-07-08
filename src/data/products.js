import { Fuel, Zap, Droplets, FlaskConical, Container, Truck } from "lucide-react";
import gasolineNozzle from "../assets/img/gasolinenozzle.jpg";
import tanker from "../assets/img/tanker.jpg";
import highway from "../assets/img/highway.jpg";
import highway3 from "../assets/img/highway3.jpg";

export const products = [
  {
    slug: "diesel",
    name: "Diesel (EN 590)",
    category: "Fuel",
    icon: Fuel,
    image: tanker,
    summary:
      "Ultra-low-sulphur diesel meeting the EN 590 standard, suitable for modern common-rail engines, commercial fleets and agricultural machinery.",
    description:
      "Our diesel is sourced exclusively from certified regional terminals and tested at loading and on delivery. With a sulphur content below 10 ppm and full seasonal grade management, it protects modern injection systems while delivering consistent performance in trucks, buses, tractors and passenger vehicles alike.",
    applications: [
      "Commercial trucks and bus fleets",
      "Agricultural machinery and tractors",
      "Construction plant and equipment",
      "Diesel passenger vehicles",
      "Backup generators",
    ],
    advantages: [
      "Sulphur content below 10 ppm protects after-treatment systems",
      "Winter grade supplied automatically from November to March",
      "Certificate of quality available with every delivery",
      "Consistent cetane performance for reliable cold starts",
    ],
    specs: [
      { label: "Standard", value: "EN 590" },
      { label: "Sulphur content", value: "≤ 10 mg/kg" },
      { label: "Cetane number", value: "≥ 51" },
      { label: "Density at 15 °C", value: "820–845 kg/m³" },
      { label: "Winter CFPP", value: "up to −20 °C" },
    ],
  },
  {
    slug: "petrol",
    name: "Petrol 95 (EN 228)",
    category: "Fuel",
    icon: Fuel,
    image: gasolineNozzle,
    summary:
      "Unleaded 95-octane petrol to the EN 228 standard, filtered and quality-checked from terminal to nozzle for clean, dependable combustion.",
    description:
      "Alfa Globe unleaded petrol meets the full EN 228 specification for modern spark-ignition engines. Strict housekeeping across our storage and station network — regular tank cleaning, filter changes and water checks — means the fuel that reaches your engine is as clean as the fuel that left the refinery.",
    applications: [
      "Passenger cars and motorcycles",
      "Light commercial vehicles",
      "Small machinery and garden equipment",
      "Marine leisure engines",
    ],
    advantages: [
      "Full EN 228 compliance verified by independent laboratories",
      "Detergent additive package keeps injectors clean",
      "Stable octane rating across the network",
      "Ethanol content managed to specification",
    ],
    specs: [
      { label: "Standard", value: "EN 228" },
      { label: "Research octane (RON)", value: "≥ 95" },
      { label: "Sulphur content", value: "≤ 10 mg/kg" },
      { label: "Density at 15 °C", value: "720–775 kg/m³" },
    ],
  },
  {
    slug: "premium-diesel",
    name: "Alfa Premium Diesel",
    category: "Premium fuel",
    icon: Zap,
    image: highway3,
    summary:
      "Additivated premium diesel with enhanced detergency and cetane boost — cleaner injectors, better fuel economy and quieter running for demanding fleets.",
    description:
      "Alfa Premium Diesel starts as EN 590 diesel and adds a multifunctional additive package: detergents that clean and keep injectors clean, a cetane improver for sharper combustion, anti-foam for faster filling and a corrosion inhibitor that protects the fuel system. Fleets running high annual mileages see the difference in consumption and maintenance intervals.",
    applications: [
      "Long-haul transport fleets",
      "Premium passenger vehicles",
      "Operators focused on fuel economy",
      "Vehicles with high annual mileage",
    ],
    advantages: [
      "Up to 3% fuel-economy improvement in fleet trials",
      "Removes existing injector deposits within tanks of use",
      "Improved cold-start behaviour and quieter combustion",
      "Reduced foaming for faster, cleaner refuelling",
    ],
    specs: [
      { label: "Base standard", value: "EN 590" },
      { label: "Cetane number", value: "≥ 55 (boosted)" },
      { label: "Detergency", value: "Keep-clean & clean-up" },
      { label: "Availability", value: "All Alfa Globe stations" },
    ],
  },
  {
    slug: "lubricants",
    name: "Lubricants",
    category: "Lubricants",
    icon: Droplets,
    image: null,
    summary:
      "Engine oils, transmission fluids and greases from OEM-approved ranges, covering passenger vehicles through to heavy commercial and off-road plant.",
    description:
      "We stock a curated range of lubricants covering the specifications that matter in our market — ACEA and API grades for European and global fleets, heavy-duty engine oils for commercial transport, and multi-purpose greases for plant and agriculture. Our staff are trained to match the right product to your equipment, so you never over- or under-specify.",
    applications: [
      "Passenger car engine and gearbox service",
      "Heavy-duty commercial engines",
      "Agricultural and construction equipment",
      "Industrial gearboxes and bearings",
    ],
    advantages: [
      "OEM approvals: ACEA, API, MB, VW, MAN, Volvo",
      "Pack sizes from 1 L retail to 208 L drums",
      "Application guidance from trained staff",
      "Delivered alongside your fuel order",
    ],
    specs: [
      { label: "Engine oils", value: "0W-20 to 15W-40" },
      { label: "Standards", value: "ACEA A/B/C/E, API SP/CK-4" },
      { label: "Packaging", value: "1 L – 208 L" },
    ],
  },
  {
    slug: "industrial-oils",
    name: "Industrial Oils",
    category: "Lubricants",
    icon: FlaskConical,
    image: null,
    summary:
      "Hydraulic, gear, compressor and turbine oils for manufacturing and processing industries, supplied in drums and IBCs with full technical data sheets.",
    description:
      "For plants and processors, we supply the industrial lubricants that keep production lines moving: HLP/HVLP hydraulic oils, CLP gear oils, compressor and turbine oils, and food-grade options where required. Every product ships with its technical and safety data sheets, and we help you build sensible lubrication schedules that extend equipment life.",
    applications: [
      "Hydraulic systems and presses",
      "Industrial gearboxes",
      "Air compressors and turbines",
      "Metalworking and processing lines",
    ],
    advantages: [
      "ISO VG grades held in local stock",
      "Technical and safety data sheets with every order",
      "Drum and IBC supply with deposit return",
      "Lubrication survey available for larger plants",
    ],
    specs: [
      { label: "Hydraulic oils", value: "HLP/HVLP, ISO VG 32–68" },
      { label: "Gear oils", value: "CLP, ISO VG 68–320" },
      { label: "Packaging", value: "20 L, 208 L, 1,000 L IBC" },
    ],
  },
  {
    slug: "adblue",
    name: "AdBlue®",
    category: "Exhaust fluid",
    icon: Container,
    image: null,
    summary:
      "ISO 22241-certified urea solution for SCR diesel systems, available at the pump, in packs and in bulk for depots — keeping Euro 6 fleets compliant.",
    description:
      "AdBlue® is essential for every modern SCR-equipped diesel. Ours is produced and handled to ISO 22241, which matters: contaminated urea solution is one of the most common causes of SCR system failure. We dispense it at station pumps, sell it in 10 L packs, and deliver in bulk to fleet depots with dispensing equipment on request.",
    applications: [
      "Euro 5/6 trucks and buses",
      "SCR-equipped passenger diesels",
      "Agricultural machinery with SCR",
      "Fleet depot bulk storage",
    ],
    advantages: [
      "ISO 22241 certified purity",
      "Available at pump, in packs and in bulk",
      "Depot storage and dispensing solutions",
      "Protects SCR catalysts from contamination failure",
    ],
    specs: [
      { label: "Standard", value: "ISO 22241" },
      { label: "Urea concentration", value: "32.5%" },
      { label: "Supply", value: "Pump, 10 L pack, bulk" },
    ],
  },
  {
    slug: "fleet-cards",
    name: "Alfa Fleet Card",
    category: "Fleet solutions",
    icon: Truck,
    image: highway,
    summary:
      "The cashless fuel card for businesses: refuel at any Alfa Globe station, control limits per vehicle and receive one consolidated monthly invoice.",
    description:
      "The Alfa Fleet Card replaces cash and receipts with a single controlled payment method for your drivers. Set limits per card, per day or per product, see every transaction with vehicle, station and volume, and close the month with one invoice instead of a shoebox of receipts. It is the backbone of our fleet programme.",
    applications: [
      "Transport and logistics fleets",
      "Company car programmes",
      "Construction and service vehicles",
      "Municipal and public fleets",
    ],
    advantages: [
      "Accepted across the whole station network",
      "Per-card limits and product restrictions",
      "Online portal with real-time transactions",
      "Consolidated monthly invoicing with VAT detail",
    ],
    specs: [
      { label: "Acceptance", value: "All Alfa Globe stations" },
      { label: "Controls", value: "Per card / day / product" },
      { label: "Reporting", value: "Online portal + monthly" },
    ],
  },
];

export const productsIntro = {
  eyebrow: "Our products",
  title: "Certified fuels and lubricants, tested at every step",
  lead: "Every litre we sell is sourced from certified terminals, transported in our own sealed tankers and verified against European standards — because quality is a process, not a promise.",
};
