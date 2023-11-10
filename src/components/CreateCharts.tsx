import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend, Tooltip } from "recharts";


function CreateCharts(props:any) {
    return (
        <div>
            <LineChart width={1000} height={300} data={props.data}>
                <XAxis dataKey="year" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Legend />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </div>
    )

}

export default CreateCharts;