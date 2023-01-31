import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <div className="container">
      <Title title={props.title} />
      <Description text={props.paragraph} />
    </div>
  );
};

export default Content;
