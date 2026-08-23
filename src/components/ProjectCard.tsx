import type { Project } from "@/data/portfolio";

/** Duplicate an entry in src/data/portfolio.ts to add another project — this card renders it. */
export function ProjectCard({
  project,
  index,
  onView,
}: {
  project: Project;
  index: number;
  onView: () => void;
}) {
  const reversed = index % 2 === 1;

  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
      <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
        <button
          onClick={onView}
          className="group block w-full overflow-hidden bg-secondary"
          aria-label={`View ${project.title}`}
        >
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            width={1400}
            height={1000}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </button>
      </div>
      <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
        <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-3 text-3xl sm:text-4xl">{project.title}</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <button onClick={onView} className="btn-outline mt-7">
          View Project
        </button>
      </div>
    </article>
  );
}
