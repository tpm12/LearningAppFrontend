const Input = (props) => {
  const { type, placeholder } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="py-2 pl-10 text-sm border-b-1 focus:outline-none focus:ring focus:ring-white m-5"
    />
  );
};

export default Input;
