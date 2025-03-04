import Button from "../components/Button";

const LandingPage = () => {
  return (
    <div className="flex h-screen   flex-col">
      <div className="h-24 bg-[#6B31E3] text-5xl text-white flex items-center p-3">
        Learning App
      </div>
      <div className="landingPageBody flex w-full">
        <div className="flex justify-center items-center bg-[#FDF7E7] w-9/12">
          <div className="text-center">
            <h1 className="text-7xl font-bold mb-4">
              Learn together - Grow together
            </h1>
            <p className="text-lg m-10">
              Connect, collaborate, and learn with friends in real time. Chat,
              share knowledge, and stay on track with your goals.
            </p>
            <div className="m-10 flex justify-end">
              <Button buttonText={"Get Started"} />
              <Button buttonText={"Learn More"} />
            </div>
          </div>
        </div>
        <div className="w-175">
          <img
            src="src/assets/images/landingpage.jpeg"
            alt="engineers at work"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
