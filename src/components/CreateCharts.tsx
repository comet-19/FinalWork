import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";


function CreateCharts(props:any) {
    return (
        <div>
            <LineChart width={500} height={300} data={props.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
        </div>
    )

}

export default CreateCharts;