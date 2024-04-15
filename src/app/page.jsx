const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative flex justify-center">
        <img src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2">
        {/* TITLE */}
        <h1>
          Hi, I'm Yohanse Mehabaw: Self-Learner Developer & Electrical
          Engineering Student
        </h1>
        {/* DESCRIPTION */}
        <p>
          Welcome to my portfolio! I'm passionate about both software
          development and electrical engineering. As a self-learner in the world
          of coding, I'm constantly exploring new technologies and honing my
          skills to create innovative solutions. Alongside my journey in
          software, I'm pursuing my degree in Electrical Engineering, where I
          delve into the fascinating realm of circuits, systems, and renewable
          energy. Explore my projects and journey as I strive to merge the
          worlds of technology and engineering to make a meaningful impact.
        </p>
        {/* BUTTONS */}
        <div className="flex">
          <button>View My Work</button>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
