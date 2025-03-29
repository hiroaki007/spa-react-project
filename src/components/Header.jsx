
const Header = () => {
    return (
        <header className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold">Dashboard</h1>

            <div className="flex items-center">
                <span className="mr-4">User</span>
                <button className="bg-blue-500 px-3 py-1 rounded">Logout</button>
            </div>


        </header>
    );
};


export default Header;