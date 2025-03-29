import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "jan", value: 100 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 150 },
    { name: "Apr", value: 300 },
    { name: "May", value: 250 },
];


const DashboardChart = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">

            <h2>Monthly Sales</h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis datakey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8"/>

                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default DashboardChart;