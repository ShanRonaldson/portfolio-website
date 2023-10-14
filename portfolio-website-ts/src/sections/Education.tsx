import { UniversityInfo } from "../components/education/UniversityInfo";
import { OtherEduInfo } from "../components/education/OtherEduInfo";
import { Sections } from "./Sections.interface";

export function EducationSection({ heading, id }: Sections) {
  return (
    <section className="education-section-wrapper section-wrapper">
      <h2 id={id}>{heading}</h2>

      <h3>University Education</h3>
      <div className="edu-block">
        <UniversityInfo></UniversityInfo>
      </div>

      <h3>Other courses</h3>
      <div className="edu-block small">
        <OtherEduInfo></OtherEduInfo>
      </div>
    </section>
  );
}
