import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import Sidebar from "./SideBar.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  return (
      <div className="">
          <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              userRole={user.role}
          />
          <div className="flex flex-1 flex-col md:pl-64">
              <Header setSidebarOpen={setSidebarOpen}/>
              <Main/>
          </div>
      </div>

  );
};

export default Dashboard;
