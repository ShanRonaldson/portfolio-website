import { Sections } from "./Sections.interface";

export function ProjectsSection({ heading, id }: Sections) {
  return (
    <section className="projects-section-wrapper">
      <h2 id={id}>{heading}</h2>
    </section>
  );
}
