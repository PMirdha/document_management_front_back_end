import DashboardFooter from "./components/footer";
import DashboardHeader from "./components/header";
import DashboardSideBar from "./components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardHeader />
      <DashboardSideBar />
      <div id="main" className="main">
        {children}
      </div>
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
