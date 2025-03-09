import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="text-2xl">Welcome!</div>
      <Card
        altText="folder"
        iconSrc="https://img.icons8.com/ios-filled/50/000000/folder.png"
        title="Create Study Group"
      />
    </div>
  );
};

export default Dashboard;
