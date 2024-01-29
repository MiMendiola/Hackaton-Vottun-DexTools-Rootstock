function ServicesData(props) {
  const { image, heading, text, onClick } = props;

  return (
    <div className="s-card" onClick={onClick}>
      <div className="s-image">
        <img src={image} alt="Service" />
      </div>
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
}

export default ServicesData;
