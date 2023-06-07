export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    borderColor: props.mode === "dark" ? "white" : "black",
    border: "2px solid",
  };

  let myStyle2 = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };

  return (
    <div className="container my-5" style={myStyle}>
      <h2 className="my-3">About Me</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle2}
            >
              Personal Life
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={myStyle2}
          >
            <div className="accordion-body" style={myStyle2}>
              <p>
                I'm Qazi Saboor Ali, a 20-year-old from Pakistan currently
                studying software engineering at the University of Calgary. I'm
                passionate about delving into the world of technology and
                exploring the endless possibilities it offers. In my free time,
                I love immersing myself in the captivating world of gaming.
                Whether I'm battling fierce opponents or embarking on epic
                quests, gaming provides me with an exciting escape and a chance
                to unwind. But it's not all about the virtual world for me. I
                find immense joy in hanging out with my girlfriend and friends.
                Their company brings me laughter, camaraderie, and unforgettable
                memories. From fun outings to heartfelt conversations, these
                moments with loved ones truly make life special. With my
                studies, social life, and gaming adventures, I'm embracing the
                best of both worlds and making the most of every moment that
                life offers me.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle2}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle2}
            >
              Profession
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={myStyle2}
          >
            <div className="accordion-body" style={myStyle2}>
              <p>
                As a data analyst with the geothermal research group, I am
                deeply engrossed in the world of data and its analysis. My work
                revolves around extracting valuable insights from complex
                datasets related to geothermal energy. In my professional
                journey, I have found a particular affinity for the programming
                language C. Its low-level nature and precise control over system
                resources have always fascinated me, allowing me to optimize
                algorithms and tackle intricate data manipulation tasks. Outside
                of my professional endeavors, I find great excitement in
                exploring the MERN (MongoDB, Express.js, React.js, Node.js)
                stack. This powerful combination of technologies enables me to
                develop dynamic web applications with a focus on speed,
                scalability, and user experience. I am constantly sharpening my
                skills in this tech stack, eager to build innovative solutions
                that push the boundaries of what can be achieved. When I'm not
                immersing myself in data analysis or honing my programming
                skills, I enjoy taking on side projects to further enhance my
                expertise. Two of my favorite projects include creating a
                tic-tac-toe game with an intuitive AI opponent and developing a
                weather application that harnesses API data to provide accurate
                and real-time weather updates. These projects not only allow me
                to apply my knowledge but also serve as creative outlets to
                showcase my abilities. As a data analyst working with the
                geothermal research group, I am passionate about leveraging
                technology to drive meaningful insights and contribute to the
                advancement of sustainable energy solutions. With a love for C,
                an exploration of the MERN stack, and a continuous drive to
                create innovative projects, I am dedicated to pushing the
                boundaries of what can be achieved in the world of data analysis
                and software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
