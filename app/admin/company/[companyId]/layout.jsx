import DashboardFooter from "../../components/footer";
import DashboardHeader from "../../components/header";
import CompanySideBar from "./components/sidebar";

const DashboardLayout = ({ children, params }) => {
  return (
    <>
      <DashboardHeader />
      <CompanySideBar params={params} />
      <div id="main" className="main">
        {children}
      </div>
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
