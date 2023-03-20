import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "carlos osornio enriquez",
          "a freelance full-stack developer",
          "a software engineer",
          "a front-end developer",
          "react developer"
        ]}
      />
    </h1>
  );
};
export default AnimationText;
