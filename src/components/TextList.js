const TextList = (props) => {
  //create array of item components
  const items = props.gifs.map((itemData) => {
    return <Item url={itemData.url} />;
  });
  return (
    <div className="text-container">
      <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4">{items}</div>
    </div>
  );
};

const Item = (props) => {
  return (
    <div>
      <img src={props.url} alt="Foto" />
    </div>
  );
};
export default TextList;
