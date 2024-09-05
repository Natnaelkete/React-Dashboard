import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const userGrowthData = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 1500 },
  { month: "Mar", users: 2000 },
  { month: "Apr", users: 3000 },
  { month: "May", users: 4000 },
  { month: "Jun", users: 5000 },
];

function UserGrowthChart() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">User Growth</h2>
      <div className="h-[320px]">
        <ResponsiveContainer>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey={"month"} stroke="#9CA3Af" />
            <YAxis stroke="#9CA3Af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8B5CF6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default UserGrowthChart;
