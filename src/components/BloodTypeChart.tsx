import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "A+", value: 35 },
  { name: "B+", value: 25 },
  { name: "O+", value: 30 },
  { name: "AB+", value: 10 },
  { name: "A-", value: 15 },
  { name: "B-", value: 10 },
  { name: "O-", value: 12 },
  { name: "AB-", value: 8 },
];

const COLORS = ["#E53E3E", "#DD6B20", "#D69E2E", "#48BB78", "#38B2AC", "#4299E1", "#667EEA", "#9F7AEA"];

export function BloodTypeChart() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Blood Type Distribution</h3>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}