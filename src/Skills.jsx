export function Skills() {
  const skill = [
    {
      name: "react",
      img: "./images/react.png",
    },
    {
      name: "javascript",

      img: "./images/javascript.png",
    },
    {
      name: "html",
      img: "./images/html.png",
    },
    {
      name: "css",

      img: "./images/css.png",
    },
    {
      name: "google",

      img: "./images/google.png",
    },
    {
      name: "figma",

      img: "./images/figma.png",
    },
  ];
  return (
    <div className="skillcard">
      {skill.map((pic) => (
        <Skillpic imgs={pic} />
      ))}
    </div>
  );
}

function Skillpic({ imgs }) {
  return (
    <div id="imgcard">
      <img src={imgs.img} id="skillimg"></img>
    </div>
  );
}
