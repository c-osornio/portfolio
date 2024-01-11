import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "carlos osornio",
          "a data analyst",
          "a software engineer",
          "a web developer"
        ]}
      />
    </h1>
  );
};
export default AnimationText;
