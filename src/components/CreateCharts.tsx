import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";


function CreateCharts(props:any) {
    return (
        <div>
            <LineChart width={500} height={300} data={props.data}>
                <XAxis dataKey="year" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </div>
    )

}

export default CreateCharts;