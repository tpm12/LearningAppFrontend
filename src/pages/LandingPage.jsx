import { useNavigate } from "react-router";
import Button from "../components/Button";
import FeaturesCard from "../components/FeaturesCard";

const LandingPage = () => {
  const navigate = useNavigate();

  const scrollToKeyFeatures = () => {
    const element = document.getElementById("keyFeatures");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex h-full flex-col">
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
              <Button
                buttonText={"Get Started"}
                onClick={() => navigate("/login")}
              />
              <Button buttonText={"Learn More"} onClick={scrollToKeyFeatures} />
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
      <div id="keyFeatures" className="flex h-screen w-screen">
        <div className="flex flex-col bg-[#FDF7E7] justify-stretch">
          <div className="relative w-full bg-purple-700">
            <svg
              className="absolute top-0 left-0 w-full h-[200px]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0 100 Q50 0, 100 100 L100 0 L0 0 Z" fill="#6B31E3" />
            </svg>
            <h2 className="text-white text-4xl font-bold absolute top-10 left-1/2 transform -translate-x-1/2">
              Key features
            </h2>
          </div>

          <div className="flex justify-between">
            <FeaturesCard
              iconSrc={"src/assets/images/face.png"}
              altText="collaboration"
              title="Collaborative Learning"
              description="Create or join study groups and learn together."
            />
            <FeaturesCard
              iconSrc={"src/assets/images/ai_spark.png"}
              altText="ai powered assistance"
              title="AI-Powered Assistance"
              description="Get AI-based recommendations and learning insights."
            />
            <FeaturesCard
              iconSrc={"src/assets/images/chat.png"}
              altText="instant messaging"
              title="Real-Time Chat"
              description="Fast communication with messages, voice notes, and file sharing."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
