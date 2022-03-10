import { ReactComponent as Husky } from "../images/husky.svg";

function HuskyCard(props) {
  return (
    <div className="husky">
      <Husky className="husky_image"/>
      <div className="tracks">
        {props.title}
        {props.content}
      </div>
    </div>
  );
}

export default HuskyCard;
