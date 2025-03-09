const Card = (props) => {
  return (
    <div className="flex flex-col items-center p-10 rounded-2xl  w-1/3 m-5">
      <img
        src={props.iconSrc}
        alt={props.altText}
        className="bg-[#D0FF5F] rounded-xl p-3"
      />
      <h2 className="text-xl m-5">{props.title}</h2>
    </div>
  );
};

export default Card;
