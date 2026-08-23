import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroImage from "@/assets/hero-interior.jpg";
import { Modal } from "@/components/Modal";
import { ProjectCard } from "@/components/ProjectCard";
import {
  certificates,
  education,
  profile,
  projects,
  skills,
  type Certificate,
  type Project,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saksham Gupta — Interior Design Portfolio" },
      {
        name: "description",
        content:
          "Interior design portfolio of Saksham Gupta: residential interiors, studio apartment design, space planning, 2D drafting and visualization.",
      },
      { property: "og:title", content: "Saksham Gupta — Interior Design Portfolio" },
      {
        property: "og:description",
        content:
          "Selected interior design projects, certificates and contact details of Saksham Gupta.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="text-sm tracking-[0.28em] uppercase">
            Saksham Gupta
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a href={profile.cvUrl} download className="btn-solid !py-2 !px-4">
            Download CV
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow">{profile.tagline}</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              SAKSHAM
              <br />
              GUPTA
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn-solid">
                View Projects
              </a>
              <a href={profile.cvUrl} download className="btn-outline">
                Download CV
              </a>
            </div>
          </div>
          <img
            src={heroImage}
            alt="Warm minimal residential interior with oak furniture and natural light"
            width={1600}
            height={1104}
            className="aspect-[4/3] w-full object-cover"
          />
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-4">
              <p className="eyebrow">01 — Profile</p>
              <h2 className="mt-3 text-4xl">About Me</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-2xl text-base leading-relaxed">
                Currently pursuing a Professional Diploma in Interior Designing at IVS School of
                Art and Design, Noida. A BBA background paired with practical, studio-based
                exposure to residential interiors and site coordination.
              </p>

              <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="border-b border-border pb-3 text-sm text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 text-xl">Education</h3>
              <div className="mt-5 space-y-6">
                {education.map((e) => (
                  <div key={e.degree}>
                    <p className="text-base">{e.degree}</p>
                    <p className="text-sm text-muted-foreground">{e.school}</p>
                    <p className="eyebrow mt-1">{e.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <p className="eyebrow">02 — Work</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Selected Projects</h2>
            <div className="mt-14 space-y-20 lg:space-y-28">
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onView={() => setActiveProject(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <p className="eyebrow">03 — Credentials</p>
            <h2 className="mt-3 text-4xl">Certificates</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((c) => (
                <article key={c.id} className="border border-border bg-card">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg leading-snug">{c.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                    <button
                      onClick={() => setActiveCertificate(c)}
                      className="btn-outline mt-5 w-full"
                    >
                      View Certificate
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
            <p className="eyebrow">04 — Contact</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Let's Connect</h2>
            <div className="mt-8 space-y-1 text-sm">
              <p>
                <span className="text-muted-foreground">Email: </span>
                <a href={`mailto:${profile.email}`} className="underline underline-offset-4">
                  {profile.email}
                </a>
              </p>
              <p>
                <span className="text-muted-foreground">Phone: </span>
                <a href={`tel:${profile.phone}`} className="underline underline-offset-4">
                  {profile.phone}
                </a>
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-solid">
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                LinkedIn
              </a>
              <a href={profile.cvUrl} download className="btn-outline">
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-muted-foreground">
          © 2026 Saksham Gupta — Interior Design Portfolio
        </div>
      </footer>

      {/* Project detail */}
      <Modal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
        label={activeProject?.title ?? "Project"}
      >
        {activeProject && (
          <div>
            <h2 className="text-3xl">{activeProject.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {activeProject.description}
            </p>
            <div className="mt-8 space-y-8">
              {activeProject.images.map((img) => (
                <figure key={img.caption}>
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="w-full object-cover"
                  />
                  <figcaption className="eyebrow mt-2">{img.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-lg">Materials &amp; Finishes</h3>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {activeProject.materials.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg">Software Used</h3>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {activeProject.software.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Certificate viewer */}
      <Modal
        open={!!activeCertificate}
        onClose={() => setActiveCertificate(null)}
        label={activeCertificate?.name ?? "Certificate"}
      >
        {activeCertificate && (
          <div>
            <img
              src={activeCertificate.image}
              alt={activeCertificate.name}
              loading="lazy"
              width={1200}
              height={900}
              className="w-full object-contain"
            />
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl">{activeCertificate.name}</h2>
                <p className="text-xs text-muted-foreground">{activeCertificate.issuer}</p>
              </div>
              <a
                href={activeCertificate.file}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Open Full Size
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
