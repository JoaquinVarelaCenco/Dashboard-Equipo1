import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    visitas: 4000,
    stock: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    visitas: 3000,
    stock: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    visitas: 2000,
    stock: 10800,
    amt: 2290,
  },
  {
    name: 'Page D',
    visitas: 2780,
    stock: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    visitas: 1890,
    stock: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    visitas: 2390,
    stock: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    visitas: 3490,
    stock: 4300,
    amt: 2100,
  },
];

const ChartBar = ()=> {

    return (
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="stock" fill="#8884d8" />
            <Bar dataKey="visitas" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
    );
}

export default ChartBar;