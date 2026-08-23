import residentialCover from "@/assets/project-residential.jpg";
import studioCover from "@/assets/project-studio.jpg";
import floorPlan from "@/assets/floor-plan.jpg";
import materials from "@/assets/materials.jpg";
import certificatePlaceholder from "@/assets/certificate-placeholder.jpg";

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
  email: "Mr.sakshamgupta@gmail.com",
  phone: "8718819869",
  linkedin: "https://www.linkedin.com/",
  cvUrl: "/saksham-gupta-cv.pdf",
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
    image: certificatePlaceholder,
    file: certificatePlaceholder,
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    issuer: "Google",
    image: certificatePlaceholder,
    file: certificatePlaceholder,
  },
  {
    id: "basic-it",
    name: "Basic Information Technology",
    issuer: "Certification Course",
    image: certificatePlaceholder,
    file: certificatePlaceholder,
  },
];
