export function Workexperience() {
  const works = [
    {
      num: 3,
      plus: "+",
      title1: "— YEARS OFF",
      title2: "EXPERIENCE",
    },
    {
      num: 10,
      plus: "+",
      title1: "— COMPLETED",
      title2: "PROJECTS",
    },
    {
      num: 5,
      plus: "+",
      title1: "— HAPPY",
      title2: "CLIENTS",
    },
    {
      num: 12,
      plus: "+",
      title1: "— CERTIFICATE",
      title2: "WON",
    },
  ];

  return (
    <div className="card">
      {works.map((card) => (
        <Work work={card} />
      ))}
    </div>
  );
}

function Work({ work }) {
  return (
    <div className="card-container">
      <p>
        {work.num}
        <sup>{work.plus}</sup>
      </p>
      <p> {work.title1}</p>
      <p> {work.title2}</p>
    </div>
  );
}
