import residentialCover from "@/assets/project-residential.jpg";
import studioCover from "@/assets/project-studio.jpg";
import floorPlan from "@/assets/floor-plan.jpg";
import materials from "@/assets/materials.jpg";
import designWeekCertificate from "@/assets/design-week-certificate.png.asset.json";
import wadeAsiaCertificate from "@/assets/wade-asia-certificate.png.asset.json";
import cvAsset from "@/assets/saksham-gupta-cv.pdf.asset.json";
import studioSheetsPdf from "@/assets/studio-apartment-sheets.pdf.asset.json";
import studio01 from "@/assets/studio-01.jpg.asset.json";
import studio02 from "@/assets/studio-02.jpg.asset.json";
import studio03 from "@/assets/studio-03.jpg.asset.json";
import studio04 from "@/assets/studio-04.jpg.asset.json";
import studio05 from "@/assets/studio-05.jpg.asset.json";
import studio06 from "@/assets/studio-06.jpg.asset.json";
import studio07 from "@/assets/studio-07.jpg.asset.json";
import studio08 from "@/assets/studio-08.jpg.asset.json";
import studio09 from "@/assets/studio-09.jpg.asset.json";
import studio10 from "@/assets/studio-10.jpg.asset.json";


/**
 * EDIT HERE — all site content lives in this file.
 * To add a project: copy one object in `projects` and change its values.
 * To add a certificate: copy one object in `certificates`.
 * Replace images by dropping new files in src/assets and updating the import above.
 */

export const profile = {
  name: "Saksham Gupta",
  tagline: "Interior Design | Space Planning | Visualization",
  intro:
    "Interior Design professional currently pursuing a Professional Diploma in Interior Designing, with practical exposure to residential design, space planning, 2D drafting, visualization, materials, and construction-site coordination.",
  email: "mr.saksham104@gmail.com",
  phone: "8718819869",
  linkedin: "https://www.linkedin.com/in/saksham-gupta-a01b1b289/",
  cvUrl: cvAsset.url,
};

export const skills = [
  "Residential Interior Design",
  "Space Planning",
  "2D Plan Drawing",
  "2D Rendering",
  "Visualization",
  "Materials and Finishes",
  "Construction-Site Coordination",
];

export const education = [
  {
    degree: "Professional Diploma in Interior Designing",
    school: "IVS School of Art and Design, Noida",
    period: "Aug 2025 – Present",
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    school: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
    period: "2022 – 2025",
  },
];

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  cover: string;
  images: { src: string; caption: string }[];
  materials: string[];
  software: string[];
  /** Optional links shown in the project detail view. */
  links?: { label: string; href: string }[];
};


export const projects: Project[] = [
  {
    id: "residential",
    title: "Residential Interior Projects",
    summary:
      "Residential space-planning concepts focused on functional layouts, furniture placement, aesthetics, materials and finishes.",
    description:
      "A set of residential interior studies exploring circulation, zoning and furniture layouts for family living. Each layout balances daylight, storage and comfort while keeping a warm, neutral material palette throughout the home.",
    cover: residentialCover,
    images: [
      { src: residentialCover, caption: "Living area — design visual" },
      { src: floorPlan, caption: "2D floor plan — furniture layout" },
      { src: materials, caption: "Materials and finishes board" },
    ],
    materials: ["Oak veneer", "Lime plaster", "Linen upholstery", "Brushed brass", "Beige stone"],
    software: ["AutoCAD", "SketchUp", "Photoshop"],
  },
  {
    id: "studio-apartment",
    title: "Studio Apartment Project",
    summary:
      "Academic studio-apartment project covering concept development, spatial planning and interior visualization.",
    description:
      "A compact studio apartment designed around multi-functional zones. The project covers concept development, spatial planning, and interior visualization, using vertical space and built-in joinery to keep the plan open.",
    cover: studioCover,
    images: [
      { src: studioCover, caption: "Studio visualization" },
      { src: floorPlan, caption: "2D plan — compact zoning" },
      { src: materials, caption: "Finish palette" },
    ],
    materials: ["Birch ply", "Micro-cement", "Matte white laminate", "Warm oak flooring"],
    software: ["SketchUp", "AutoCAD", "Lumion"],
  },
];

export type Certificate = {
  id: string;
  name: string;
  issuer: string;
  image: string;
  /** Link opened by "View Certificate" — swap for a PDF URL if you have one. */
  file: string;
};

export const certificates: Certificate[] = [
  {
    id: "design-week",
    name: "Certificate of Excellence in Design Week",
    issuer: "IVS School of Art and Design",
    image: designWeekCertificate.url,
    file: designWeekCertificate.url,
  },
  {
    id: "wade-asia",
    name: "Wade Asia certificate",
    issuer: "WADE ASIA Architecture & Design Event",
    image: wadeAsiaCertificate.url,
    file: wadeAsiaCertificate.url,
  },
];
