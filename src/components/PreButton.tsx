import React, { useState } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
import axios from "axios";
import { get } from "http";
import { isConstructorDeclaration } from "typescript";

function PreButton() {

    const[PreDatas, setPreData] = useState([1,2]);


    function AllPre() {
        axios.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", { headers: { "X-API-KEY": "rMpQU6kyxGmETmpOuebxZzmlESj09itPW5d2fMkW" } })
            .then(function (response) {
                console.log(response.data.result);
                setPreData(response.data.result);
            })
            .catch(function (error) {
                console.log("error");
            });
    }

    return (
        <div>
            <button onClick={AllPre}>Go</button>

        </div>
    );
}

export default PreButton;
