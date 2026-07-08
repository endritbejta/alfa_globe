import { FlaskConical, Sprout, Leaf, Tractor, Droplets, SunMedium } from "lucide-react";

export const fertilizers = [
  {
    icon: FlaskConical,
    name: "UREA 46% N",
    type: "Nitrogen",
    description:
      "The workhorse of nitrogen fertilization. High-concentration urea for cereals, maize and pasture, driving strong vegetative growth and protein content.",
    benefits: ["Highest nitrogen content per kg", "Ideal for top-dressing cereals", "Granulated for even spreading"],
  },
  {
    icon: Sprout,
    name: "NPK Complex",
    type: "Balanced",
    description:
      "Balanced nitrogen–phosphorus–potassium formulations (15-15-15 and crop-specific ratios) that feed the full nutrient cycle from a single application.",
    benefits: ["One pass covers N, P and K", "Ratios matched to crop and soil", "Strong root and early growth"],
  },
  {
    icon: Droplets,
    name: "Phosphate (DAP/MAP)",
    type: "Phosphorus",
    description:
      "Di- and mono-ammonium phosphate for seedbed preparation — the phosphorus young plants need for root development and energy transfer.",
    benefits: ["Best applied at sowing", "Accelerates root establishment", "Improves winter hardiness"],
  },
  {
    icon: SunMedium,
    name: "Potassium (KCl)",
    type: "Potassium",
    description:
      "Potassium chloride for fruit, vegetable and root crops — regulating water balance, strengthening stems and improving quality and shelf life.",
    benefits: ["Improves drought resistance", "Raises fruit quality and size", "Essential for potato and orchard crops"],
  },
];

export const agriServices = [
  {
    icon: Sprout,
    title: "Certified seeds",
    description:
      "High-yield wheat, maize and barley varieties from certified breeders, selected for the region's soil and climate.",
  },
  {
    icon: Leaf,
    title: "Agronomic advice",
    description:
      "Our team helps you match fertilizer type, rate and timing to your soil analysis and crop plan — not just sell you bags.",
  },
  {
    icon: Tractor,
    title: "Seasonal farm fuel",
    description:
      "Bulk diesel delivered to the farm before planting and harvest peaks, with volume pricing locked in ahead of the season.",
  },
];
