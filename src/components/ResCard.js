const ResCard = (props) => {
  const { inputData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    inputData?.info;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-50">
      <img
        className="resimg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h1 className="block" style={{ fontSize: "20px" }}>
        {name}
      </h1>
      <h3 className="block">{cuisines.join(", ")}</h3>
      <h3 className="block">{avgRating} stars</h3>
      <h3 className="block">{costForTwo}</h3>
      <h3 className="block">{sla.deliveryTime} minutes</h3>
    </div>
  );
};
export const withLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 m-2 bg-black text-white rounded-lg">
          Open
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};
export default ResCard;
