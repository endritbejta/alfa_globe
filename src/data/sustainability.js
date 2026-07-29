import { Droplets, Route, Recycle, ShieldCheck, Zap, Sprout } from "lucide-react";

export const pillars = [
  {
    icon: Droplets,
    title: "Cleaner fuels",
    description:
      "Ultra-low-sulphur diesel, additivated premium fuels that cut consumption, and ISO-certified AdBlue that keeps SCR emission systems working as designed.",
  },
  {
    icon: Route,
    title: "Efficient logistics",
    description:
      "Route optimisation and full-load planning reduce empty kilometres. Every avoided trip is fuel not burned and emissions not released.",
  },
  {
    icon: ShieldCheck,
    title: "Spill prevention",
    description:
      "Sealed transfer procedures, double-walled storage, staff training and spill-response kits at every site protect soil and groundwater.",
  },
  {
    icon: Recycle,
    title: "Responsible waste handling",
    description:
      "Used oils, filters and packaging from our operations are collected and processed through licensed recycling partners.",
  },
  {
    icon: Zap,
    title: "Efficient fuel facilities",
    description:
      "LED lighting across all stations, and a phased rollout of rooftop solar to power station operations from 2027.",
  },
  {
    icon: Sprout,
    title: "Community investment",
    description:
      "We support local education and sports initiatives, and prioritise local hiring and suppliers in every municipality we operate in.",
  },
];

export const commitments = [
  { value: "−15%", label: "Fleet fuel intensity by 2030", detail: "through routing, driver training and fleet renewal" },
  { value: "100%", label: "Stations on LED lighting", detail: "completed across the network in 2025" },
  { value: "2027", label: "First solar-powered station", detail: "rooftop PV pilot at the Çagllavicë flagship" },
  { value: "0", label: "Reportable spills target", detail: "maintained through prevention-first procedures" },
];
