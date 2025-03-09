const Button = (props) => {
  const { buttonText, onClick } = props;
  return (
    <button
      className="bg-[#D0FF5F] text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-2 w-40 h-10 border m-2 cursor-pointer"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
