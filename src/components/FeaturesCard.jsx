const FeaturesCard = (props) => {
  const { altText, description, iconSrc, title } = props;
  return (
    <div className="flex flex-col items-center p-10 rounded-2xl  w-1/3 m-5">
      <img
        src={iconSrc}
        alt={altText}
        className="bg-[#D0FF5F] rounded-xl p-3"
      />
      <h2 className="text-xl m-5">{title}</h2>
      <div className="text-lg m-5">{description}</div>
    </div>
  );
};

export default FeaturesCard;
