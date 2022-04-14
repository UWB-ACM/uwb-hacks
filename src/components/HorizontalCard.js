function HorizontalCard(props) {
  return (
    <div className="horizontalblueopacity">
      <div className="horizontalcard">
        <div className="horizontalimage">{props.image}</div>
        

        <div className="horizontalcontent">
          {props.title}
          {props.content}
        </div>
      </div>
    </div>
  );
}
export default HorizontalCard;
