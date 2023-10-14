import { Sections } from "./Sections.interface";

export function LandingSection({ heading, id }: Sections) {
  return (
    <section className="landing-section-wrapper">
      <h2 id={id}>Hello</h2>
      <p>Welcome to my portfolio page.</p>
    </section>
  );
}
