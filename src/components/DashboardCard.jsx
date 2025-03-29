
const DashboardCard = ({ title, value}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-gray-700 text-lg">{title}</h2>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
};

export default DashboardCard;