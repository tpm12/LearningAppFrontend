const Drawer = (props) => {
  const { children, isExpanded, title } = props;
  return (
    isExpanded && (
      <div className="flex ">
        <div className="drawer h-screen flex-grow-1 leftContainer">
          <div className="text-2xl"> {title}</div>
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="w-full navbar bg-base-300">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContainer flex-grow-11">{children}</div>
      </div>
    )
  );
};

export default Drawer;
