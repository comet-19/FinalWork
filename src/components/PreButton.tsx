import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";

function PreButton() {
    const data = [[10,20],[20,40]];
    return (
        <div>
            <input type="checkbox" name="" id="" />
            <span>aaa</span>
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
}

export default PreButton;
