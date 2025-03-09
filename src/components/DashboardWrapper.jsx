import Dashboard from "../pages/Dashboard";
import Drawer from "./Drawer";

const DashboardWrapper = () => {
  return (
    <Drawer title="Dashboard Wrapper" isExpanded={true}>
      <Dashboard />
    </Drawer>
  );
};

export default DashboardWrapper;
