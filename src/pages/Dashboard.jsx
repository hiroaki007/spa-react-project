import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import DashboardChart from "../components/DashboardChart";


const Dashboard = () => {
    return (
        <div className="flex">

            <Sidebar />
            <div className="flex-1 bg-gray-100 min-h-screen">
                <Header />
                
                <div className="p-4 grid grid-cols-3 gap-4">
                    <DashboardCard title="Total Users" value="1,024" />
                    <DashboardCard title="Revenue" value="$12,345" />
                    <DashboardCard title="Orders" value="245" />
                    
                    <div className="col-span-3">
                        <DashboardChart />
                    </div>

                </div>
            </div>

        </div>
    );
};


export default Dashboard;