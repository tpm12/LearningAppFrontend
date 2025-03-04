const Button = (props) => {
  const { buttonText, onClick } = props;
  return (
    <button
      className="bg-[#D0FF5F] border-black rounded-md p-2 w-40 h-10 border m-2 cursor-pointer"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
