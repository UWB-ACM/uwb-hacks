function BlueCard(props) {
  return (
    <div className="bluecard-outer">
      <div className="bluecard-inner">
        {props.title}
        {props.content}
      </div>
    </div>
  );
}

export default BlueCard;
