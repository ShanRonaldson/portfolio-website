import { Sections } from "./Sections.interface";

export function AboutSection({ heading, id }: Sections) {
  return (
    <section className="about-section-wrapper">
      <h2 id={id}>{heading}</h2>
    </section>
  );
}
