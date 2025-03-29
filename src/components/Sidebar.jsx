
const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-4">
            
            <h1 className="text-xl font-bold"> Dashboard </h1>

            <ul className="mt-4">
                <li className="p-2 hover:bg-gray-700 rounded">Home</li>
                <li className="p-2 hover:bg-gray-700 rounded">Analytics</li>
                <li className="p-2 hover:bg-gray-700 rounded">Setting</li>
            </ul>

        </div>
    );
};

export default Sidebar;
