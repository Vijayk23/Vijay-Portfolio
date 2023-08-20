export function Experience() {
  const experience = [
    {
      year: "2021 - PRESENT",
      companyName: "CORRO HEALTHCARE - ",
      role: "EXECUTIVE RCM CYCLE",
      description:
        "As a AR Executive Worked On Behalf of Clarkson eyecare Checking Eligibility & Billing patient appointments",
    },
    {
      year: "2020 - 2021",
      companyName: "OVANTICA - ",
      role: "DIGITAL MARKETING LEAD",
      description:
        "As a Lead  I worked  With Google Ads & Facebook Ads & Email-Marketing,  Maintaining Sale Team And Lead Generator",
    },
  ];
  const education = [
    {
      year: "2015 - 2019",
      institution: "SKP  COLLEGE - ",
      field: "MECHANICAL ENGINNERING ",
      description:
        "As a Mechanical Engineer i learn lot of mechanism and Techniques. CGPA: 6.54 Classification - FIRST CLASS  ",
    },
    {
      year: "2014 - 2015",
      institution: "Dr. VGN SCHOOL  - ",
      field: "MATHS BIOLOGY ",
      description:
        "As a Mathematic Student learned huge Tactics and Worked lot of Concept.",
    },
  ];
  return (
    <div>
      <h2 id="getin-touch">
        EXPERIENCE &<span id="touch"> EDUCATION</span>
      </h2>
      <div className="exp">
        {experience.map((exp) => (
          <Experien exper={exp} />
        ))}
      </div>
      <div className="exp">
        {education.map((edu) => (
          <Exduca educ={edu} />
        ))}
      </div>
    </div>
  );
}

function Experien({ exper }) {
  return (
    <div>
      <div className="exp-card">
        <div className="exp1">
          <img src="./images/work.png" id="workpng" />
          <p id="exp-year">{exper.year} </p>
        </div>
        <p id="exp-company">
          {exper.companyName} <span id="exp-role">{exper.role}</span>
        </p>
        <p id="exp-description">{exper.description}</p>
      </div>
    </div>
  );
}
function Exduca({ educ }) {
  return (
    <div>
      <div className="exp-card">
        <div className="exp1">
          <img src="./images/education.png" id="workpng" />
          <p id="exp-year">{educ.year}</p>
        </div>
        <p id="exp-company">
          {educ.institution} <span id="exp-role">{educ.field}</span>
        </p>
        <p id="exp-description">{educ.description}</p>
      </div>
    </div>
  );
}
