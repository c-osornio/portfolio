import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "carlos osornio",
          "a web developer",
          "a software engineer"
        ]}
      />
    </h1>
  );
};
export default AnimationText;
