import "../Styles/Product.css";

export const Product = (props) => {
  return (
    <div className="Product">
      <img src={props.card.image} className="cards"></img>
      <div>
      <h2>{props.card.name}</h2>
      <p>{props.card.description}</p>
      </div>
      <div>
        <ul className="description">

          {props.card.item.map(items => 
          <li>{items}</li>
            )}
        </ul>
      </div>
            
      <button className="applicationButton">Apply</button>
    </div>
  );
};

export default Product;
