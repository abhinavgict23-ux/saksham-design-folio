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
import res01 from "@/assets/res-01.jpg.asset.json";
import res02 from "@/assets/res-02.jpg.asset.json";
import res03 from "@/assets/res-03.jpg.asset.json";
import res04 from "@/assets/res-04.jpg.asset.json";
import res05 from "@/assets/res-05.jpg.asset.json";
import res06 from "@/assets/res-06.jpg.asset.json";
import res07 from "@/assets/res-07.jpg.asset.json";
import res08 from "@/assets/res-08.jpg.asset.json";
import res09 from "@/assets/res-09.jpg.asset.json";
import res10 from "@/assets/res-10.jpg.asset.json";
import res11 from "@/assets/res-11.jpg.asset.json";
import res12 from "@/assets/res-12.jpg.asset.json";
import res13 from "@/assets/res-13.jpg.asset.json";
import res14 from "@/assets/res-14.jpg.asset.json";
import res15 from "@/assets/res-15.jpg.asset.json";
import res16 from "@/assets/res-16.jpg.asset.json";
import res17 from "@/assets/res-17.jpg.asset.json";
import res18 from "@/assets/res-18.jpg.asset.json";
import res19 from "@/assets/res-19.jpg.asset.json";
import res20 from "@/assets/res-20.jpg.asset.json";
import res21 from "@/assets/res-21.jpg.asset.json";
import res22 from "@/assets/res-22.jpg.asset.json";
import res23 from "@/assets/res-23.jpg.asset.json";
import res24 from "@/assets/res-24.jpg.asset.json";
import homeFurnitureLayout from "@/assets/home-furniture-layout.jpg.asset.json";
import res24Cover from "@/assets/res-24-cover.jpg.asset.json";
import homeFurnitureCover from "@/assets/home-furniture-cover.jpg.asset.json";
import homeFurniturePdf from "@/assets/my-home-furniture-layout.pdf.asset.json";


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
    id: "residence",
    title: "Residence — Complete Working Drawing Set",
    summary:
      "A full three-level residence documented end to end: zoning and bubble diagrams, furniture layout plans, flooring, false ceiling, electrical, sections and coloured presentation plans.",
    description:
      "A complete residential design and documentation project (Batch 35, IVS School of Art & Design, Noida) covering a stilt floor, upper ground floor and second floor. The set starts with bubble and zoning diagrams that establish public, semi-private and private areas around the main entry, parking and stair core. It develops into furniture layout plans with door, window and furniture schedules, flooring plans with tile legends, false ceiling plans with drop levels, ceiling and wall electrical plans with light, fan and switch-board specifications, and sections showing wall finishes and heights — closing with coloured presentation plans of all three levels.",
    cover: res24Cover.url,
    images: [
      { src: res01.url, caption: "Bubble & zoning diagram — stilt floor" },
      { src: res02.url, caption: "Bubble & zoning diagram — upper ground floor" },
      { src: res03.url, caption: "Bubble & zoning diagram — second floor" },
      { src: res04.url, caption: "Mood board — contemporary design style" },
      { src: res05.url, caption: "Furniture layout plan — stilt floor with door & window schedule" },
      { src: res06.url, caption: "Furniture layout plan — upper ground floor with furniture schedule" },
      { src: res07.url, caption: "Furniture layout plan — second floor with furniture schedule" },
      { src: res08.url, caption: "Flooring plan — stilt floor with flooring legend" },
      { src: res09.url, caption: "Flooring plan — upper ground floor" },
      { src: res10.url, caption: "Flooring plan — second floor" },
      { src: res11.url, caption: "False ceiling plan — stilt floor" },
      { src: res12.url, caption: "False ceiling plan — upper ground floor" },
      { src: res13.url, caption: "False ceiling plan — second floor" },
      { src: res14.url, caption: "Ceiling electrical plan — stilt floor" },
      { src: res15.url, caption: "Ceiling electrical plan — upper ground floor" },
      { src: res16.url, caption: "Ceiling electrical plan — second floor" },
      { src: res17.url, caption: "Wall electrical plan — stilt floor" },
      { src: res18.url, caption: "Wall electrical plan — upper ground floor" },
      { src: res19.url, caption: "Wall electrical plan — second floor" },
      { src: res20.url, caption: "Section A-A' — finishes and heights" },
      { src: res21.url, caption: "Section C-C' — finishes and heights" },
      { src: res22.url, caption: "Presentation plan — stilt floor" },
      { src: res23.url, caption: "Presentation plan — upper ground floor" },
      { src: res24.url, caption: "Presentation plan — second floor" },
    ],
    materials: [
      "Terrazzo tiles (stilt parking & servants' room)",
      "Anti-skid ceramic tiles (wet areas)",
      "Vitrified tiles 2'x4'",
      "Quartz stone counters",
      "Wooden flooring (bedrooms)",
      "Apex & royal sheen emulsion paint",
      "Matt finish emulsion paint",
    ],
    software: ["AutoCAD", "SketchUp", "Photoshop"],
    links: [
      {
        label: "View Project Drive Folder",
        href: "https://drive.google.com/drive/folders/1rGT1T1C-CuGv-8jc3NYcXhfEHuhe2up8",
      },
    ],
  },
  {
    id: "studio-apartment",
    title: "Studio Apartment — MM33 Case Study & Design",
    summary:
      "Academic studio-apartment project: case study, client brief, zoning, furniture layout plans, sectional elevation, mood board and a physical scale model.",
    description:
      "A complete studio-apartment studio project (Batch 35, IVS School of Art & Design, Noida). It begins with a case study of the 54 m² MM33 Apartment by BURO, analysing relative zoning, bubble diagrams and material honesty. The design phase responds to a client brief for a 20-year-old composition painter: a workspace with supply storage, combined kitchen and dining, a large dressing mirror and wardrobe, and a small pooja niche — resolved across a ground floor and mezzanine in a minimalist 'cloud & stone' palette of pure white walls with light grey and beige furniture. Deliverables include zoning studies, ground and mezzanine floor plans, furniture layout plans with schedules, a sectional elevation with heights, a mood board and a hand-built scale model.",
    cover: studio02.url,
    images: [
      { src: studio01.url, caption: "Case study sheet 1 — zoning & bubble diagram (MM33 Apartment)" },
      { src: studio02.url, caption: "Case study sheet 2 — living, kitchen, sleeping & washroom analysis" },
      { src: studio03.url, caption: "Client brief & planning — ground and mezzanine plans, zoning, bubble diagram" },
      { src: studio04.url, caption: "Mood board — minimalist 'cloud & stone' palette, fixtures and furniture" },
      { src: studio05.url, caption: "Furniture layout plan — ground floor with furniture schedule" },
      { src: studio06.url, caption: "Furniture layout plan — mezzanine floor with schedule" },
      { src: studio07.url, caption: "Sectional elevation with height schedule" },
      { src: studio08.url, caption: "Scale model — top view of ground floor and mezzanine" },
      { src: studio09.url, caption: "Scale model — living area, balcony and stair" },
      { src: studio10.url, caption: "Scale model — overall view" },
    ],
    materials: [
      "Terracotta hatching walls",
      "Sandstone flooring (main area)",
      "Honey oak flooring (mezzanine)",
      "Pure white walls, light grey & beige furniture",
      "Slate grey upholstery",
      "Blackened iron / metal finishes",
      "Moss green biophilia accents",
    ],
    software: ["AutoCAD", "SketchUp", "Hand drafting & rendering", "Physical model making"],
    links: [
      { label: "Open Full Sheet Set (PDF)", href: studioSheetsPdf.url },
      {
        label: "View Project Drive Folder",
        href: "https://drive.google.com/drive/folders/1PEA4zQGbic6m1HS5BS81ZN087Vp-SRo6",
      },
    ],
  },
  {
    id: "home-furniture-layout",
    title: "My Home — Furniture Layout Plan",
    summary:
      "A measured furniture layout plan of my own home: a 39'-0\" x 45'-0\" plot planned with bedrooms, living, dining, kitchen and covered parking.",
    description:
      "A measured drawing and furniture layout plan of my own home, drafted in AutoCAD. The plan sets out a 39'-0\" x 45'-0\" footprint on an irregular 47'-3\" deep plot, with three bedrooms and attached bathrooms, a combined living and dining area, an L-shaped kitchen with sink and hob, a powder room, a staircase core and covered parking for a car and two-wheelers. It records door swings, window openings, level changes and key clearances alongside the furniture placement.",
    cover: homeFurnitureCover.url,
    images: [
      {
        src: homeFurnitureLayout.url,
        caption: "Furniture layout plan — bedrooms, living, dining, kitchen and parking",
      },
    ],
    materials: [
      "Vitrified tile flooring",
      "Wooden wardrobes & dressing units",
      "Granite kitchen counter",
      "Ceramic tiles (bathrooms)",
    ],
    software: ["AutoCAD"],
    links: [{ label: "Open Layout Sheet (PDF)", href: homeFurniturePdf.url }],
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
