import listingData from "../../data/listing-data";
function ListingItem({ image, title, description, price ,discount,rating}) {
  return (
    <div className="listing-item">
      <div className="listing-img">
        <img src={image} alt={title} />
        <button className="discount-item"> {discount}</button>
        <button className="rating-item" >
          <span>⭐</span> <p> {rating}</p>
        </button>
      </div>

      <div className="listing-details">
        <h3 className="listing-title">{title}</h3>
        <p className="listing-description">{description}</p>
        <div className="listing-price">
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
}

function Listing() {
  return (
    <section className="listing-container">
      {listingData.map((listing) => {
        return (
          <ListingItem
            image={listing.Image}
            title={listing.title}
            description={listing.description}
            price={listing.price}
            discount={listing.discount}
            rating={listing.rating}
          />
        );
      })}
    </section>
  );
}

export default Listing;
