import React, { useState } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
import axios from "axios";
import { get } from "http";
import { isConstructorDeclaration } from "typescript";
import OneButton from "./OneButton";


function PreButton() {

    let Predatas;
    const [PreNamedatas, setPreNamedatas] = useState<string[]>([]);


    function AllPre() {
        axios.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", { headers: { "X-API-KEY": "rMpQU6kyxGmETmpOuebxZzmlESj09itPW5d2fMkW" } })
            .then(function (response) {
                console.log(response.data.result);
                Predatas = response.data.result;
                const getPreNameDatas = Predatas.map((item:any) => item["prefName"]);
                setPreNamedatas(getPreNameDatas);
            })
            .catch(function (error) {
                console.log("error");
            });
    }

    return (
        <div>
            <button onClick={AllPre}>Go</button>

            <div className="PreCheckBox">
                {
                    PreNamedatas.map((PreName, index) =>  {
                        return (
                            <OneButton prename={PreName} key={index}/>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default PreButton;
